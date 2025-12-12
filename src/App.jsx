import './App.css'

import React, {useState} from 'react';
import Travel from "./component/Travel.jsx";
import TravelEditable from "./component/TravelEditable.jsx";
import TravelPlan from "./component/travelPlan.jsx";
import { PlaceTree } from './component/placeTree.jsx';
import Accordion from "./component/Accordian.jsx";
import ContactList from "./component/contactList.jsx";
import Chat from "./component/chat.jsx";
import AddTask from "./component/todos/AddTask.jsx";
import TaskList from "./component/todos/TaskList.jsx";

// const contacts = [
//   { id: 0, name: "Taylor", email: "taylor@mail.com" },
//   { id: 1, name: "Alice", email: "alice@mail.com" },
//   { id: 2, name: "Bob", email: "bob@mail.com" },
// ];
  // const [to, setTo] = useState(contacts[0])

const initialTasks = [
  { id: 1, text: "Visit Charles Bridge at sunrise", done: false },
  { id: 2, text: "Explore Prague Castle", done: false },
  { id: 3, text: "Try traditional Czech goulash", done: true },
];

const App = () => {
  const [tasks, setTasks] = useState(initialTasks)

  const getNextId = (data) => {
    const increaseId = Math.max(...data.map(id => id.id), 0)
    return  increaseId + 1
  }

  const handleAddTask = (text) => {
    setTasks([
      ...tasks,
      {
        id: getNextId(tasks),
        text: text,
        done: false
      }
    ])
  }
  const handleChangeTask = (taskItem) => {
 const idMatch =  tasks.map(task => task.id === taskItem.id ? taskItem : task)
    setTasks(idMatch)
  }

const handleDeleteTask = (itemId) => {
    const deleteTask = tasks.filter(task => task.id !== itemId)
  setTasks(deleteTask)
}

  return (
    <div>
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


      {/*<div className='h-screen flex bg-gray-100'>*/}
      {/*  <ContactList*/}
      {/*    contacts={contacts}*/}
      {/*    selectContacts={to}*/}
      {/*    onSelect={contact => setTo(contact)}*/}
      {/*  />*/}

        {/*<Chat contact={to} key={to.id}/>*/}
      {/*</div>*/}





      {/*<Form/>*/}
      {/*<Form1/>*/}
      {/*<Pointer/>*/}
      {/*<Form2/>*/}
      {/*<Travel/>*/}

      {/*<TravelEditable/>*/}
      {/* <TravelPlan/>*/}
   {/*<Accordion/>*/}


    </div>
  );
};

export default App;









// import {Form} from "./component/Form.jsx";
// import {Form1} from "./component/Form1.jsx";
// import {Pointer} from "./component/Pointer.jsx";
// import Form2 from "./component/Form2.jsx";
// import {useState} from "react";
// import Mirror from "./component/MIrror.jsx";

// function App() {
//   const [color, setColor] = useState('red')
//   const handleChangeColor = () => {
//     setColor('blue')
//   }
//
//   return (
//     <>
//       <div className="p-5">
//         <Mirror messageColor={color} onColorChange={setColor} />
//
//         <button
//           onClick={handleChangeColor}
//           className="mt-4 px-5 py-2 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600 transition"
//         >
//           Change Color from Parent
//         </button>
//
//         <div className="mt-5 text-gray-600">
//           Current color: <strong className="text-gray-900">{color}</strong>
//         </div>
//       </div>



//     </>
//   )
//
// }
//
// export default App