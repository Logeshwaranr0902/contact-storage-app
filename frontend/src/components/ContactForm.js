import React, { useState } from "react";
import axios from "../axios";

const ContactForm = ({ fetchContacts }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const addContact = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://contact-storage-app.onrender.com/api/contacts",
        {
          name,
          email,
          phone,
        }
      );
      fetchContacts();
      setName("");
      setEmail("");
      setPhone("");
    } catch (error) {
      console.error("Error adding contact:", error);
      // Optionally, show a message to the user
    }
  };

  return (
    <form onSubmit={addContact} className="flex flex-col">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="mb-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="mb-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
        className="mb-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-200"
      >
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
