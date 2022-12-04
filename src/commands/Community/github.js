const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports ={
    data: new SlashCommandBuilder()
    .setName('github')
    .setDescription('github page'),
    async execute(interaction,client){
        await interaction.reply({content: 'https://github.com/GEORGELL57/UCYBOT'});
    }
}