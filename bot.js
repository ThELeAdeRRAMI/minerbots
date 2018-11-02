const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("507275523349676034")
setInterval(function() {
channel.send(`LeAdeR Is The Best    LeAdeR Is The Best    LeAdeR Is The Best    LeAdeR Is The Best    LeAdeR Is The Best    `);
}, 30)
})

client.login(process.env.BOT_TOKEN);
