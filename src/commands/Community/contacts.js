const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports ={
    data: new SlashCommandBuilder()
    .setName('contacts')
    .setDescription('contacts of the ucy'),
    async execute(interaction,client){
        await interaction.reply({content: '```md\n + Publications Office \n <Tel.:  2289 4314, 2289 4027, 2289 4289> \n <E-mail: publications@ucy.ac.cy> \n <Websites: https://www.ucy.ac.cy/publications> \n + Communications and Public Relations Office \n <Tel.: 2289 4304/05> \n <E-mail: prinfo@ucy.ac.cy> \n <Website: https://www.ucy.ac.cy/promotion/en/activities/press-and-communication> \n + University Development and Alumni Relations Office \n <Tel.: 2289 4356> \n <E-mail: alumni@ucy.ac.cy> \n <Website: http://www.ucy.ac.cy/alumni/en/> \n + Official Events Planning Office \n <Tel.: 2289 4305> \n <E-mail: events@ucy.ac.cy> \n <Website: https://www.ucy.ac.cy/events/el/> \n```\n The info above you can find it here: https://ucyweb.ucy.ac.cy/pr/en/contact-us'});
            
    }
 
}