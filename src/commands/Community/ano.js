const {  SlashCommandBuilder,ButtonStyle,ButtonBuilder,Events,ActionRowBuilder,ButtonInteraction } = require('@discordjs/builders');

module.exports ={
    
    data: new SlashCommandBuilder()
    .setName('ano')
    .setDescription('Anomologita (sent secret massage)')
    .addStringOption(option =>
		option.setName('input')
			.setDescription('The input to echo back')
            .setRequired(true)),
    
    async execute(interaction,client){
        const schannel = client.channels.cache.get('1048313815575580772');
        
            const pchannel = client.channels.cache.get('1048547660837163078');
            
            
            pchannel.send({ content: 'A user wants to send this massage:'});
            pchannel.send({ content: '```text\n'+interaction.options.getString('input')+'\n```'});
            pchannel.send({ content: 'If you want to send it type /confirm copy the text here'});
            
        
	       
        
        await interaction.reply({content: 'Going for a check'});
        
    }
 
}