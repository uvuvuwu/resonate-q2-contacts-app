import React from "react";
import ContactCard from "./ContactCard";
import "../styles/ContactList.css";

function ContactList({ contacts }) {
  return (
    <div className="contact-list">
      {contacts.map((contact) => (
        <ContactCard key={contact.id} contact={contact} />
      ))}
    </div>
  );
}

export default ContactList;
