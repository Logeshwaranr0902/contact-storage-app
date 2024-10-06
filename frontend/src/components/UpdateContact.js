import React, { useState } from "react";
import axios from "../axios";

const UpdateContact = ({ contact, onUpdate, onClose }) => {
  const [name, setName] = useState(contact.name);
  const [email, setEmail] = useState(contact.email);
  const [phone, setPhone] = useState(contact.phone);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `https://contact-storage-app.onrender.com/api/contacts/${contact.id}`,
        {
          name,
          email,
          phone,
        }
      );
      onUpdate();
      onClose();
    } catch (error) {
      console.error("Error updating contact:", error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md md:max-w-lg lg:max-w-xl">
        <h2 className="text-lg font-bold mb-4">Update Contact</h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
            className="mb-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="mb-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone"
            required
            className="mb-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex justify-between space-x-3">
            <button
              type="submit"
              className="bg-blue-600 px-3 text-white font-semibold py-2 rounded-lg hover:bg-blue-800 transition duration-200"
            >
              Update Contact
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-red-500 text-white font-semibold px-3 py-2 rounded-lg hover:bg-red-700 transition duration-200"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateContact;
