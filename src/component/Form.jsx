import React, {useState} from 'react'

const submitForm = answer => {
  return new Promise((resolve, reject)=> {
    setTimeout(()=> {
      if(answer.toLowerCase() === 'dhaka') {
        resolve()
      }
      else{
        reject(new Error('good guess but wrong answer'))
      }
    }, 1000)
  })
}

export function Form() {
  const [answer, setAnswer] = useState('')
  const [error, setError] = useState(null)
  const [states, setStates] = useState('typing')

  if(states === 'success') return <h1>that's right answer</h1>

  const handleTextChange = (e) => {
    setError(null)
    setAnswer(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStates('submitting')
    try{
      await submitForm(answer)
      setStates('success')
    }
    catch (e){
      setStates('typing')
      setError(e.message)
    }
  }

  return (
    <div>
      <div cls>city quize</div>
      <p>What city is located two continents ?</p>
     <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextChange}
          className='border-2' name="" id="" cols="30" rows="4">

      </textarea>
       <br/>
       <button>submit</button>

       {states === 'submitting' && <p>Loading..........</p>}
       {error && <p className='text-red-600'>{error}</p>}
     </form>
    </div>
  )
}
