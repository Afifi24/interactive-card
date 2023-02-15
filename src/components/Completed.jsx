import React from 'react'
import checkimg from '../images/icon-complete.svg'
const Completed = ({completed,setCompleted,Continue}) => {
  return (
    <div className='h-full gap-3 flex flex-col items-center justify-center'>
        <img src={checkimg} alt="" />
        <h4 className='uppercase font-bold tracking-[3px] text-black'>thank you!</h4>
        <p className='text-grayeshViolet text-sm'>We've added your card details</p>
        <button className='rounded-md w-64 h-10 bg-darkViolet text-white mt-4' onClick={Continue}>Continue</button>
      </div>
  )
}

export default Completed