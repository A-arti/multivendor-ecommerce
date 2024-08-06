import React from 'react'
import { SlMenu } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";
function Header({ showSidebar, setShowSidebar }) {
  return (
    <div classname="fixed bg-balck">
      <div className='fixed top-0 left-0 w-full px-4 py-5 z-40'>
        <div className='lg:ml-[260px] rounded-md h-[65px] flex justify-between items-center transition-all'>

          <div onClick={() => setShowSidebar(!showSidebar)} className='w-[35px] flex lg:hidden h-[35px] rounded-md bg-white hover:shadow-indigo-500/50 border justify-center items-center cursor-pointer ' >
            <span><SlMenu /></span>
          </div>

          {/* Wrapper for the input field and search icon */}
          <div className='relative hidden md:block'>
            {/* Input field */}
            <input className='px-3 py-2 w-[300px] pl-8 bg-white outline-none border border-slate-300 bg-transparent rounded-md text-[#11111a] focus:border-slate-700' type="text" name='search' placeholder='search' />
            {/* Search icon positioned absolutely */}
            <CiSearch className='absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400' />
          </div>

          <div className='flex justify-center items-center gap-8 relative'>
            <div className='flex justify-center items-center'>
              <div className='flex justify-center items-center gap-3'>
                <div className='flex justify-center items-center flex-col text-end'>
                  <h2 className='text-md font-semibold'>Diya Bala</h2>
                  <span className='text-[14px] w-full font-normal'>Admin</span>
                </div>
                <img className='w-[45px] h-[45px] rounded-md overflow-hidden' src="http://localhost:3000/images/admin.jpg" alt="" />

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Header