import React, {useState} from 'react';
import {Check, Edit2, Trash2, X} from "lucide-react";

const Task = ({task,onChangeTask, onDeleteTask}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(task.text)

   const handleSave = () => {
   if(editText.trim()) {
       onChangeTask({
         ...task,
         text: editText
       })
     setIsEditing(false)
   }
   }



  return (
    <div>
      <li className="group bg-white rounded-2xl p-5 mb-3 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200 transform hover:-translate-y-1">
        <div className="flex items-center gap-4">
          <label className="relative flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={task.done}
              onChange={(e) => onChangeTask({ ...task, done: e.target.checked })}
              className="sr-only peer"
            />
            <div className="w-6 h-6 border-2 border-gray-300 rounded-lg peer-checked:bg-gradient-to-r peer-checked:from-purple-600 peer-checked:to-pink-600 peer-checked:border-transparent transition-all duration-300 flex items-center justify-center">
              {task.done && <Check size={16} className="text-white" />}
            </div>
          </label>

          {isEditing ? (
            <div className="flex-1 flex items-center gap-2">
              <input
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSave()}
                className="flex-1 px-3 py-2 border-2 border-purple-300 rounded-lg focus:outline-none focus:border-purple-500"
                autoFocus
              />
              <button
                onClick={handleSave}
                className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
              >
                <Check size={18} />
              </button>
              <button
                onClick={()=>setIsEditing(false)}
                className="p-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition-colors"
              >
                <X size={18} />
              </button>
            </div>
          ) : (
            <>
            <span
              className={`flex-1 text-gray-800 font-medium transition-all duration-300 ${
                task.done ? "line-through text-gray-400" : ""
              }`}
            >
              {task.text}
            </span>
              <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={() => setIsEditing(true)}
                  className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  <Edit2 size={18} />
                </button>
                <button
                  onClick={() => onDeleteTask(task.id)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </>
          )}
        </div>
      </li>

    </div>
  );
};

export default Task;