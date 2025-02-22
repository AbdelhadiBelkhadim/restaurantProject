import React from 'react'
import heroImage from '../../assets/hero.png'
import HeroBg from '../../assets/heroBg.png'
import PrimaryButton from '../Shared/PrimaryButton'
import { TbBackground } from 'react-icons/tb'

const BgStyle = {
  backgroundImage : `url(${HeroBg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  with: '100%',
  height: '100%',
}

const Hero = () => {
  return (
    <>
    <div style={BgStyle} className='relative z-[-1]'>
      <div className='container py-16 sm:py-0 '>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]'>
          <div className='space-y-7 text-[#303030] order-2 sm:order-1'>
            <h1 className='text-5xl' >
              Fresh & Healty Meal Plan <span className='text-[#21D4B9] font-[Ephesis] text-7xl'>Delivery</span>{" "} in Miami
            </h1>
            <p className='lg:pr-64'>Delicous Meals Delivred to Your Door From $132.92 per week</p>
            <div>
            <PrimaryButton />
            </div>
          </div>
          

          <div className='relative z-30 order-1 sm:order-2 '>
            <img src={heroImage} alt='hero image' />
          </div>

        </div>

      </div>

    </div>


    </>
  )
}

export default Hero