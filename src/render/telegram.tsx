import { Root, render } from '@urban-bot/core';
import { UrbanBotTelegram } from '@urban-bot/telegram';
import dotenv from 'dotenv';
import React from 'react';

import { App } from '../App';
import logger from '../logger';

dotenv.config();

const { TELEGRAM_TOKEN, PORT } = process.env;

const isDevelopment = process.env.NODE_ENV === 'development';

if (!TELEGRAM_TOKEN) {
    throw new Error(
        'Provide TELEGRAM_TOKEN to .env https://core.telegram.org/bots#6-botfather',
    );
}

const urbanBotTelegram = new UrbanBotTelegram({
    token: TELEGRAM_TOKEN,
    isPolling: isDevelopment,
});

render(
    <Root bot={urbanBotTelegram} port={PORT ? Number(PORT) : undefined}>
        <App />
    </Root>,
    () => logger.info('telegram bot has started'),
);
