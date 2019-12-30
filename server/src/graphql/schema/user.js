exports.userSchema = `
 type User {
  _id: ID!
  email: String!,
  password: String,
  createdEvents: [Event!]
 }

 input UserInput {
  email: String!
  password: String!
 }
`;

exports.userEndPoints = {
 mutation: `
 signup(user: UserInput): User
 `
};