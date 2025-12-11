import React, {useState} from 'react';
import {Plus} from "lucide-react";

const AddTask = ({onAdd}) => {
  const [text, setText] = useState('')

  const handleSubmit = () => {
    if(text.trim()){
      onAdd(text)
      setText('')
    }
  }
  return (
    <div className="relative mb-8">
      <input
        placeholder="Add a new adventure to your itinerary..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit();
          }
        }}
        className="w-full px-6 py-4 pr-14 rounded-2xl border-2 border-purple-200 focus:border-purple-500 focus:outline-none text-gray-800 placeholder-gray-400 transition-all duration-300 shadow-sm hover:shadow-md"
      />
      <button
        onClick={handleSubmit}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-3 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
      >
        <Plus size={20} />
      </button>
    </div>
  );
};

export default AddTask;