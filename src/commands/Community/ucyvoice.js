const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports ={
    data: new SlashCommandBuilder()
    .setName('ucyvoice')
    .setDescription('link to ucyvoice website'),
    async execute(interaction,client){
        await interaction.reply({content: 'https://www.ucyvoice.com/'});
    }
 
}