# discord-bot-template
A ready-to-go template for a basic discord bot

## Features
- Slash command only application

## Requisites
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

3. Create a `.env` file and add the following lines:






modules:
dotenv
fs
discord.js
express