import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import { BsGoogle } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";

const Login = () => {
    const [state, setState] = useState({
        email:"",
        password:""
    });
    const handleInput = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state);
    }
    return (
        <div className='min-w-screen min-h-screen bg-sky-200   flex justify-center items-center ' >
          <div className='w-[450px] text-sky-800  border border-slate-300 shadow-slate-800 bg-white p-8 rounded-md'>
                <div>
                    <img src="http://localhost:3000/images/logo.png" alt="logo" />
                </div>
                <p className='text-sm mb-3 font-medium'>Enter your existing account email Id and password.</p>
    <form onSubmit = {handleSubmit}>
       
        <div className='flex flex-col w-full gap-1 mb-3'>
            <label htmlFor="email">Email</label>
            <input onChange = {handleInput} value={state.email} className='px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md' type="email" name='email' placeholder='Email' id='email' required />

        </div>

        <div className='flex flex-col w-full gap-1 mb-3'>
            <label htmlFor="password">Password</label>
            <input onChange = {handleInput} value={state.password} className='px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md' type="password" name='password' placeholder='Password' id='password' required />
        </div>

       
        <button className='bg-sky-900 w-full hover:shadow-blue-300/ hover:shadow-lg text-white rounded-md px-7 py-2 mb-3'>Sign In</button>

        <div className='flex items-center mb-3 gap-3 justify-center'>
            <p>Don't have an account ? <Link className='font-bold' to="/register">Sing Up</Link> </p>

        </div>
        <div className='w-full flex justify-center items-center mb-3'>
            <div className='w-[45%] bg-slate-700 h-[1px]'></div>
            <div className='w-[10%] flex justify-center items-center'>
                <span className='pb-1'>Or</span>
            </div>
            <div className='w-[45%] bg-slate-700 h-[1px] '></div>
        </div>

        <div className='flex justify-center items-center gap-3'>
            <div className='w-10 h-10 flex border rounded-full  hover:bg-yellow-100  justify-center cursor-pointer items-center overflow-hidden '>
            <BsGoogle />
             </div>

             <div className='w-10 h-10 flex border rounded-full  hover:bg-blue-200  justify-center cursor-pointer items-center overflow-hidden'>
             <FaFacebookF />
             </div>

        </div>

    </form>
            </div>  
            
        </div>
    );
};

export default Login;