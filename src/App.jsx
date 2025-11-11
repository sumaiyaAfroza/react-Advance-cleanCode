import './App.css'

import React from 'react';
import Travel from "./component/Travel.jsx";
import TravelEditable from "./component/TravelEditable.jsx";


const App = () => {
  return (
    <div>
      {/*<Form/>*/}
      {/*<Form1/>*/}
      {/*<Pointer/>*/}
      {/*<Form2/>*/}
      {/*<Travel/>*/}

      <TravelEditable/>

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