const {  SlashCommandBuilder,ButtonStyle,ButtonBuilder,Events,ActionRowBuilder,ButtonInteraction } = require('@discordjs/builders');

module.exports ={
    
    data: new SlashCommandBuilder()
    .setName('ano')
    .setDescription('anonymus')
    .addStringOption(option =>
        option.setName('input')
            .setDescription('The input to echo back')
            .setRequired(true)),
    
    async execute(interaction,client){
        const schannel = client.channels.cache.get('1048313815575580772');
        
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
            const pchannel = client.channels.cache.get('1049364218505330790');
            const MSG = await pchannel.send({ content: interaction.options.getString('input'),  components: [row] });
            const collector = MSG.createMessageComponentCollector({filter,max:1 });
 
            collector.on('collect',async  i =>{
                const ch=i.client.channels.cache.get('712782672400875580');
                if (i.customId === 'primary') {
                ch.send({content: interaction.options.getString('input')});
                
                await i.update({content: 'Sent',components: [] });
               
                }
                else if(i.customId === 'second'){
                    await i.update({content: 'Not Sent',components: [] });
                    
                }
               
                
            })
      collector.on('end', collected => console.log(`Collected ${collected.size} items`));
           
        
        await interaction.reply({content: 'Going for a check'});
        
    }
 
}