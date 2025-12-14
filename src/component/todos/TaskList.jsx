import React from 'react';
import TaskItem from "./TaskItem.jsx";

const TaskList = ({tasks,onChangeTask,onDeleteTask}) => {
  return (
    <div>
      <ul className="space-y-3">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
        ))}
      </ul>

    </div>
  );
};

export default TaskList;