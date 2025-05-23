// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js');

// Load environment variables from a .env file (recommended for security)
require('dotenv').config();
const token = process.env.DISCORD_BOT_TOKEN;

// Create a new Discord client
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

// When the client is ready, run this code (one time)
client.once(Events.ClientReady, c => {
    console.log(`Ready! Logged in as ${c.user.tag}`);
});

// Listen for new messages
client.on(Events.MessageCreate, msg => {
    // Ignore bot messages
    if (msg.author.bot) return;

    // Simple command: Respond to "!ping" with "Pong!"
    if (msg.content === '!ping') {
        msg.reply('Pong!');
    }
});

// Log in to Discord with your client's token
client.login(token);