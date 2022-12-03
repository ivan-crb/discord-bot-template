require('dotenv').config()
const fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

const token = process.env["CLIENT_TOKEN"]
const clientId = process.env["CLIENT_ID"]
const guildId = process.env["GUILD_ID"]

const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '10' }).setToken(token);

(async () => {
	try {
		console.log(`Started refreshing ${commands.length} application guild (/) commands.`);

        rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
            .then(data => {
                console.log(`Successfully reloaded ${data.length} application guild (/) commands.`);
            })
	} catch (error) {
		console.error(error);
	}
})();