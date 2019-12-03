const Event = require('../../models/event');

module.exports = {
 events: async () => await Event.find(),
 createEvent: async ({ event: { title, description, price, date } }) => {
  try {
   const event = new Event({
    title,
    description,
    price: +price,
    date
   });
   return await event.save();
  } catch (error) {
   throw error;
  }
 }
}