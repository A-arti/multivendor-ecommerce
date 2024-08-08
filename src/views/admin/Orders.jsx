import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../Pagination';
import { GoDotFill } from "react-icons/go";
import { BsEye } from "react-icons/bs";
import { RiEyeCloseLine } from "react-icons/ri";

const StatusDiv = ({ status }) => {
    const statusStyles = {
        pending: 'bg-orange-100 text-orange-600',
        success: 'bg-green-100 text-green-600'
    };

    const statusText = {
        pending: 'Pending',
        success: 'Success'
    };

    return (
        <span className={`${statusStyles[status]} mx-6 rounded-md flex justify-center items-center`}>
            <GoDotFill /> {statusText[status]}
        </span>
    );
};

const Orders = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchValue, setSearchValue] = useState('');
    const [parPage, setParPage] = useState(5);
    const [show, setShow] = useState(false);

    return (
        <div className='px-2 lg:px-7 pt-5'>
             <h1 className='text-[20px] font-bold mb-3'>Orders </h1>
            <div className='w-full p-2 bg-[#fff] rounded-md border'>
                <div className='flex justify-between items-center p-2 rounded-md'>
                    <select onChange={(e) => setParPage(parseInt(e.target.value))} className='px-4 py-2 focus:border-gray-600 outline-none bg-[#ffff] border border-slate-400 rounded-md text-[#6a6a6b]'>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                    </select>
                    <input className='px-4 py-2 focus:border-gray-600 outline-none bg-[#fff] border border-slate-400 rounded-md text-[#6a6a6b]' type="text" placeholder='search' />
                </div>
                <div className='relative mt-5 overflow-x-auto bg-[#eeeeef] rounded-sm'>
                    <div className='w-full text-sm text-center'>
                        <div className='text-sm text-[#727273] uppercase border-b border-slate-200'>
                            <div className='flex justify-between items-center'>
                                <div className='py-3 w-[25%]'>Order id</div>
                                <div className='py-3 w-[13%]'>Price</div>
                                <div className='py-3 w-[18%]'>Payment Status</div>
                                <div className='py-3 w-[18%]'>Order Status</div>
                                <div className='py-3 w-[18%]'>Action</div>
                                <div className='py-3 w-[8%]'>More</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-[#737374] text-center bg-[#fff] rounded-sm'>
                    <div className='flex justify-between items-center border-b border-slate-200'>
                        <div className='py-3 w-[25%] whitespace-nowrap'>#34343</div>
                        <div className='py-3 w-[13%]'>$654</div>
                        <div className='py-3 w-[18%]'><StatusDiv status="success" /></div>
                        <div className='py-3 w-[18%]'><StatusDiv status="pending" /></div>
                        <div className='py-3 w-[18%] hover:text-blue-800 hover:underline'><Link>View</Link></div>
                        <div onClick={() => setShow(!show)} className='py-4 pl-8 w-[8%] text-lg'>{show ? <RiEyeCloseLine /> : <BsEye />}</div>
                    </div>
                </div>
                <div className={show ? 'block text-[#737374] text-center' : 'hidden'}>
                    {[1,2].map((_, index) => (
                        <div key={index} className='flex justify-start items-center border-b border-slate-100'>
                            <div className='py-3 w-[25%] whitespace-nowrap'>#34343</div>
                            <div className='py-3 w-[13%]'>$654</div>
                            <div className='py-3 w-[18%]'><StatusDiv status="pending" /></div>
                            <div className='py-3 w-[18%]'><StatusDiv status="pending" /></div>
                        </div>
                    ))}
                </div>
                {/*  */}

                <div className='text-[#737374] text-center bg-[#fff] rounded-sm'>
                    <div className='flex justify-between items-center border-b border-slate-200'>
                        <div className='py-3 w-[25%] whitespace-nowrap'>#34343</div>
                        <div className='py-3 w-[13%]'>$654</div>
                        <div className='py-3 w-[18%]'><StatusDiv status="pending" /></div>
                        <div className='py-3 w-[18%]'><StatusDiv status="pending" /></div>
                        <div className='py-3 w-[18%] hover:text-blue-800 hover:underline'><Link>View</Link></div>
                        <div onClick={() => setShow(!show)} className='py-4 pl-8 w-[8%] text-lg'>{show ? <RiEyeCloseLine /> : <BsEye />}</div>
                    </div>
                </div>
                <div className={show ? 'block text-[#737374] text-center' : 'hidden'}>
                    {[1,2].map((_, index) => (
                        <div key={index} className='flex justify-start items-center border-b border-slate-100'>
                            <div className='py-3 w-[25%] whitespace-nowrap'>#34343</div>
                            <div className='py-3 w-[13%]'>$654</div>
                            <div className='py-3 w-[18%]'><StatusDiv status="pending" /></div>
                            <div className='py-3 w-[18%]'><StatusDiv status="pending" /></div>
                        </div>
                    ))}
                </div>

                {/*  */}

                <div className='text-[#737374] text-center bg-[#fff] rounded-sm'>
                    <div className='flex justify-between items-center border-b border-slate-200'>
                        <div className='py-3 w-[25%] whitespace-nowrap'>#34343</div>
                        <div className='py-3 w-[13%]'>$654</div>
                        <div className='py-3 w-[18%]'><StatusDiv status="success" /></div>
                        <div className='py-3 w-[18%]'><StatusDiv status="pending" /></div>
                        <div className='py-3 w-[18%] hover:text-blue-800 hover:underline'><Link>View</Link></div>
                        <div onClick={() => setShow(!show)} className='py-4 pl-8 w-[8%] text-lg'>{show ? <RiEyeCloseLine /> : <BsEye />}</div>
                    </div>
                </div>
                <div className={show ? 'block text-[#737374] text-center' : 'hidden'}>
                    {[1,2].map((_, index) => (
                        <div key={index} className='flex justify-start items-center border-b border-slate-100'>
                            <div className='py-3 w-[25%] whitespace-nowrap'>#34343</div>
                            <div className='py-3 w-[13%]'>$654</div>
                            <div className='py-3 w-[18%]'><StatusDiv status="pending" /></div>
                            <div className='py-3 w-[18%]'><StatusDiv status="pending" /></div>
                        </div>
                    ))}
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

export default Orders;
