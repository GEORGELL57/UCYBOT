const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports ={
    data: new SlashCommandBuilder()
    .setName('invite')
    .setDescription('invite the bot on your server'),
    async execute(interaction,client){
        await interaction.reply({content: 'https://discord.com/api/oauth2/authorize?client_id=1046397094874841159&permissions=431644732480&scope=bot%20applications.commands'});
    }
 
}