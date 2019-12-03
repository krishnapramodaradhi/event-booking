const { buildSchema } = require('graphql');

const { eventSchema, eventEndPoints } = require('./event');
const { userSchema, userEndPoints } = require('./user');

module.exports = buildSchema(`
 ${eventSchema}
 ${userSchema}

 type RootQuery {
  ${eventEndPoints.query}
 }

 type RootMutation {
 ${eventEndPoints.mutation}
 ${userEndPoints.mutation}
 }

 schema {
  query: RootQuery,
  mutation: RootMutation
 }
`);
