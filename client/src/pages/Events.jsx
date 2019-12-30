import React, { useEffect, useState } from 'react';

import { BASE_URL } from '../utils/constants';
import { eventsQuery } from '../utils/queries';

import './Events.css';

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(BASE_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ query: eventsQuery })
        });
        const fetchedEvents = await response.json();
        setEvents(fetchedEvents.data.events);
      } catch (error) {
        throw error;
      }
    };
    fetchEvents();
  }, []);

  return (
    <div>
      {events.map(event => (
        <div className="card" key={event._id}>
          <h3>{event.title}</h3>
          <p>{event.description}</p>
          <div className="card-footer">
            <span>Rs.{event.price}/-</span>
            <button>Book</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Events;
