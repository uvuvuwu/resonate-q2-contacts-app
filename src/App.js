import React, { useEffect, useState } from "react";
import axios from "axios";
import ContactList from "./components/ContactList";
import "./styles/App.css";

function App() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setContacts(response.data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (loading) return <p>Loading contacts...</p>;

  return (
    <div className="app-container">
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
