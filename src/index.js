require('dotenv').config()
const fs = require('fs');

const Discord = require('discord.js');

const token = process.env["CLIENT_TOKEN"]

// Adds all intents to the client initialization
const flags = [];
for (flag in Discord.Intents.FLAGS) flags.push(Discord.Intents.FLAGS[flag]);

const client = new Discord.Client({intents: flags});

// Ready event
client.once('ready', () => {
  client.user.setPresence({ activities: [{ type: "LISTENING", name: '/help', }]});
  console.log('Ready!');
  console.log("Working in " + client.guilds.cache.size + " servers!")
});

// Slash command handler
client.slash_commands = new Discord.Collection();

const slash_commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of slash_commandFiles) {
  const slash_command = require(`./commands/${file}`);
	client.slash_commands.set(slash_command.data.name, slash_command);
}

// Slash commands event handling

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const slash_command = client.slash_commands.get(interaction.commandName);

	if (!slash_command) return;

	try {
    console.log(`Slash Command: <${interaction.commandName}>`);
		await slash_command.execute(interaction, client);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

//Logins the bot into discord
client.login(token);

//Web server (useful for hosting purposes)
const express = require('express')
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('Hello World!')
  res.sendStatus(200);
})
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})