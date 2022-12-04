const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports ={
    data: new SlashCommandBuilder()
    .setName('classes')
    .setDescription('schedule of classes'),
    async execute(interaction,client){
        await interaction.reply({content: 'https://ucyweb.ucy.ac.cy/fmweb/en/schedule-of-classes'});
    }
}