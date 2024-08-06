import React from 'react'
import { Outlet } from 'react-router-dom'
import { LuCircleDollarSign } from "react-icons/lu";
import { MdCurrencyExchange,MdProductionQuantityLimits } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { HiShoppingBag } from "react-icons/hi2";

function AdminDashboard() {
  return (
      <div className='px-2 md:px-7 py-5'>
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7'>

          <div className='flex justify-between items-center p-5 bg-[#fae8e8] rounded-md gap-3'>
            <div className='flex flex-col justify-start items-start text-[#5c5a5a]'>
            <span className='text-md font-medium'>Total Sales</span>
              <h2 className='mt-2 text-3xl font-medium text-[#1e2824] '>$3434</h2>
              
            </div>

            <div className='w-[40px] h-[47px] rounded-md bg-[#323536] flex justify-center items-center text-xl '>
              <LuCircleDollarSign className='text-[#fae8e8] shadow-lg ' />
            </div>
          </div>


          <div className='flex justify-between items-center p-5 bg-[#fde2ff] rounded-md gap-3'>
            <div className='flex flex-col justify-start items-start text-[#5c5a5a]'>
              <span className='text-md font-medium'>Products</span>
              <h2 className='mt-2 text-3xl font-medium text-[#1e2824] '>50</h2>
            </div>

            <div className='w-[40px] h-[47px] rounded-md bg-[#323536] flex justify-center items-center text-xl '>
              <MdProductionQuantityLimits className='text-[#fde2ff] shadow-lg' />
            </div>
          </div>


          <div className='flex justify-between items-center p-5 bg-[#e9f8a2] rounded-md gap-3'>
            <div className='flex flex-col justify-start items-start text-[#5c5a5a]'>
              <span className='text-md font-medium'>Sellers</span>
              <h2 className='mt-2 text-3xl font-medium text-[#1e2824] '>10</h2>
            </div>

            <div className='w-[40px] h-[47px] rounded-md bg-[#323536] flex justify-center items-center text-xl '>
              <FaUsers className='text-[#e9f8a2] shadow-lg' />
            </div>
          </div>


          <div className='flex justify-between items-center p-5 bg-[#ecebff] rounded-md gap-3'>
            <div className='flex flex-col justify-start items-start text-[#5c5a5a]'>
              <span className='text-md font-medium'>Orders</span>
              <h2 className='mt-2 text-3xl font-medium text-[#1e2824] '>54</h2>
            </div>

            <div className='w-[40px] h-[47px] rounded-md bg-[#323536] flex justify-center items-center text-xl '>
              <HiShoppingBag className='text-[#ecebff] shadow-lg' />
            </div>
          </div>


        </div>
    </div>
  )
}

export default AdminDashboard