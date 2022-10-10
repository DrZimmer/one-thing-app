import { ArrowCircleRightIcon } from '@heroicons/react/solid'
import CustomButton from './CustomButton'

const OneThing = ({oneThing, handleCompletedThing}) => {
  return(
    <>
    <h1 className='text-3xl sm:text-6xl font-bold text-center'>{oneThing}</h1>
    <CustomButton 
      text='Mark Done'
      handleCompletedThing={handleCompletedThing}
    />
    
    </>
  )
}

export default OneThing