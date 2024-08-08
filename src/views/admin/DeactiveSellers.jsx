import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import Pagination from '../Pagination';
import { FaEye } from 'react-icons/fa';

const DeactiveSellers = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchValue, setSearchValue] = useState('');
    const [parPage, setParPage] = useState(5);

    return (
        <div className='px-2 lg:px-7 pt-5'>
            <h1 className='text-[20px] font-bold mb-3'>Deactive Seller</h1>
            <div className='w-full p-4 bg-[#fff] rounded-md border'>
                <div className='flex justify-between items-center p-2 rounded-md'>
                    <select 
                        onChange={(e) => setParPage(parseInt(e.target.value))} 
                        className='px-4 py-2 focus:border-gray-600 outline-none bg-[#fff] border border-slate-400 rounded-md text-[#6a6a6b]'>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                    </select>
                    <input
                        className='px-4 py-2 focus:border-gray-600 outline-none bg-[#fff] border border-slate-400 rounded-md text-[#6a6a6b]'
                        type="text" placeholder='search'
                    />
                </div>

                <div className='relative overflow-x-auto'>
                    <table className='w-full text-sm text-left text-[#6a6a6b]'>
                        <thead className='text-sm text-[#6a6a6b] uppercase border-b border-slate-400'>
                            <tr>
                                <th scope='col' className='py-3 px-4'>No</th>
                                <th scope='col' className='py-3 px-4'>Image</th>
                                <th scope='col' className='py-3 px-4'>Name</th>
                                <th scope='col' className='py-3 px-4'>Email</th>
                                <th scope='col' className='py-3 px-4'>Payment Status</th>
                                <th scope='col' className='py-3 px-4'>Status</th>
                                <th scope='col' className='py-3 px-4'>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {[1, 2, 3, 4, 5].map((d, i) => (
                                <tr key={i}>
                                    <td className='py-3 px-4 font-medium whitespace-nowrap border-b border-gray-100'>{d}</td>
                                    <td className='py-3 px-4 font-medium whitespace-nowrap border-b border-gray-100'>
                                        <img className='w-[45px] h-[45px]' src={`http://localhost:3000/images/category/${d}.jpg`} alt="" />
                                    </td>
                                    <td className='py-3 px-4 font-medium whitespace-nowrap border-b border-gray-100'>Diya Bala</td>
                                    <td className='py-3 px-4 font-medium whitespace-nowrap border-b border-gray-100'>diya@gmail.com</td>
                                    <td className='py-3 px-4 font-medium whitespace-nowrap border-b border-gray-100'>
                                        <span>Pending</span>
                                    </td>
                                    <td className='py-3 px-4 font-medium whitespace-nowrap border-b border-gray-100'>
                                        <span>Deactive</span>
                                    </td>
                                    <td className='py-3 px-4 font-medium whitespace-nowrap border-b border-gray-100'>
                                        <div className='flex justify-start items-center gap-4'>
                                            <Link className='p-[6px] bg-green-500 rounded hover:shadow-md text-white hover:shadow-green-500/50'> <FaEye /> </Link>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                
                <div className='w-full flex justify-end mt-4 bottom-4 right-4'>
                    <Pagination 
                        pageNumber={currentPage}
                        setPageNumber={setCurrentPage}
                        totalItem={50}
                        parPage={parPage}
                        showItem={3}
                    />
                </div>
            </div>
        </div>
    );
};

export default DeactiveSellers;
