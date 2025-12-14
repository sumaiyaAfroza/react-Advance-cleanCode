import React, {useReducer} from 'react';
import {EditReducer} from "../../Reducers/EditReducer.js";

const TaskItem = ({task,onChange}) => {
  const [isEditing, dispatch ] = useReducer( EditReducer,false)

  const handleStartEdit = () => {
    dispatch({
      type: 'start-edit'
    })
  }

  const handleSave = (newText) => {
    onChange({
      ...task,
     text: newText
    })
    dispatch({
      type: 'stop-editing'
    })
  }

  const handleCancel =() => {
    dispatch({
      type: 'stop-editing'
    })
  }

  return (
    <div>
      <li className="flex items-center gap-4 p-5 bg-gradient-to-r from-white/70 to-white/50 rounded-2xl hover:from-white/90 hover:to-white/70 transition-all border border-purple-100 shadow-sm hover:shadow-md group">
        <input
          type="checkbox"
          checked={task.done}
          onChange={(e) => onChange({ ...task, done: e.target.checked })}
          className="w-6 h-6 rounded-lg border-2 border-purple-300 text-purple-600 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 cursor-pointer transition-all"
        />

        {isEditing ? (
          <TaskEdit task={task} onSave={handleSave} onCancel={handleCancel} />
        ) : (
          <>
          <span
            className={`flex-1 text-lg ${
              task.done ? "line-through text-gray-400" : "text-gray-800 font-medium"
            } transition-all`}
          >
            {task.text}
          </span>
            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                onClick={handleStartEdit}
                className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors shadow-sm"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(task.id)}
                className="px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-colors shadow-sm"
              >
                Delete
              </button>
            </div>
          </>
        )}
      </li>
      
    </div>
  );
};

export default TaskItem;