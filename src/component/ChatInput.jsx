import React from 'react';

const ChatInput = ({onSend, contact, text, setText}) => {
  return (
    <div className="bg-white border-t border-gray-200 p-4 shadow-lg">
      <div className="max-w-4xl mx-auto">
        <textarea
          value={text}
          placeholder={"Chat to " + contact.name}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              onSend();
            }
          }}
          rows="3"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
        />
        <div className="mt-3 flex justify-end">
          <button
            onClick={onSend}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
          >
            Send to {contact.email}
          </button>
        </div>
      </div>
    </div>

  );
};

export default ChatInput;