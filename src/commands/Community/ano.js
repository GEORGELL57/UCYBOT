const {  SlashCommandBuilder,ButtonStyle,ButtonBuilder,Events,ActionRowBuilder,ButtonInteraction } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');

//const { ActionRowBuilder, ButtonBuilder, ButtonStyle, Events, SlashCommandBuilder } = require('discord.js');
const a=0;
module.exports ={
    
    data: new SlashCommandBuilder()
    .setName('ano')
    .setDescription('Sent private massage')
    .addStringOption(option =>
        option.setName('input')
            .setDescription('The input to echo back')
            .setRequired(true)),
    
    async execute(interaction,client){
        const schannel = client.channels.cache.get('1048313815575580772');
        const AnoEmb = new EmbedBuilder()
                            .setColor(0x0099FF)
	                        .setTitle('Anomologita')
	                        .setURL('https://www.facebook.com/anomologitaucypk/')
                            .setAuthor({ name: 'UCYBOT', iconURL: 'https://i.ibb.co/vBf8DZ9/1200px-University-of-Cyprus-svg.png', url: 'https://github.com/GEORGELL57/UCYBOT' })
                            .setDescription(interaction.options.getString('input'))
                            .addFields({ name: 'Command to use:', value: '/ano "text"(send this command in my dms)', inline: true })
                            .setTimestamp();
        const ConfEmb = new EmbedBuilder()
                            .setColor(0x0099FF)
	                        .setTitle('Anomologita')
	                        .setURL('https://www.facebook.com/anomologitaucypk/')
                            .setAuthor({ name: 'UCYBOT', iconURL: 'https://i.ibb.co/vBf8DZ9/1200px-University-of-Cyprus-svg.png', url: 'https://github.com/GEORGELL57/UCYBOT' })
                            .setDescription(interaction.options.getString('input'))
                            .setTimestamp();
             const SentEmb = new EmbedBuilder()
                            .setColor(0x0099FF)
	                        .setTitle('Anomologita')
	                        .setURL('https://www.facebook.com/anomologitaucypk/')
                            .setAuthor({ name: 'UCYBOT', iconURL: 'https://i.ibb.co/vBf8DZ9/1200px-University-of-Cyprus-svg.png', url: 'https://github.com/GEORGELL57/UCYBOT' })
                            .setDescription('Sent')
                            .setTimestamp();
            const NotSentEmb = new EmbedBuilder()
                            .setColor(0x0099FF)
	                        .setTitle('Anomologita')
	                        .setURL('https://www.facebook.com/anomologitaucypk/')
                            .setAuthor({ name: 'UCYBOT', iconURL: 'https://i.ibb.co/vBf8DZ9/1200px-University-of-Cyprus-svg.png', url: 'https://github.com/GEORGELL57/UCYBOT' })
                            .setDescription('Not Sent')
                            .setTimestamp();
        const row = new ActionRowBuilder()
                    .addComponents(
                        new ButtonBuilder()
                            .setCustomId('primary')
                            .setLabel('Send')
                            .setStyle('Primary'),
                            
                        new ButtonBuilder()
                            .setCustomId('second')
                            .setLabel('Dont Send')
                            .setStyle('Secondary'),
                    );
                    
            const filter = i => i.customId === 'primary' || i.customId === 'second';
            const pchannel = client.channels.cache.get('1048547660837163078');
            const MSG = await pchannel.send({ embeds: [ConfEmb],  components: [row] });
            const collector = MSG.createMessageComponentCollector({filter,max:1 });
 
            collector.on('collect',async  i =>{
                const ch=i.client.channels.cache.get('1048313815575580772');
                if (i.customId === 'primary') {
                ch.send({ embeds: [AnoEmb] });
               
                await i.update({embeds: [SentEmb],components: [] });
                    
                }
                else if(i.customId === 'second'){
                    await i.update({embeds: [NotSentEmb],components: [] });
                    
                }
               
                
            })
      collector.on('end', collected => console.log(`Collected ${collected.size} items`));
           
        
        await interaction.reply({content: 'Going for a check'});
        
    }
 
}