const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
const { json } = require('body-parser');
const { connect } = require('mongoose');

const schema = require('./graphql/schema/index');
const rootResolver = require('./graphql/resolvers/index');

const { MONGO_USER, MONGO_PASSWORD, MONGO_DB } = process.env;

(async () => {
  try {
    await connect(
      `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@poc-cluster-h44d0.mongodb.net/${MONGO_DB}?retryWrites=true&w=majority`,
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.log(`Connection established to ${MONGO_DB} DB`);
  } catch (error) {
    console.log(`Error while connecting to ${MONGO_DB} DB: ${error}`);
  }
})();

const app = express();

app.use(cors({
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 200
}));

app.use(json());
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: rootResolver,
    graphiql: true
  })
);

module.exports = app;
