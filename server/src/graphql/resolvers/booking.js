const Booking = require('../../models/booking');
const Event = require('../../models/event');

const { getSingleEvent, getUser } = require('./merge');

module.exports = {
 bookings: async () => {
  try {
   const bookings = await Booking.find();
   return bookings.map(booking => {
    return {
     ...booking._doc,
     event: getSingleEvent.bind(this, booking._doc.event),
     user: getUser.bind(this, booking._doc.user),
     createdAt: new Date(booking._doc.createdAt),
     updatedAt: new Date(booking._doc.updatedAt)
    }
   });
  } catch (error) {
   throw error;
  }
 },
 bookEvent: async ({ eventId }) => {
  try {
   const fetchedEvent = await Event.findOne({ _id: eventId });
   const booking = new Booking({
    event: fetchedEvent,
    user: '5de5691569abf03a90d31318'
   });
   const result = await booking.save();
   return result;
  } catch (error) {
   throw error;
  }
 },
 cancelBooking: async ({ bookingId }) => {
  try {
   const booking = await Booking.findById(bookingId).populate('event');
   const event = {
    ...booking.event._doc,
    creator: getUser.bind(this, booking.event._doc.creator)
   }
   await Booking.deleteOne({ _id: bookingId });
   return event;
  } catch (error) {
   throw error;
  }
 }
}