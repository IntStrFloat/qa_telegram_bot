"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const grammy_1 = require("grammy");
const bot = new grammy_1.Bot(process.env.TOKEN || '');
bot.command('start', (ctx) => {
    const keyboard = new grammy_1.Keyboard().text('HTML').text('CSS').row().text('JS').text('React').resized();
    ctx.reply('Привет бро, я помогу тебе выучить Frontend', {
        reply_markup: keyboard,
    });
});
bot.start();
