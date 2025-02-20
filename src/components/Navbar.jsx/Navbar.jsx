import React from 'react'
import { FaCaretDown, FaUser } from 'react-icons/fa'


const NavLinks = [
    {
        id: 1,
        name: 'Home',
        link: '/'
    },
    {
        id: 2,
        name: 'About',
        link: '/#'
    },
   
    {
        id: 3,
        name: 'Contact',
        link: '/#'
    },
]


const dropDownLinks = [
    {
        id: 1,
        name: "Vegetarian",
        link: '/#'
    },

    {
        id: 2,
        name: "Fruits",
        link: '/#'
    },

    {
        id: 3,
        name: "Grains",
        link: '/#'
    }

]

const Navbar = () => {
  return (
    <div className='bg-primary shadow-md px-8'>
        <div className='container flex justify-between py-4 sm:py-3'>
            {/*LOGO SECTION*/}
            <div className='font-bold '>LOGO</div>
            {/*NAVLINK SECTION*/}
            <div>
                <ul className='sm:flex items-center gap-10'>
                {
                        NavLinks.map(({ id, name, link }) => (
                            <li key={id}>
                                <a href={link} className="inline-block hover:text-[#E83667] text-xl font-semibold">
                                    {name}
                                </a>
                            </li>

                
                    ))
                }

                    <li className="cursor-pointer group">
                        <a href="/#" className="inline-block hover:text-[#E83667] text-xl font-semibold">
                            <div className="flex items-center gap-[2px] py-2">
                                Category
                                <span>
                                    <FaCaretDown className="group-hover:rotate-180 duration-300" />
                                </span>
                            </div>
                        </a>
                        {/* Dropdown Menu */}
                        <div className="absolute z-[9999] hidden group-hover:block w-[200px] bg-white shadow-md p-2">
                            <ul>
                                {dropDownLinks.map(({ id, name, link }) => (
                                    <li key={id}>
                                        <a href={link} className="inline-block text-xl w-full rounded-md p-2 hover:bg-[#E83667]/20 ">
                                            {name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>


                    <li>
                        <button className='flex justify-center items-center gap-2 bg-[#21D4B9] text-white py-4 px-5 h-[4px] hover:scale-125 duration-300'>
                            <FaUser />
                            My Account
                        </button>
                    </li>

                    
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar