const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports ={
    data: new SlashCommandBuilder()
    .setName('discord')
    .setDescription('invite the bot on your server'),
    async execute(interaction,client){
        await interaction.reply({content: 'https://discord.gg/ggHrKVAYjB'});
    }
 
}