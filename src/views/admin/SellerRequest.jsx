import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import Pagination from '../Pagination';
import { FaEye } from 'react-icons/fa';

const SellerRequest = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchValue, setSearchValue] = useState('');
    const [parPage, setParPage] = useState(5);

    return (
        <div className='px-2 lg:px-7 pt-5'>
            <h1 className='text-[20px] font-bold mb-3'>Seller Request</h1>
            <div className='w-full p-4 bg-[#fff] rounded-md border'>
                <div className='flex justify-between items-center p-2 rounded-md'>
                    <select
                        onChange={(e) => setParPage(parseInt(e.target.value))}
                        className='px-4 py-2 focus:border-gray-600 outline-none bg-[#fff] border border-slate-400 rounded-md text-[#6a6a6b]'>
                        <option value='5'>5</option>
                        <option value='10'>10</option>
                        <option value='20'>20</option>
                    </select>
                    <input
                        className='px-4 py-2 focus:border-gray-600 outline-none bg-[#fff] border border-slate-400 rounded-md text-[#6a6a6b]'
                        type='text' placeholder='search'
                    />
                </div>

                <div className='relative overflow-x-auto'>
                    <table className='w-full text-sm text-left text-[#6a6a6b]'>
                        <thead className='text-sm text-[#6a6a6b] uppercase border-b border-slate-400'>
                            <tr>
                                <th scope='col' className='py-3 px-4'>No</th>
                                <th scope='col' className='py-3 px-4'>Name</th>
                                <th scope='col' className='py-3 px-4'>Email</th>
                                <th scope='col' className='py-3 px-4'>Payment Status</th>
                                <th scope='col' className='py-3 px-4'>Status</th>
                                <th scope='col' className='py-3 px-4'>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {[1, 2, 3, 4, 5].map((d, i) => (
                                <tr className='border-b border-slate-400' key={i}>
                                    <td className='py-2 px-4 font-medium whitespace-nowrap'>{d}</td>
                                    <td className='py-2 px-4 font-medium whitespace-nowrap'>Aarti Kori</td>
                                    <td className='py-2 px-4 font-medium whitespace-nowrap'>art@gmail.com</td>
                                    <td className='py-2 px-4 font-medium whitespace-nowrap'>
                                        <span>Inactive</span>
                                    </td>
                                    <td className='py-2 px-4 font-medium whitespace-nowrap'>
                                        <span>Pending</span>
                                    </td>
                                    <td className='py-2 px-4 font-medium whitespace-nowrap'>
                                        <div className='flex justify-start items-center gap-4'>
                                            <Link to='/admin/dashboard/seller/details/2' className='p-[6px] bg-green-500 rounded hover:shadow-md text-white hover:shadow-green-500/50'> <FaEye /> </Link>
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

export default SellerRequest;
