require('dotenv').config();

const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

const token = process.env["CLIENT_TOKEN"]
const clientId = process.env["APPLICATION_ID"]

const rest = new REST({ version: '10' }).setToken(token);
rest.get(Routes.applicationCommands(clientId))
    .then(data => {
        console.log(`Started deleting ${data.length} application (/) commands.`);
        const promises = [];
        for (const command of data) {
            const deleteUrl = `${Routes.applicationCommands(clientId)}/${command.id}`;
            promises.push(rest.delete(deleteUrl));
        }
        console.log(`Successfully deleted ${data.length} application guild (/) commands.`);
        return Promise.all(promises);
    });
