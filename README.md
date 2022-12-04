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
```sh
mkdir my-awesome-project; cd my-awesome-project;
git clone https://github.com/ivan-crb/discord-bot-template .;
```

2. Create a repository for your app and link it to the local directory:
```sh
git remote remove origin;

git remote add origin <my-awesome-repository-link>;
git branch -M main;
git push -u origin main;

```

3. Create a `.env` file and add the following environment variables:
    - CLIENT_TOKEN: The private token Discord provides to login your bot.
    - CLIENT_ID: The Discord id of your bot.
    - GUILD_ID: The Discord id of the server to test commands in.

The .env should end up looking similar to this:
```
CLIENT_TOKEN=abcdefghijklmnopqrstuvwxyz-.ABCDEFGHIJKLMNOPQRSTUVWXYZ
CLIENT_ID=0123456789101112
GUILD_ID=0123456789101112
```



4. Install dependencies

5. how to start the bot
// install the modules (a ver como hago eso)
modules:
dotenv
fs
discord.js
express

6. how to invite the bot to discord (invite url and stuff)
   (recommend turning on that the bot can be invited from inside discord)

## How to get a bot token

[Discord Developer Portal](https://discord.com/developers/applications)

## How to get the client id and guild Id

User Settings > Advanced > Developer Mode


to ways to get the client id


// mirar en Sample-Discord-Bot para como hacer el index y demas


// una vez terminado probar con codespaces o algo asi desde principio a final, para ver que funciona

