const User = require('../../models/user');
const Event = require('../../models/event');

exports.getUser = async userId => {
  try {
    const user = await User.findById(userId);
    return {
      ...user._doc,
      createdEvents: this.getEvents.bind(this, user._doc.createdEvents)
    };
  } catch (error) {
    throw error;
  }
};

exports.getEvents = async eventIds => {
  try {
    const events = await Event.find({ _id: { $in: eventIds } });
    return events.map(event => {
      return {
        ...event._doc,
        creator: this.getUser.bind(this, event._doc.createdEvents)
      }
    })
  } catch (error) {
    throw error;
  }
};

exports.getSingleEvent = async eventId => {
  const event = await Event.findById(eventId);
  return {
    ...event._doc,
    creator: this.getUser.bind(this, event._doc.creator)
  }
}
