import { Root, render } from '@urban-bot/core';
import { UrbanBotSlack } from '@urban-bot/slack';
import dotenv from 'dotenv';
import React from 'react';

import { App } from '../App';
import logger from '../logger';

dotenv.config();

const { SLACK_SIGNING_SECRET, SLACK_TOKEN, PORT } = process.env;

if (!SLACK_SIGNING_SECRET) {
    throw new Error(
        'Provide SLACK_SIGNING_SECRET to .env https://api.slack.com/authentication/verifying-requests-from-slack#about',
    );
}

if (!SLACK_TOKEN) {
    throw new Error(
        'Provide SLACK_TOKEN to .env https://api.slack.com/authentication/token-types#granular_bot',
    );
}

const urbanBotSlack = new UrbanBotSlack({
    signingSecret: SLACK_SIGNING_SECRET,
    token: SLACK_TOKEN,
});

render(
    <Root bot={urbanBotSlack} port={PORT ? Number(PORT) : undefined}>
        <App />
    </Root>,
    () => {
        logger.info('slack bot has started');
    },
);
