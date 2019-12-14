# Spotify List POC

Welcome to the spotify music list!

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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
