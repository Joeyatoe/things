const he = document.querySelector('.he');
const ready = document.querySelector('.ready')
const Discord = require('discord.js');
const client = new Discord.Client();
client.once('ready', () => {
  ready.innerHTML = 'ready!';
});
client.on('message', (message) => {
  he.innerHTML = message.content;
});

client.login('token')
