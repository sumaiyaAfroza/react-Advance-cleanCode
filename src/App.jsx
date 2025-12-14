import React, {useReducer} from 'react';
import TaskList from "./component/todos/TaskList.jsx";
import AddTask from "./component/todos/AddTask.jsx";
import {taskReducer} from "./Reducers/taskReducer.js";

const initialTasks = [
  { id: 1, text: "Visit Prague Castle", done: true },
  { id: 2, text: "Walk across Charles Bridge", done: false },
  { id: 3, text: "Explore Old Town Square", done: false },
]

const App = () => {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks );

  const getNextId = (tasks)=> {
    return  tasks.length > 0 ? Math.max(...tasks.map(task => task.id) + 1) : 1
  }

  const handleAddTask = (text) => {
    dispatch({
      type: 'added',
      id: getNextId(tasks),
      text
    })
  }

  const handleChangeTask = (task) => {
    dispatch({
      type: 'changed',
      task
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text mb-2">
            <h1 className="text-5xl font-bold">Prague Itinerary</h1>
          </div>
          <p className="text-gray-600 text-lg">Plan your perfect trip to the City of a Hundred Spires</p>
        </div>

         <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white">
          <AddTask onAdd={handleAddTask} />
          <TaskList
            tasks={tasks}
            onChangeTask={handleChangeTask}
            onDeleteTask={handleDeleteTask}
          />
        </div>
      </div>
    </div>
  );
};

export default App;