exports.bookingSchema = `
type Booking {
 _id: ID!
 user: User!
 event: Event!
 createdAt: String!
 updatedAt: String!
}
`;

exports.bookingEndPoints = {
  query: `
 bookings: [Booking!]!
 `,
  mutation: `
 bookEvent(eventId: ID!): Booking!
 cancelBooking(bookingId: ID!): Event!
 `
};
