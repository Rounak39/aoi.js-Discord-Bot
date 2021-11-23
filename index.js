const aoijs = require("aoi.js")
require('dotenv').config()

const bot = new aoijs.Bot({
token: process.env.TOKEN, //Bot Token
prefix: "!", //Bot Prefix
intents: ["GUILDS", "GUILD_MESSAGES"] //Intents
})
bot.onMessage()

//Command Handling
const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./commands/")

bot.command({
name: "ping",
aliases: ['pong'],
code: `$title[1;Ping]
$author[1;$userTag[$authorID];$authorAvatar]
$addField[1;Message Latency;$messagePing;yes]
$addField[1;Websocket Latency;$djsEval[client.ws.ping;yes];yes]
$addField[1;Database Latency;$dbPing;yes]
$addTimestamp[1]
$color[1;RANDOM]
$thumbnail[1;$userAvatar[$clientID]]`
})

//Eval Command
bot.command({
name: "eval",
aliases: ['ev'],
code: `$eval[$message]
$onlyForIDs[$botOwnerID;:x: This command can be only accessed by Developer ($userTag[$botOwnerID])]`
  
//Eval Command (discord.js)
bot.command({
name: "deval",
aliases: ['djs'],
code: `$djsEval[$message;yes]
$onlyForIDs[$botOwnerID;:x: This command can be only accessed by Developer ($userTag[$botOwnerID])]`

//Ready Event
bot.readyCommand({
    channel: "",
    code: `$log[Ready on $userTag[$clientID]]`
})
