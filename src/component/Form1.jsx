import {useState} from "react";

export const Form1 = () => {
  const [inputs, setInputs] = useState([
    {
      id:1,
      label: 'input'
    }
  ])

  const handleAddInput = () => {
    const nextId = inputs[inputs.length - 1].id + 1
    setInputs([
      ...inputs,
      {
        id: nextId,
        label: 'input'
      }
    ])
  }

  return(
    <div className='p-8 max-w-md mx-auto'>
      {inputs.map(input => (
        <div key={input.id} className='mb3'>
          <label>{input.label}</label>
          <input type="text"  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 active:bg-blue-700 transition-colors"/>
        </div>
      ))}
      <button onClick={handleAddInput}>Add input</button>
    </div>
  )
}