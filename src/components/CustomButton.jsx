import { CheckCircleIcon } from '@heroicons/react/solid'

const CustomButton = ({text, handleCompletedThing}) => {
  return(
    <>
    <button
      className='flex items-center space-x-3 text-2xl bg-text-600 px-6 py-3 rounded-md focus:outline-none focus-visible:ring-4 ring-teal-600 ring-offset-4 ring-offset-slate-200 hover:opacity-80 transition-opacity disabled:opacity-50'
      autoFocus
      onClick= {handleCompletedThing}
      >
        <span className='pointer-events-none'>{text}</span>
        <CheckCircleIcon className='pointer-events-none w-12 h-12'/>
      </button>
    </>
  )
}

export default CustomButton