const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

// Initializing the bot
const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN);

// Sending the notification
const sendNotification = async (message) => {
    try {
        await bot.sendMessage(process.env.TELEGRAM_CHAT_ID, message);
        console.log('Notification sent:', message);
    } catch (error) {
        console.error('Error sending notification:', error);
    }
};

module.exports = {
    sendNotification
};
