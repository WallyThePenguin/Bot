const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js')

module.exports = class extends Command {
	constructor(...args) {
		super(...args, {
			description: 'Send an Embed! Ex: (prefix)embed (Hexcolor) (title) (Message)',
			permissionLevel: 0,
            aliases: ['e'],
            usage:'<color:str> <says1:...str>',
            usageDelim: " "
		});
	}

	async run(message, [ color, says1 ]) {
        message.delete()
		message.send(new MessageEmbed()
		.setColor(color)
        .setDescription(says1))
    }

}