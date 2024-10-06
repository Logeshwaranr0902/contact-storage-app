import React, { useEffect, useState } from 'react';
import axios from './axios';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

const App = () => {
    const [contacts, setContacts] = useState([]);

    const fetchContacts = async () => {
        const response = await axios.get('/contacts');
        setContacts(response.data);
    };

    useEffect(() => {
        fetchContacts();
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-50 p-6">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Contact Manager</h1>
            <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6 mb-6">
                <ContactForm fetchContacts={fetchContacts} />
            </div>
            <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6">
                <ContactList contacts={contacts} fetchContacts={fetchContacts} />
            </div>
        </div>
    );
};

export default App;
