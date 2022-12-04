# discord-bot-template
A ready-to-go template for a basic discord bot

## Index
- [Features](#features)
- [Requirements](#requirements)


## Features
- Slash command only application

## Requirements
- Node (16.6 or higher)
- Git
- NPM

## Setup

1. Create a directory for the app and clone the repository to it:
```bash
mkdir my-awesome-project; cd my-awesome-project;
git clone https://github.com/ivan-crb/discord-bot-template .;
```

2. Create a repository for your app and link it to the local directory:
```bash
git remote remove origin;

git remote add origin <my-awesome-repository-link>;
git branch -M main;
git push -u origin main;

```

3. Create a `.env` file (inside the `src` directory) and add the following environment variables:
    - CLIENT_TOKEN: The private token Discord provides to login your bot. THIS IS A FOOTNOTE
    - CLIENT_ID: The Discord id of your bot.
    - GUILD_ID: The Discord id of the server to test commands in.

The .env should end up looking similar to this:
```bash
CLIENT_TOKEN=abcdefghijklmnopqrstuvwxyz-.ABCDEFGHIJKLMNOPQRSTUVWXYZ
CLIENT_ID=0123456789101112
GUILD_ID=0123456789101112
```

4. Install dependencies:
```bash
npm i
```

5. Turn on Privileged Gateway Intents:
    - Head over to the [Discord Developer Portal](https://discord.com/developers/applications) and select your application.
    - On the ***Settings*** tab, go to the ***Bot*** section and look for the ***Privileged Gateway Intents*** options.
    - Turn on `Presence Intent`, `Server Member Intent`, and `Message Content Intent` (remember to save changes before closing the tab).

6. To run the bot simply type in the terminal:
```bash
npm start
```

Be aware that slash commands have to be registered when they are created, for that purpose you can run either `deploy-commands.js` or `deploy-guild-commands.js`. The former will register the commands in all servers, while the latter will only register your commands on the server you put in the `.env` file (for testing purposes).

Additionally, `npm start` automatically register the command in all servers before starting the bot.

Finally, `delete-commands.js` deletes all slash commands for all servers (incase you want to remove an already registered command).

## Invite link








6. how to invite the bot to discord (invite url and stuff)
   (recommend turning on that the bot can be invited from inside discord)

## How to get a bot token

[Discord Developer Portal](https://discord.com/developers/applications)

## How to get the client id and guild Id

User Settings > Advanced > Developer Mode


to ways to get the client id

how to add new slash commands


// mirar en Sample-Discord-Bot para como hacer el index y demas


// una vez terminado probar con codespaces o algo asi desde principio a final, para ver que funciona

