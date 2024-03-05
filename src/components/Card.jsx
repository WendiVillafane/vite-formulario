import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Card = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await axios.get('http://localhost:5000/tickets');
        setTickets(response.data);
      } catch (error) {
        console.error('Error fetching tickets:', error);
      }
    };

    fetchTickets();
  }, []);

  return (
    <div>
      <h2>Tickets</h2>
      {tickets.map((ticket, index) => (
        <div className="profile-card" key={index}>
          <h3>Ticket</h3>
          <hr />
          <h4>Datos</h4>
          <p>Title: {ticket.title}</p>
          <p>Priority: {ticket.priority}</p>
          <p>Description: {ticket.text}</p>
        </div>
      ))}
    </div>
  );
}

export default Card;
