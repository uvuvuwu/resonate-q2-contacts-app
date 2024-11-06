import React from "react";
import "../styles/ContactCard.css";

function ContactCard({ contact }) {
  return (
    <div className="contact-card">
      <h2 className="contact-name">{contact.name}</h2>
      <p className="contact-info">{contact.email}</p>
      <p className="contact-info">{contact.phone}</p>
      <p className="contact-info">{contact.address.city}</p>
    </div>
  );
}

export default ContactCard;
