module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        console.log('Ready!');

        const activities =[
            'Listing to UCY VOICE',
            'Finding contacts',
            'Hello world i am a UCYBOT',
            'I am here to help'
        ];
        
        setInterval(()=>{
            const status = activities[Math.floor(Math.random() * activities.length)];
            client.user.setPresence({ activities: [{name: `${status}`}]});
        }, 2500);

        async function pickPresence () {
            const option = Math.floor(Math.random() * statusArray.length);

            try {
                await client.user.setPresence({
                    activities: [
                        {
                            name: statusArray[option].content,
                            type: statusArray[option].type,

                        },
                    
                    ],

                    status: statusArray[option].status
                })
            } catch (error) {
                console.error(error);
            }
        }
    },
};