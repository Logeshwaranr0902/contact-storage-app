import React, { useState } from "react";
import axios from "../axios";
import UpdateContact from "./UpdateContact";

const ContactList = ({ contacts, fetchContacts }) => {
  const [selectedContact, setSelectedContact] = useState(null);

  const deleteContact = async (id) => {
    await axios.delete(`/contacts/${id}`);
    fetchContacts();
  };

  const handleUpdate = () => {
    fetchContacts();
    setSelectedContact(null);
  };

  return (
    <div className="p-4">
      {contacts.length > 0 ? (
        <ul className="space-y-4">
          {contacts.map((contact) => (
            <li
              key={contact.id}
              className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0 p-4 border border-gray-200 rounded-lg shadow-sm"
            >
              <div>
                <p className="font-semibold text-lg">{contact.name}</p>
                <p className="text-gray-600">{contact.email}</p>
                <p className="text-gray-600">{contact.phone}</p>
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={() => setSelectedContact(contact)}
                  className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
                >
                  Update
                </button>
                <button
                  onClick={() => deleteContact(contact.id)}
                  className="bg-red-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-red-700 transition duration-200"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-center">No contacts available.</p>
      )}
      {selectedContact && (
        <UpdateContact
          contact={selectedContact}
          onUpdate={handleUpdate}
          onClose={() => setSelectedContact(null)}
        />
      )}
    </div>
  );
};

export default ContactList;
