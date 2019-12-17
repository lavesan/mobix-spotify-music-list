# Spotify List POC

Welcome to the spotify music list!

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Pre requirements

- node 8+
- [npm](https://www.npmjs.com/get-npm)
- yarn (optional)
    - Run `npm i -g yarn` on terminal if you don't have

## Commands

### `npm run start`

Run project on dev mode

### `npm run build`

Generates build on folder *build*

### `npm run test`

Run all test on the application (files with `.test.js` ou `.test.jsx` on the end)

## Using website

You will need to log into spotify to use, just click on 'Logar-se ao spotify' and access with your credentials

> If your account is not premium, you will be able to use but the requests will be limited.

## Project Arquiteture

This project follows the architeture on [this gist](https://gist.github.com/lavesan/6ca3791dbd9fecf27bbe0ed2235595d9)

## Context on Project

I used `Context API` with [useContext](https://pt-br.reactjs.org/docs/hooks-reference.html#usecontext) hook to share the data between multiple components

## Style

To style, this project is using [styled-components](https://www.styled-components.com/)

## Configuring env file

Always write some env file key starting with `REACT_APP` (exp.: REACT_APP_API_URL).

If you want to set different env values on different environments, foolow the rule:

|Archive           |Command        |Environment |
|------------------|---------------|------------|
|`.env.development`|`npm run start`|dev         |
|`.env.production` |`npm run build`|production  |
|`.env.test`       |`npm run test` |test        |
