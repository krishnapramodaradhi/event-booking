exports.eventSchema = `
 type Event {
  _id: ID!
  title: String!
  description: String!
  price: Int!
  date: String!
  creator: String!
 }

 input EventInput {
  title: String!
  description: String!
  price: Int!
  date: String!
 }
`;

exports.eventEndPoints = {
  query: `
 events: [Event!]!
 `,
  mutation: `
 createEvent(event: EventInput): Event
 `
};
