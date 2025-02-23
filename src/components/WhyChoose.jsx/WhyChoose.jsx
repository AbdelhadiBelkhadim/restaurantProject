import React from 'react'
import { FaBus } from 'react-icons/fa'


const WhyChoose = () => {
  return (
    <>
    <div className="py-14 md:py-28 bg-gray-50">
      <div className='container'>
        <h1 className='py-16 tracking-wider text-2xl font-semibold text-[#303030] text-center '>
          Why Choose Us
        </h1>

        <div>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-14 sm:gap-4'>
            <div className='text-center flex items-center justify-center flex-col px-2 gap-2'>
              <p className='text-[#303030]  font-semibold'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <p className='text-5xl rotate-90  text-[#E83667] text-center translate-x-5'>...</p>
              <FaBus className='text-5xl text-[#E83667]' />
            </div>

            <div className='text-center flex items-center justify-center flex-col px-2 gap-2'>
            <FaBus className='text-5xl text-[#21D4B9]' />
            <p className='text-5xl rotate-90  text-[#21D4B9] text-center translate-x-5'>...</p>
              <p className='text-[#303030]  font-semibold'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>

            <div className='text-center flex items-center justify-center flex-col px-2 gap-2'>
              <p className='text-[#303030]  font-semibold'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <p className='text-5xl rotate-90  text-[#E83667] text-center translate-x-5'>...</p>
              <FaBus className='text-5xl text-[#E83667]' />
            </div>

            <div className='text-center flex items-center justify-center flex-col px-2 gap-2'>
            <FaBus className='text-5xl text-[#21D4B9]' />
            <p className='text-5xl rotate-90  text-[#21D4B9] text-center translate-x-5'>...</p>
              <p className='text-[#303030]  font-semibold'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>

            
          </div>          
        </div>

      </div>

    </div>
    </>
  )
}

export default WhyChoose