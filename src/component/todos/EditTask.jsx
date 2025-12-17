import React, {useReducer} from 'react';
import {EditTextReducer} from "../../Reducers/editTextReducer.js";

const EditTask = ({task, onCancel, onSave}) => {
  const [editText, dispatch ] = useReducer(EditTextReducer ,task.text)

  const handleChange = (e) => {
    dispatch ({
      type: 'change-Edit-Text',
      text : e.target.value
    })
  }
  const handleSave = () => {
    if(editText.trim()) {
      onSave(
        editText
      )
    }
  }

  return (
    <div className="flex-1 flex gap-2">
      <input
        type="text"
        value={editText}
        onChange={handleChange}
        className="flex-1 px-4 py-2 rounded-xl border-2 border-blue-300 focus:border-blue-500 focus:outline-none bg-white"
      />
      <button
        onClick={handleSave}
        className="px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors shadow-sm"
      >
        Save
      </button>
      <button
        onClick={onCancel}
        className="px-4 py-2 bg-gray-400 text-white rounded-xl hover:bg-gray-500 transition-colors shadow-sm"
      >
        Cancel
      </button>
    </div>
  )
};

export default EditTask;