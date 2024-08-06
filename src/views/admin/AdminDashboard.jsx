import React from 'react';
import { LuCircleDollarSign } from "react-icons/lu";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { HiShoppingBag } from "react-icons/hi2";
import Chart from 'react-apexcharts';
import { Link } from 'react-router-dom';

function AdminDashboard() {
  const state = {
    series: [
      {
        name: "Orders",
        data: [23, 34, 45, 56, 76, 34, 23, 76, 87, 78, 34, 45]
      },
      {
        name: "Revenue",
        data: [67, 39, 45, 56, 90, 56, 23, 56, 87, 78, 67, 78]
      },
      {
        name: "Sellers",
        data: [34, 39, 56, 56, 80, 67, 23, 56, 98, 78, 45, 56]
      },
    ],
    options: {
      colors: ['#e6f796', '#acdff8', '#cbacfa'],
      chart: {
        height: 350,
        type: 'area',
        background: 'transparent',
        foreColor: '#333'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        colors: ['#e6f796', '#acdff8', '#cbacfa',],
        width: 2
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      legend: {
        position: 'top'
      },
      responsive: [
        {
          breakpoint: 565,
          yaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apl', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
          },
          options: {
            chart: {
              height: "550px"
            }
          }
        }
      ]
    }
  };

  return (
    <div className='px-2 md:px-4  sm:px-8'>
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4'>
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

        <div className='flex justify-between items-center p-5 bg-[#eadcff] rounded-md gap-3'>
          <div className='flex flex-col justify-start items-start text-[#5c5a5a]'>
            <span className='text-md font-medium'>Orders</span>
            <h2 className='mt-2 text-3xl font-medium text-[#1e2824] '>54</h2>
          </div>
          <div className='w-[40px] h-[47px] rounded-md bg-[#323536] flex justify-center items-center text-xl '>
            <HiShoppingBag className='text-[#eadcff] shadow-lg' />
          </div>
        </div>
      </div>
      {/* end .. */}
      <div className='w-full flex flex-wrap mt-4 '>

        <div className='w-full lg:w-7/12 border'>
          <div className='w-full bg-[#fff] p-4 rounded-md'>
            <Chart options={state.options} series={state.series} type='area' height={350} />
          </div>
        </div>

        {/*  */}
        <div className='w-full lg:w-5/12 lg:pl-4 mt-6 lg:mt-0'>
          <div className='w-full bg-[#c2e7facf] p-4 rounded-md text-[#333]'>
            <div className='flex justify-between items-center'>
              <h2 className='font-medium text-lg text-[#333] py-2'>Recent Seller Message</h2>
              <Link className='font-semibold text-sm text-[#333]'>View All</Link>
            </div>

            <div className='flex flex-col gap-2 pt-6 text-[#d0d2d6]'>
              <ol className='relative border-1 border-slate-600 ml-4'>
                <li className='mb-3 ml-6'>
                  <div className='flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] bg-[#203359] rounded-full z-10'>
                    <img className='w-full rounded-full h-full shadow-lg' src="http://localhost:3000/images/admin.jpg" alt="" /></div>
                  <div className='p-3 bg-slate-500 rounded-lg border border-slate-500 shadow-sm'>
                    <div className='flex justify-between items-center mb-2'>
                      <Link className='text-md font-normal'>Admin</Link>
                      <time className='mb-1 text-sm font-normal sm:order-last sm:mb-0'> 2 day ago</time>
                    </div>
                    <div className='p-2 text-xs font-normal bg-slate-400 rounded-lg border border-slate-500'>
                      How Are you
                    </div>
                  </div>
                </li>


                <li className='mb-3 ml-6'>
                  <div className='flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] bg-[#203359] rounded-full z-10'>
                    <img className='w-full rounded-full h-full shadow-lg' src="http://localhost:3000/images/admin.jpg" alt="" /></div>
                  <div className='p-3 bg-slate-800 rounded-lg border border-slate-600 shadow-sm'>
                    <div className='flex justify-between items-center mb-2'>
                      <Link className='text-md font-normal'>Admin</Link>
                      <time className='mb-1 text-sm font-normal sm:order-last sm:mb-0'> 2 day ago</time>
                    </div>
                    <div className='p-2 text-xs font-normal bg-slate-700 rounded-lg border border-slate-800'>
                      How Are you
                    </div>
                  </div>
                </li>


                <li className='mb-3 ml-6'>
                  <div className='flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] bg-[#203359] rounded-full z-10'>
                    <img className='w-full rounded-full h-full shadow-lg' src="http://localhost:3000/images/admin.jpg" alt="" /></div>
                  <div className='p-3 bg-slate-800 rounded-lg border border-slate-600 shadow-sm'>
                    <div className='flex justify-between items-center mb-2'>
                      <Link className='text-md font-normal'>Admin</Link>
                      <time className='mb-1 text-sm font-normal sm:order-last sm:mb-0'> 2 day ago</time>
                    </div>
                    <div className='p-2 text-xs font-normal bg-slate-700 rounded-lg border border-slate-800'>
                      How Are you
                    </div>
                  </div>
                </li>

              </ol>

            </div>
          </div>
        </div>

        {/*  */}
        <div className='w-full p-4 bg-[#f1ebfaeb] rounded-md mt-4 border'>
          <div className='flex justify-between items-center'>
            <h2 className='font-semibold text-lg text-[#333] pb-3 '>Recent Orders</h2>
            <Link className='font-semibold text-sm text-[#333]'>View All</Link>
          </div>

          <div className='relative overflow-x-auto'>
            <table className='w-full text-sm text-left text-[#5a5b5d]'>
              <thead className='text-sm text-[#606060] uppercase border-b border-slate-700'>
                <tr>
                  <th scope='col' className='py-3 px-4'>Order Id</th>
                  <th scope='col' className='py-3 px-4'>Price</th>
                  <th scope='col' className='py-3 px-4'>Payment Status</th>
                  <th scope='col' className='py-3 px-4'>Order Status</th>
                  <th scope='col' className='py-3 px-4'>Active</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className='py-3 px-4 font-medium whitespace-nowrap'>#34344</td>
                  <td className='py-3 px-4 font-medium whitespace-nowrap'>Pending</td>
                  <td className='py-3 px-4 font-medium whitespace-nowrap'>$454</td>
                  <td className='py-3 px-4 font-medium whitespace-nowrap'>Pending</td>
                  <td className='py-3 px-4 font-medium whitespace-nowrap'>View</td>
                </tr>

                <tr>
                  <td className='py-3 px-4 font-medium whitespace-nowrap'>#34344</td>
                  <td className='py-3 px-4 font-medium whitespace-nowrap'>$454</td>
                  <td className='py-3 px-4 font-medium whitespace-nowrap'>Pending</td>
                  <td className='py-3 px-4 font-medium whitespace-nowrap'>Pending</td>
                  <td className='py-3 px-4 font-medium whitespace-nowrap'>View</td>
                </tr>
              </tbody>

            </table>

          </div>

        </div>

        {/*  */}
      </div>
    </div>
  );
}

export default AdminDashboard;
