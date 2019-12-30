const Event = require('../../models/event');
const User = require('../../models/user');
const { getUser, getEvents } = require('./merge');

module.exports = {
  events: async () => {
    try {
      const events = await Event.find();
      return events.map(event => {
        return {
          ...event._doc,
          creator: getUser.bind(this, event._doc.creator)
        }
      });
    } catch (error) {
      throw error;
    }
  },
  createEvent: async ({ event: { title, description, price, date } }) => {
    try {
      const event = new Event({
        title,
        description,
        price: +price,
        date,
        creator: '5de5691569abf03a90d31318'
      });
      const user = await User.findById('5de5691569abf03a90d31318');
      if (!user) {
       throw new Error('User not found');
      }
      user.createdEvents.push(event);
      await user.save();
      const e = await event.save();
      return {
       ...e._doc,
       creator: getUser.bind(this, e._doc.creator),
       createdEvents: getEvents.bind(this, user._doc.createdEvents)
      }
    } catch (error) {
      throw error;
    }
  }
};
