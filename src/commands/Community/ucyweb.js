const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports ={
    data: new SlashCommandBuilder()
    .setName('ucyweb')
    .setDescription('website of ucy'),
    async execute(interaction,client){
        await interaction.reply({content: 'https://www.ucy.ac.cy/'});
    }
 
}