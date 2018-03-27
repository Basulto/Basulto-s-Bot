const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NDI4MjgxMTc2OTkwNTQ3OTc4.DZw0Bg.m5vaNyixLfwK5CG8amgpFlMqov4);
