const { SlashCommandBuilder,ActionRowBuilder,ButtonBuilder } = require('@discordjs/builders');
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
module.exports = {
    data: new SlashCommandBuilder()
        .setName('rps')
        .setDescription('To play rps')
        ,
    async execute(interaction, client) {
        const row = new ActionRowBuilder()
                    .addComponents(
                        new ButtonBuilder()
                            .setCustomId('Rock')
                            .setLabel('Rock')
                            .setStyle('Primary'),
                            
                        new ButtonBuilder()
                            .setCustomId('Paper')
                            .setLabel('Paper')
                            .setStyle('Success'),
                        new ButtonBuilder()
                            .setCustomId('Scissors')
                            .setLabel('Scissors')
                            .setStyle('Danger'),
                        
                    );
                    const again = new ActionRowBuilder()
                    .addComponents(
                        new ButtonBuilder()
                            .setCustomId('Yes')
                            .setLabel('Yes')
                            .setStyle('Success'),
                        new ButtonBuilder()
                            .setCustomId('No')
                            .setLabel('No')
                            .setStyle('Danger'),

                        );

        const filter = i => i.customId === 'Rock' || i.customId === 'Paper'|| i.customId === 'Scissors'|| i.customId === 'Yes'|| i.customId === 'No';
        const MSG = await interaction.reply({ content: 'Chose',  components: [row] });
        const collector = MSG.createMessageComponentCollector({filter });  

        collector.on('collect',async  i =>{             
        if (i.customId === 'Rock') {
            var randomNumber = getRandomInt(1, 3);

            switch (randomNumber) {
                case 1: await i.update({ content: 'I choose rock is a draw\nDo you want to play again?',  components: [again] }); break;
                case 2: await i.update({ content: 'I choose paper i won :wink:\nDo you want to play again?',  components: [again] }); break;
                case 3: await i.update({ content: 'I choose scissors i lost :frowning2:\nDo you want to play again?',  components: [again] }); break;
            }
        
         }
         else if (i.customId === 'Paper') {
            var randomNumber = getRandomInt(1, 3);

            switch (randomNumber) {
                case 1: await i.update({ content: 'I choose rock i lost :frowning2:\nDo you want to play again?',  components: [again] }); break;
                case 2: await i.update({ content: 'I choose paper is a draw\nDo you want to play again?',  components: [again] }); break;
                case 3: await i.update({ content: 'I choose scissors i won :wink:\nDo you want to play again?',  components: [again] }); break;
            }
        
         }
         else if (i.customId === 'Scissors') {
            var randomNumber = getRandomInt(1, 3);

            switch (randomNumber) {
                case 1: await i.update({ content: 'I choose rock i won :wink:\nDo you want to play again?',  components: [again] }); break;
                case 2: await i.update({ content: 'I choose paper i lost :frowning2\nDo you want to play again?',  components: [again] }); break;
                case 3: await i.update({ content: 'I choose scissors is a draw\nDo you want to play again?',  components: [again] }); break;
            }
        
         }
         if(i.customId === 'Yes'){
            await i.update({ content: 'Chose',  components: [row] });
         }
         else if (i.customId === 'No'){
            await i.update({ content: 'Bye',  components: [] });
            
         }

    })
        //await interaction.reply('message'.author.avatarURL);
}
 
}