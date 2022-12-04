const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports ={
    data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('show all the commands'),
    async execute(interaction,client){
        await interaction.reply({content: '```text\n /help [shows this list] \n /invite [a link to invite the bot on your server] \n /ucyweb [ucy website] \n /exams [a link with the ucy exams]\n /ucyvoice [link to ucyvoice website]\n /discord [link for the unofficial discord of the ucy]\n /contacts [contacts of the ucy]\n/ano [Anomologita (sent secret massage)]\n/classes [schedule of classes]\n/github [github page]\n```'});
    }
}