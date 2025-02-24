import React from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { FaFacebook } from 'react-icons/fa'
import { FaGoogle } from 'react-icons/fa'

const Popup = ({ ShowPopup, setShowPopup }) => {
  return (
    <>
      {ShowPopup && (
          <div>
            <div className='h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm'>
              <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-md shadow-md duration-200 w-[300px]'>
                <div className='flex justify-between items-center'>
                  <div>
                    <h1 className='text-2xl font-semibold text-[#303030]'>Login</h1>
                  </div>
                  <div>
                    <IoCloseOutline className='text-2xl cursor-pointer' onClick={()=> setShowPopup(false)}/>
                  </div>
                </div>
                <div className='mt-4'>
                  <input type='email' placeholder='Enter Email' className='w-full rounded-md border border-gray-300 dark:border-gray-500 px-2 py-1 mb-4' />
                  <input type='password' placeholder='Enter Password' className='w-full rounded-md border border-gray-300 dark:border-gray-500 px-2 py-1 mb-4' />
                  <div>
                    <button className='w-full bg-[#E83667] text-white py-1 rounded-md' onClick={()=>SetShowPopup(false)}>Login</button>
                  </div>
                  <div className='mt-4'>
                    <p className='text-center'>or login with </p>
                    <div className='flex justify-center items-center gap-4 mt-2'>
                        <FaFacebook className='text-3xl hover:text-blue-500 duration-200' />
                        <FaGoogle className='text-3xl hover:text-[#E83667] duration-200' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}

export default Popup