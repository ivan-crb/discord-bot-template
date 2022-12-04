# discord-bot-template
A ready-to-go template for a basic discord bot

## Index
> [Features](#features)

> [Requirements](#requirements)


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
CLIENT_TOKEN=
CLIENT_ID=990325594610876457
GUILD_ID=
```




4. Install dependencies



5. how to start the bot
// install the modules (a ver como hago eso)
modules:
dotenv
fs
discord.js
express


## How to get a token

Discord Developer Portal (poner link)

## How to get

User Settings > Advanced > Developer Mode


// mirar en Sample-Discord-Bot para como hacer el index y demas


// una vez terminado probar con codespaces o algo asi desde principio a final, para ver que funciona

