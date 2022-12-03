require('dotenv').config()
const fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

const token = process.env["CLIENT_TOKEN"]
const clientId = process.env["APPLICATION_ID"]

const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '10' }).setToken(token);

(async () => {
	try {
		console.log(`Started refreshing ${commands.length} application (/) commands.`);

        rest.put(Routes.applicationCommands(clientId), { body: commands })
            .then(data => {
                console.log(`Successfully reloaded ${data.length} application (/) commands.`);
            })
	} catch (error) {
		console.error(error);
	}
})();