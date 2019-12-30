const { buildSchema } = require('graphql');

const { eventSchema, eventEndPoints } = require('./event');
const { userSchema, userEndPoints } = require('./user');
const { bookingSchema, bookingEndPoints } = require('./booking');

module.exports = buildSchema(`
 ${eventSchema}
 ${userSchema}
 ${bookingSchema}

 type RootQuery {
  ${eventEndPoints.query}
  ${bookingEndPoints.query}
 }

 type RootMutation {
 ${eventEndPoints.mutation}
 ${userEndPoints.mutation}
 ${bookingEndPoints.mutation}
 }

 schema {
  query: RootQuery,
  mutation: RootMutation
 }
`);
