# discord-bot-template
A ready-to-go template for a basic discord bot

## Index
- [Features](#%EF%B8%8F-features)
- [Requirements](#requirements)
- [Setup](#setup)
- [Invite link](#invite-link)
- [Client token](#client-token)
- [Client id](#client-id)
- [Guild id](#guild-id)

## [⬆️](#index) Features

- Built-in slash command handler
- Dynamic `/help` command
- Easy to deploy and delete slash commands

## [⬆️](#index) Requirements
- Node (16.6 or higher)
- Git
- NPM

## [⬆️](#index) Setup

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
    - [CLIENT_TOKEN](#client-token): The private token Discord provides to login your bot.
    - [CLIENT_ID](#client-id): The Discord id of your bot.
    - [GUILD_ID](#guild-id): The Discord id of the server to test commands in.

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

## [⬆️](#index) Invite link

To get the invite link for the bot, just copy the following url and replace the words between `<` & `>` with the appropiate values.
```
https://discord.com/oauth2/authorize?client_id=<CLIENT_ID>&permissions=<PERMISSIONS_INTEGER>&scope=bot+applications.commands
```
- [CLIENT_ID](#client-id): The private token Discord provides to login your bot.
- PERMISSIONS_INTEGER: The number that represents what permissions your bot needs to have when joining a server (Get it at [Discord Developer Portal](https://discord.com/developers/applications) > ***Your-App*** > ***Bot*** > ***Bot Permissions***).

For easier invitation of the bot to new servers, it is recommended to enable In-app Authorization at [Discord Developer Portal](https://discord.com/developers/applications) > ***Your-App*** > ***OAuth2*** > ***General*** > ***Default Authorization Link*** > ***Authorization Method*** > ***In-app Authorization*** (choose both `bot` and `applications.commands` in the ***Scopes*** section). This allows inviting the bot to new servers from the Discord app itself.


## [⬆️](#index) Client token

1. Select your application in the [Discord Developer Portal](https://discord.com/developers/applications).
2. Head over to the ***Bot*** section.
3. Create a bot with the ***Add Bot*** button (if you haven't already).
4. Click on ***Reset Token*** and copy the new ***TOKEN***.
Take into account that the token can only be viewed once, on creation, so store it somewhere safe (you can access it from the `.env` file) if you ever need it in the future.

## [⬆️](#index) Client id

1. Select your application in the [Discord Developer Portal](https://discord.com/developers/applications).
2. Head over to the ***General Information*** section.
3. Copy the ***APPLICATION ID***.

### OR

This method can't be used before having the bot invited in a server, so it can't be used before doing so:
1. In the Discord app, head over to ***User Settings*** > ***Advanced*** and turn on ***Developer Mode*** (if you haven't already).
2. Right click on your bot.
3. At the bottom of the menu you will find the ***Copy ID*** button, click it and the applications id will get copied to your clipboard.

## [⬆️](#index) Guild id

1. In the Discord app, head over to ***User Settings*** > ***Advanced*** and turn on ***Developer Mode*** (if you haven't already).
2. Right click on your server.
3. At the bottom of the menu you will find the ***Copy ID*** button, click it and the servers id will get copied to your clipboard.






how to add new slash commands


// mirar en Sample-Discord-Bot para como hacer el index y demas

// una vez terminado probar con codespaces o algo asi desde principio a final, para ver que funciona

