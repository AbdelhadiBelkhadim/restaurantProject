import React from 'react'
import BgPolygon from '../../assets/polygon.png'
import Vector from '../../assets/vector-wave.png'
import { FaUser } from 'react-icons/fa'

const bgStyle = {
    backgroundImage : `url(${BgPolygon}) `,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width : '100%',
    height : '100%',
    position : 'relative',
}

const About = () => {
  return (
    <>
    <div style={bgStyle} className='p-14'>
        <div className='container min-h-[500px] relative z-10'> 
            <h1 className='pt-20 tracking-wider text-4xl font-semibold text-white text-center'>
                About Us
            </h1>

            <div className='bg-white/80 p-10 my-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum harum nam quibusdam voluptate sequi a provident dolorum impedit illum autem! Obcaecati quia placeat laborum suscipit, officiis pariatur officia dolorem iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit laborum dolorum, dolore minus velit laudantium illo dolor aliquam officia illum repellat labore quaerat voluptatibus alias cumque. Dolore accusamus natus aspernatur.
            <div>
                <button className=' flex justify-center items-center gap-2 bg-[#21D4B9] text-white py-4 px-5 h-[4px] hover:scale-125 duration-300'>
                    <FaUser />
                        My Account
                </button>
            </div>
        </div>
            
        </div>
    </div>
    </>
  )
}

export default About