import React from 'react';

const ChatHeader = ({contact}) => {
  return (
    <div>
      <div className="bg-white border-b border-gray-200 p-4 shadow-sm">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white font-semibold">
            {contact.name[0]}
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{contact.name}</h3>
            <p className="text-sm text-gray-500">{contact.email}</p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ChatHeader;