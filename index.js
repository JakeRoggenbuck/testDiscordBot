const Discord = require('discord.js');
const { token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!')
})

client.on('message', message => {
	console.log(message.content);

	if(message.content.includes('lit')) {
		message.channel.send("https://pics.onsizzle.com/worth-investing-in-deep-fried-travis-scott-29075721.png")
	}
})

client.login(token);
