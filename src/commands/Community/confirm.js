const { SlashCommandBuilder, ButtonStyle, ButtonBuilder, Events, ActionRowBuilder, ButtonInteraction, Permissions , PermissionFlagsBits } = require('@discordjs/builders');

module.exports = {

    data: new SlashCommandBuilder()
        .setName('confirm')
        .setDescription('confirm massage')
        .addStringOption(option =>
            option.setName('input')
                .setDescription('The input to echo back')
                .setRequired(true))

    ,

    async execute(interaction, client) {
        if(interaction.member === null){
            await interaction.reply({ content: 'you are doing it wrong' });
            return
        }
        const { roles } = interaction.member;
        
        const role = await interaction.guild.roles.fetch('1049055791220523138').catch(console.error);
        const schannel = client.channels.cache.get('1048313815575580772');
        const testRole = await interaction.guild


        const pchannel = client.channels.cache.get('1048547660837163078');



        if (roles.cache.has('1049055791220523138')) {
            schannel.send({ content: interaction.options.getString('input') });
            await interaction.reply({ content: 'The massage has been sent' });
        }
        else {
            await interaction.reply({ content: 'You dont have permitions' });
        }


    }

}