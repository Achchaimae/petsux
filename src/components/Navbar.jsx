import React , {useState} from 'react'
import { AiOutlineMenu , AiOutlineHome } from 'react-icons/ai'
import { LuArrowUpRight } from "react-icons/lu";
const Navbar = () => {

  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav);
    
    
  };
  return (
    <div>
        <AiOutlineMenu  onClick={handleNav} className=' absolute top-4 right-4 z-[99] md:hidden' />
        {
          nav ? (
              <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20 '>
                <a href="#main" className='w-[75%] flex justify-center items-center rounded-full text-lg font-semibold shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                  <span className='pl-4'>
                    Home
                  </span>
                </a>
                <a href="#main" className='w-[75%] flex justify-center items-center rounded-full text-lg font-semibold shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                  <span className='pl-4'>
                    Pet Health
                  </span>
                </a>
                <a href="#main" className='w-[75%] flex justify-center items-center rounded-full text-lg font-semibold shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                  <span className='pl-4'>
                    Training
                  </span>
                </a>
                <a href="#main" className='w-[75%] flex justify-center items-center rounded-full text-lg font-semibold shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                  <span className='pl-4'>
                    Adoption
                  </span>
                </a>
                <a href="#main" className='w-[75%] flex justify-center items-center rounded-full text-lg font-semibold shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                  <span className='pl-4'>
                    Blog
                  </span>
                </a>
                

              </div>
          )
          : (
              ''
          )
        }
        <div className='md:flex  justify-between hidden fixed mt-4  z-10 w-full px-4 '>
          <div className='rounded-full  px- text-4xl font-bold  m-2 py-2 cursor-pointer '>
            petsux
          </div>
          <div className='flex justify-center gap-8 '>
            <a href="#main" className='rounded-full shadow-lg px-6 text-lg font-semibold bg-gray-100 shadow-gray-400 m-2 py-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              Home 
            </a>
            <a href="#main" className='rounded-full shadow-lg px-6 text-lg font-semibold bg-gray-100 shadow-gray-400 m-2 py-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              Home 
            </a>
            <a href="#main" className='rounded-full shadow-lg px-6 text-lg font-semibold bg-gray-100 shadow-gray-400 m-2 py-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              Home 
            </a>
            <a href="#main" className='rounded-full shadow-lg px-6 text-lg font-semibold bg-gray-100 shadow-gray-400 m-2 py-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              Home 
            </a>
            <a href="#main" className='rounded-full shadow-lg px-6 text-lg font-semibold bg-gray-100 shadow-gray-400 m-2 py-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              Home 
            </a>
          </div>
          <div className='flex justify-center '>
            <a href="#main" className='rounded-full shadow-lg px-6 text-lg font-semibold bg-black text-white shadow-gray-400 m-2 py-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              BOOK APPOINTMENT   
            </a>
            <div className='rounded-full shadow-lg p-5 py-4 text-xl font-semibold bg-black text-white shadow-gray-400 my-2  cursor-pointer hover:scale-110 ease-in duration-300'>
            <LuArrowUpRight />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar