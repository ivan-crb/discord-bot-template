const Discord = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

const permsArray = [
  "CREATE_INSTANT_INVITE",
  "KICK_MEMBERS",
  "BAN_MEMBERS",
  "ADMINISTRATOR",
  "MANAGE_CHANNELS",
  "MANAGE_GUILD",
  "ADD_REACTIONS",
  "VIEW_AUDIT_LOG",
  "PRIORITY_SPEAKER",
  "STREAM",
  "VIEW_CHANNEL",
  "SEND_MESSAGES",
  "SEND_TTS_MESSAGES",
  "MANAGE_MESSAGES",
  "EMBED_LINKS",
  "ATTACH_FILES",
  "READ_MESSAGE_HISTORY",
  "MENTION_EVERYONE",
  "USE_EXTERNAL_EMOJIS",
  "VIEW_GUILD_INSIGHTS",
  "CONNECT",
  "SPEAK",
  "MUTE_MEMBERS",
  "DEAFEN_MEMBERS",
  "MOVE_MEMBERS",
  "USE_VAD",
  "CHANGE_NICKNAME",
  "MANAGE_NICKNAMES",
  "MANAGE_ROLES",
  "MANAGE_WEBHOOKS",
  "MANAGE_EMOJIS_AND_STICKERS",
  "USE_APPLICATION_COMMANDS",
  "REQUEST_TO_SPEAK", 
  "MANAGE_EVENTS",
  "MANAGE_THREADS",
  "USE_PUBLIC_THREADS",
  "CREATE_PUBLIC_THREADS", 
  "USE_PRIVATE_THREADS", 
  "CREATE_PRIVATE_THREADS",
  "USE_EXTERNAL_STICKERS",
  "SEND_MESSAGES_IN_THREADS",
  "START_EMBEDDED_ACTIVITIES",
  "MODERATE_MEMBERS", 
]

// getPermissions() does not work for :
/*
  "CREATE_PUBLIC_THREADS",
  "USE_PRIVATE_THREADS",
  "CREATE_PRIVATE_THREADS",
  "USE_EXTERNAL_STICKERS",
  "SEND_MESSAGES_IN_THREADS",
  "START_EMBEDDED_ACTIVITIES",
  "MODERATE_MEMBERS", 
*/

const toCamelCase = (input) => {
  let inputArr = input.split("_")

  let output = ""
  
  for (i = 0; i < inputArr.length; i++) {
    let word = inputArr[i].split("")
    output += word[0].toUpperCase()
    for (j = 1; j < word.length; j++) output += word[j].toLowerCase()
  }

  return output
}


const getPermissions = (bits) => {

  if (typeof bits != "string") return "No";

  let bitfieldInt = BigInt(bits)

  let binary = []
  for (count = bitfieldInt; count > 0n; count = count / 2n) binary.push(count % 2n == 1n)
  let perms = []
  for (i in binary) if (binary[i]) perms.push(permsArray[i])
  
  let result = "Yes, `" + toCamelCase(perms[0]) + "`"
  for (i = 1; i < perms.length; i++) {
    result += " & `" + toCamelCase(perms[i]) + "`"
  }

  return result
}

const getArguments = (options) => {

  if (options.length == 0) return "No"

  let result = "Yes, `" + options[0].name + "`"
  if (!options[0].required) result += "(optional)"
  for (i = 1; i < options.length; i++) {
    result += " & `" + options[i].name + "`"
    if (!options[i].required) result += "(optional)"
  }

  return result
}

module.exports = {  
  category: "Moderation",
  data: new SlashCommandBuilder()
  .setName('help')
  .setDescription('Gets the list of available commands')
  .addStringOption(option => option
    .setName("command")
    .setDescription("Get details regarding a specific command")
    .setRequired(false)
  ),

  async execute(interaction, client) {

    const command = interaction.options.getString("command");

    if (typeof command != "string") {

      let categories = []
      let commands = []
      client.slash_commands.forEach(c => {
          if (!categories.includes(c.category)) { 
            categories.push(c.category)
            commands.push([])

          }
          let index = categories.findIndex(r => r == c.category)

          commands[index].push(c.data)
      })

      let helpEmbed = new Discord.MessageEmbed()
      .setTitle(`${client.user.username} commands:`)
      .setColor("#F2F7FC")
      
      for (i in categories) {
        let categoriesText = categories[i].toUpperCase()
        let commandsText = ""
        for (j in commands[i]) {
          if (j == 0) commandsText += "`" + commands[i][j].name + "`"
          else commandsText += ", `" + commands[i][j].name + "`"
        }
        helpEmbed.addFields({name: categoriesText, value: commandsText})
      }

      interaction.reply({embeds: [helpEmbed]});
  }
  else {

    let commandData
    client.slash_commands.forEach(c => {
      if (command == c.data.name) commandData = c
    })

    if (typeof commandData != "object") {
      let noCommandError = new Discord.MessageEmbed()
      .setTitle("No command found with such name! :x:")
      .setColor("#ED4245")

      interaction.reply({embeds: [noCommandError]})
    }
    else {

      let commandEmbed = new Discord.MessageEmbed()
      .setAuthor({name: commandData.category})
      .setTitle("`/" +  commandData.data.name  + "`")
      .setColor("#F2F7FC")
      .setDescription(commandData.data.description)
      .addFields(
        {name: "Requires permissions?", value: getPermissions(commandData.data.default_member_permissions), inline: true},
        {name: "\u200b", value: "\u200b", inline: true},
        {name: "Takes arguments?", value: getArguments(commandData.data.options), inline: true},
      )
      
      interaction.reply({embeds: [commandEmbed]})
    }
  }
  }
}