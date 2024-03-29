import { Root, render } from '@urban-bot/core';
import { UrbanBotFacebook } from '@urban-bot/facebook';
import dotenv from 'dotenv';
import React from 'react';

import { App } from '../App';
import logger from '../logger';

dotenv.config();

const {
    FACEBOOK_APP_SECRET,
    FACEBOOK_PAGE_ACCESS_TOKEN,
    FACEBOOK_VERIFY_TOKEN,
    PORT,
} = process.env;

if (!FACEBOOK_APP_SECRET) {
    throw new Error(
        'Provide FACEBOOK_APP_SECRET to .env https://developers.facebook.com/apps/<YOUR_APP_ID>/settings/basic/',
    );
}

if (!FACEBOOK_PAGE_ACCESS_TOKEN) {
    throw new Error(
        'Provide FACEBOOK_PAGE_ACCESS_TOKEN to .env "Messenger -> Settings -> Access Tokens" https://developers.facebook.com/apps/<YOUR_APP_ID>/messenger/settings/',
    );
}

if (!FACEBOOK_VERIFY_TOKEN) {
    throw new Error(
        'Provide FACEBOOK_VERIFY_TOKEN to .env. It is a random string, you can invent it yourself. After starting your bot provide it to "Messenger -> Settings -> Webhooks" https://developers.facebook.com/apps/<YOUR_APP_ID>/messenger/settings/',
    );
}

const urbanBotFacebook = new UrbanBotFacebook({
    appSecret: FACEBOOK_APP_SECRET,
    pageAccessToken: FACEBOOK_PAGE_ACCESS_TOKEN,
    verifyToken: FACEBOOK_VERIFY_TOKEN,
});

render(
    <Root
        isNewMessageEveryRender
        bot={urbanBotFacebook}
        port={PORT ? Number(PORT) : undefined}
    >
        <App />
    </Root>,
    () => {
        logger.info('facebook bot has started');
    },
);
