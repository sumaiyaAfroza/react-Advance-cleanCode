import React from 'react';
import Task from "./Task.jsx";

const TaskList = ({tasks,onChangeTask, onDeleteTask}) => {
  const totalCount = tasks.length
  const completedCount = tasks.filter(task => task.done).length

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Your Adventures</h2>
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 px-6 py-2 rounded-full">
          <span className="text-purple-800 font-semibold">
            {completedCount} / {totalCount} completed
          </span>
        </div>
      </div>
      <ul>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onChangeTask={onChangeTask}
            onDeleteTask={onDeleteTask}
          />
        ))}
      </ul>
      {tasks.length === 0 && (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🗺️</div>
          <p className="text-gray-400 text-lg">No adventures planned yet. Start adding some!</p>
        </div>
      )}
    </div>
  );
};

export default TaskList;