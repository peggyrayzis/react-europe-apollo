# Fullstack GraphQL Workshop

Welcome! Today, we're going to learn how to build a fullstack GraphQL app using Apollo Server, Apollo Engine, and Apollo Client. Let's get started! 🚀

## Slides

If you need to reference the slides, you can view them [here](https://fullstack-workshop-apollo.surge.sh).

## Setup instructions

Since we have a lot of material to cover, we're going to complete all the exercises within the browser. This ensures that we minimize our time spent on environment setup and maximize our time learning cool stuff about GraphQL.

Here are the accounts you'll need for today:
- [Apollo Engine](https://engine.apollographql.com/)
- [Glitch](https://glitch.com/)
- [CodeSandbox](https://codesandbox.io/)

You'll also need to install [Apollo DevTools for Chrome](https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm). If you have all 4 of these things, then we're ready to begin!

## Apollo Server (Morning)

Welcome to the server portion of the workshop! For the morning session, we will be building a GraphQL server based on the [Movie DB REST API](https://developers.themoviedb.org/3/getting-started/introduction).

### File Structure (in order of importance):
- `server.js`: Where all the magic happens to set up Apollo Server
- `schema.js`: Your GraphQL schema goes here
- `resolvers/`: Write your resolvers for each type in this folder
- `models/`: Your models separate out the data fetching logic from your resolvers
- `loaders.js`: We've already created a loader function for you here. You won't need to modify this file.
- `utils.js`: A utility function for constructing query parameters. You won't need to modify this file.
- `store.js`: A SQLite DB created with the Sequelize ORM for storing likes and user info. You won't need to modify this file.

### Running on Glitch

<!-- Remix Button -->
<a href="https://glitch.com/edit/#!/remix/fullstack-workshop-server">
  <img src="https://cdn.glitch.com/2bdfb3f8-05ef-4035-a06e-2043962a3a13%2Fremix%402x.png?1513093958726" alt="remix button" aria-label="remix" height="33">
</a>

1. Click this button to remix the project

2. On the left hand menu in Glitch, click Logs > Console

3. Confirm you're tracking origin by running `git remote -v`. If you are, then you can skip step #4 and go to step #5

4. If you are not tracking origin, run this command:

```bash
git remote add origin https://github.com/apollographql/fullstack-workshop-server && git fetch origin && git checkout 00-start && refresh
```

5. If you are tracking origin, run this command: `git fetch origin && git checkout 00-start && refresh`

6. Navigate to `server.js`. You should not see any `ApolloServer` setup code. If that's the case, then you're good to go!

### Branches
- `00-start`: Your starting point
- `01-apollo-server`: Setting up Apollo Server and Apollo Engine
- `02-schema`: Writing your schema
- `03-resolvers`: Implementing resolvers
- `04-final`: Includes authentication, loaders, and caching

### FAQ
- **I didn't complete the last exercise and want to catch up**: No worries! I've created branches for all the steps in the workshop so everyone can go at their own pace. To check out the completed solution for your exercise, look for the branch above. In your Glitch terminal or local terminal, replace `01-apollo-server` with the exercise you're on:

```bash
git stash
git checkout 01-apollo-server
```

- **I'm getting errors related to the Engine proxy:** You need to make a .env file in the root that contains `ENGINE_API_KEY=yourkeyhere`. Replace yourkeyhere with the Engine key you get from [creating your own service](https://engine.apollographql.com/).

### Helpful links
- [graphql.org docs](http://graphql.org/learn/schema/)
- [Learn about resolvers here](https://www.apollographql.com/docs/graphql-tools/resolvers.html)
- [Apollo Engine docs](https://www.apollographql.com/docs/engine/)
- [DataLoader](https://www.apollographql.com/docs/graphql-tools/connectors.html#dataloader)

### Running locally

1. Clone the repo: `git clone https://github.com/apollographql/fullstack-workshop-server`
2. Then, make a `.env` file with an `ENGINE_API_KEY` environment variable. You can get one [here](https://engine.apollographql.com/) by creating your own Engine service.
3. Install the dependencies: `npm i`
4. Start the server: `npm start`. Your server will be running on port 3000. Your GraphQL server is available at `localhost:3000/graphql` and your GraphQL Playground is available at `localhost:3000/graphql`.

## Apollo Client (Afternoon)

Welcome to the client portion of the workshop! For the morning session, we will be building a React app that pulls a list of movies, filters them by type, and allows you to favorite them after you've been logged in. The app is backed by Create React App and Apollo Client.

### File Structure (in order of importance):
- `index.js`: Where we set up Apollo Client
- `components/`: All of the React components that you will connect to Apollo
- `data.js`: Seed data powering the components before we switch to GraphQL
- `App.js`: The top-level App component. You won't need to modify this file.
- `index.css`: Some random CSS. You won't need to modify this file.

### Running on CodeSandbox

[![Edit fullstack-workshop-client](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/apollographql/fullstack-workshop-client/tree/00-start/)

1. Click the button above to navigate to the CodeSandbox. Fork it to your account by clicking Fork in the top menu.
2. That's it! CodeSandbox features HMR, a console, and a test runner. It's pretty awesome. 😍

### Sandboxes
- [`00-start`](https://codesandbox.io/s/github/apollographql/fullstack-workshop-client/tree/00-start): Your starting point
- [`01-apollo-client`](https://codesandbox.io/s/github/apollographql/fullstack-workshop-client/tree/01-apollo-client): Setting up Apollo Boost and React Apollo
- [`02-queries`](https://codesandbox.io/s/github/apollographql/fullstack-workshop-client/tree/02-queries): Writing Query components
- [`03-mutations`](https://codesandbox.io/s/github/apollographql/fullstack-workshop-client/tree/03-mutations): Writing Mutation components & authentication
- [`04-final`](https://codesandbox.io/s/github/apollographql/fullstack-workshop-client): Local state management with apollo-link-state

### FAQ
- **I didn't complete the last exercise and want to catch up**: No worries! Each branch is its own CodeSandbox so everyone can go at their own pace. To check out the completed solution for your exercise, just click the CodeSandbox links above.

### Running locally

1. Clone the repo: `git clone https://github.com/apollographql/fullstack-workshop-client`
2. Install the dependencies: `npm i`
3. Start the server: `npm start`
