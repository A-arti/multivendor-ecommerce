import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getNav } from '../navigation/index';
import { BiLogOutCircle } from "react-icons/bi";

const SideBar = () => {
    const { pathname } = useLocation();
    const [allNav, setAllNav] = useState([])
    useEffect(() => {
        const navs = getNav('admin')
        setAllNav((navs))
    }, [])
    console.log(allNav)
    return (
        <div>
            <div className={`w-[260px] fixed bg-[#afa7f9] z-50 top-0 h-screen shadow-[0_0_15px_0_rgb(34_41_47_/_5%)] transition-all `}>
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
                                    <Link to={item.path} className={`${pathname === item.path ? 'bg-blue-400 shadow-indigo-500/50 text-white duration-500' : 'text-[#030811] font-bold duration-200 '} px-[12px] py-[9px] rounded-sm flex justify-start items-center gap-[12px] hover:pl-4 transition-all w-full mb-1 `} >
                                        <span>{item.icon}</span>
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )}

                        <li>
                            <button className='text-[#030811] font-bold duration-200 px-[12px] py-[9px] rounded-sm flex justify-start items-center gap-[12px] hover:pl-4 transition-all w-full mb-1'>
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