const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js')

module.exports = class extends Command {
	constructor(...args) {
		super(...args, {
			description: 'Set the PFP of your bot! (Twice an Hour Only)',
			permissionLevel: 9,
            aliases: ['avatar'],
			usage:'<url:...str>',
            usageDelim: " "
		});
	}

	async run(message, [url]) {
		message.reply(`Your New AVATAR picture is ` + url)
		return (this.client.user.setAvatar(url))
    }

}