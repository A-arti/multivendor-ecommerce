import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getNav } from '../navigation/index';
import { BiLogOutCircle } from "react-icons/bi";

const SideBar = ({ showSidebar, setShowSidebar }) => {
    const { pathname } = useLocation();
    const [allNav, setAllNav] = useState([])
    useEffect(() => {
        const navs = getNav('admin')
        setAllNav((navs))
    }, [])
    console.log(allNav)
    return (
        <div>
            <div onClick={() => setShowSidebar(false)} className={`w-[35px] fixed duration-200 ${!showSidebar ? 'invisible' : 'visible'} w-screen h-screen top-0 left-0 z-10`} >
          </div>
            <div className={`w-[250px] fixed bg-[#fff] z-50 top-0 h-screen shadow-[0_0_15px_0_rgb(34_41_47_/_5%)] transition-all ${showSidebar ? 'left - 0' : '-left-[260px] lg:left-0'}`}>
                <div className='h-[70px] flex justify-center items-center'>
                    <Link to='/' className='w-[180px] h-[50px]'>
                        <img className='w-full h-full' src="http://localhost:3000/images/logo.png" alt="" />
                    </Link>
                </div>
                <div>
                    <ul>
                        {
                            allNav.map((item, index) =>
                                <li key={index}>
                                    <Link to={item.path} className={`${pathname === item.path ? 'bg-[#333333] shadow-md shadow-grey-900 text-white duration-500 w-[65%] ml-6 justify-start items-center' : 'justify-start items-center text-[#030811]  duration-200 w-[200px] ml-6'} px-[12px] py-[10px] ml-4 rounded-md flex gap-[12px] hover:pl-4 transition-all w-full mb-1`} >

                                        <span>{item.icon}</span>
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )}

                        <li>
                            <button className='text-[#030811] duration-200 px-[12px] py-[10px] rounded-sm flex justify-start items-center gap-[12px] hover:pl-4 transition-all w-full mb-1 ml-6 '>
                                <span><BiLogOutCircle /></span>
                                <span>Logout</span>
                            </button>
                        </li>

                    </ul>
                </div>

            </div>

        </div>
    );
};

export default SideBar;