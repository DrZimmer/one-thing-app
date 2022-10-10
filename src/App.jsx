//react imports
import { useState } from 'react'

import JSConfetti from 'js-confetti'
const jsConfetti = new JSConfetti()

//custom compenents
import CustomerForm from './components/CustomForm'
import OneThing from './components/OneThing'

function getSuccessMessage() {
  const messages = ["YES!", "Nice Job!", "Next!", "Alright, Alright, Alright", "Break Time!"]
  return messages[Math.floor(Math.random() * messages.length)]
}

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

  const handleCompletedThing = async (e) => {
    e.target.setAttribute('disabled', true)
    setOneThing(getSuccessMessage())
    await jsConfetti.addConfetti()
    e.target.removeAttribute('disabled')
    setOneThing('')
    setIsCompleted(true)

  }

  return (
    <main className="grid place-items-center min-h-screen bg-grandient-to-b from-slate-100 to-slate-200">
      <div className="grid place-items-center gap-8 m-8">
        { isCompleted && <CustomerForm 
        oneThing={oneThing}
        handleInput={handleInput}
        handleSubmit={handleSubmit}
        /> }
        {
          !isCompleted && <OneThing oneThing = { oneThing } handleCompletedThing={handleCompletedThing}/>
        }
      </div>
    </main>
  )
}

export default App
