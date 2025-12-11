import React from 'react';

const ContactList = ({contacts, selectContacts,onSelect}) => {
  return (

      <section className=" w-1/5 bg-white border-r border-gray-200 h-screen overflow-y-auto">
        <div className="p-4 bg-gradient-to-r from-blue-600 to-indigo-600">
          <h2 className="text-2xl font-bold text-white">Messenger</h2>
        </div>

        <ul className="divide-y divide-gray-100">
          {contacts.map((contact) => (
            <li key={contact.id}>
              <button
                onClick={() => {
                  onSelect(contact);
                }}
                className={`w-full p-4 text-left hover:bg-gray-50 transition-colors duration-150 ${
                  selectContacts.id === contact.id ? "bg-blue-50 border-l-4 border-blue-600" : ""
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white font-semibold text-lg">
                    {contact.name[0]}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{contact.name}</h3>
                    <p className="text-sm text-gray-500 truncate">{contact.email}</p>
                  </div>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </section>
      

  );
};

export default ContactList;