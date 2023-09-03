<h1 align="center">Welcome to demo-chat-bot 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
  <img src="https://img.shields.io/badge/node-%3E%3D16.20.0-blue.svg" />
  <a href="https://github.com/jellydn/demo-chat-bot#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/jellydn/demo-chat-bot/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/jellydn/demo-chat-bot/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/jellydn/demo-chat-bot" />
  </a>
</p>

> Start write chatbots with urban-bot and typescript

[![#Build with IT Man - ChatBot & AI - Part 1 [Vietnamese]](https://i.ytimg.com/vi/q1ngSbMqXUE/hqdefault.jpg)](https://www.youtube.com/watch?v=q1ngSbMqXUE)

## Prerequisites

-   node >=16.20.0

## Install

```sh
yarn install
```

## Usage

Create .env from .env.example then run below command

```sh
yarn dev
```

## Run tests

```sh
yarn test
```

## How to setup

### Telegram

1.  Get telegram [token](https://core.telegram.org/bots#6-botfather)
2.  Paste token to `.env` `TELEGRAM_TOKEN=YOUR_TOKEN`
3.  Uncomment `// import './render/telegram';` inside `src/index.ts`
4.  Run `npm run dev` and check your bot

### Slack

1.  Create [slack app](https://slack.com/intl/en-ru/help/articles/115005265703-Create-a-bot-for-your-workspace)
2.  Paste [token](https://api.slack.com/authentication/token-types#granular_bot) to `.env` `SLACK_TOKEN=YOUR_TOKEN`
3.  Paste [signing secret](https://api.slack.com/authentication/verifying-requests-from-slack#about) to `.env` `SLACK_SIGNING_SECRET=YOUR_SIGNING_SECRET`
4.  Run `npm run start-tunnel` and connect the public url with slack webhook.
5.  Uncomment `// import './render/slack';` inside `src/index.ts`
6.  Run `npm run dev` and check your bot

### Facebook

1. Create [facebook app](https://developers.facebook.com/docs/messenger-platform/getting-started/app-setup)
2. Paste credentials to `.env`
3. Run `npm run start-tunnel` and connect the public url with facebook webhook.
4. Uncomment `// import './render/facebook';` inside `src/index.ts`
5. Run `npm run dev` and check your bot

## Author

-   Website: https://productsway.com/
-   Github: [@jellydn](https://github.com/jellydn)

## Resources

-   [Urban Bot · The universal chatbot library based on React.](https://urban-bot.vercel.app/)
-   [egoist/tsup: The simplest and fastest way to bundle your TypeScript libraries.](https://github.com/egoist/tsup)

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

This project is [MIT](https://github.com/jellydn/demo-chat-bot/blob/master/LICENSE) licensed.
