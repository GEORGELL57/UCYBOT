const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports ={
    data: new SlashCommandBuilder()
    .setName('exams')
    .setDescription('website of the exams of ucy'),
    async execute(interaction,client){
        await interaction.reply({content: 'https://www.ucy.ac.cy/aasw/studies/undergraduate-studies/exam-schedule/'});
    }
}