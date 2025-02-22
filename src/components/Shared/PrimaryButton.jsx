import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const PrimaryButton = () => {
  return (
    <div className='flex items-center group'>
        <button className='bg-[#E83667] text-white h-[40px] px-3 py-2'>Choose Your Plan Meal</button>
        <FaArrowRight className="inline-block group-hover:translate-x-2 transform duration-200 p-2 text-base h-[40px] bg-[#BB2C51] w-[40px] text-white" />

    </div>
  )
}

export default PrimaryButton