//react imports
import { useState } from 'react'

//library imports


//custom compenents
import CustomerForm from './components/CustomForm'

function App() {
  const [oneThing, setOneThing] = useState("")
  const [isCompleted, setIsCompleted] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsCompleted(false)
    console.log(e)
  }

  const handleInput = (e) => {
    setOneThing(e.target.value)
  }

  return (
    <main className="grid place-items-center min-h-screen bg-grandient-to-b from-slate-100 to-slate-200">
      <div className="grid place-items-center gap-8 m-8">
        { isCompleted && <CustomerForm oneThing={oneThing}
        handleInput={handleInput}
        handleSubmit={handleSubmit}
        />}
      </div>
    </main>
  )
}

export default App
