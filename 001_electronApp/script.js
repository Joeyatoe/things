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

client.login('NjgxMDIxMjQ1NTk2MzY4OTQ0.Xs40fQ.rXFu4xBQNn_GstbTuYj_h7XLpr8')
