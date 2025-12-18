import React, {useReducer} from 'react';
import {TextReducer} from "../../Reducers/TextReducer.js";

const AddTask = ({onAdd}) => {

  const [text, dispatch ] = useReducer(TextReducer ,'')

const handleChange = (e) => {
   dispatch({
     type: 'change',
     text: e.target.value
   })
}

  const handleSubmit = (e) => {
    e.preventDefault();
    text.trim() && (onAdd(text), dispatch({type: 'reset'}))
  };


  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex gap-3">
        <input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Add a new activity..."
          className="flex-1 px-6 py-4 text-lg rounded-2xl border-2 border-purple-200 focus:border-purple-500 focus:outline-none transition-colors bg-white/50"
        />
        <button
          type="submit"
          className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-2xl hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default AddTask;