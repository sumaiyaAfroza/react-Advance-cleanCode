import React from 'react';

const ChatMessage = ({contact,loading,messages}) => {
  return (
    <div className="flex-1 overflow-y-auto p-6 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-3xl mx-auto space-y-4">
        {loading ? (
          <div className="text-center">
            <p className="text-sm text-gray-400">Loading messages...</p>
          </div>
        ) : messages.length === 0 ? (
          <div className="text-center">
            <p className="text-sm text-gray-400">Start chatting with {contact.name}</p>
          </div>
        ) : (
          messages.map((msg, index) => (
            <div key={index} className="flex justify-end">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg rounded-tr-none shadow-md p-3 max-w-md">
                <p className="text-white break-words">{msg.text}</p>
                <span className="text-xs text-blue-100 mt-1 block">{msg.timestamp}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ChatMessage;