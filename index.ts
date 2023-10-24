require('dotenv').config();
import { Bot, Keyboard } from 'grammy';

const bot = new Bot(process.env.TOKEN || '');

bot.command('start', (ctx) => {
  const keyboard = new Keyboard().text('HTML').text('CSS').row().text('JS').text('React').resized();
  ctx.reply('Привет бро, я помогу тебе выучить Frontend', {
    reply_markup: keyboard,
  });
});

bot.start();
