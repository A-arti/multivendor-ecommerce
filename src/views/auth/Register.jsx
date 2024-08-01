import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import { BsGoogle } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";
const Register = () => {

    const [state, setState] = useState({
        name:"",
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
        <div className='min-w-screen min-h-screen bg-sky-200 flex justify-center items-center ' >
          <div className='w-[450px] text-sky-800 p-2 shadow-xl shadow-slate-800'>
            <div className='bg-white p-8 rounded-md'>
                <h2 className='text-2xl mb-3 font-semibold text-center'>Welcome to Ecommerce</h2>
                <p className='text-sm mb-3 font-medium text-center'>Please register your account</p>

    <form onSubmit={handleSubmit}>
        <div className='flex flex-col w-full gap-1 mb-3'>
            <label htmlFor="name">Name</label>
            <input onChange = {handleInput} value={state.name} className='px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md' type="text" name='name' placeholder='Name' id='name' required />

        </div>


        <div className='flex flex-col w-full gap-1 mb-3'>
            <label htmlFor="email">Email</label>
            <input onChange = {handleInput} value={state.email} className='px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md' type="email" name='email' placeholder='Email' id='email' required />

        </div>

        <div className='flex flex-col w-full gap-1 mb-3'>
            <label htmlFor="password">Password</label>
            <input onChange = {handleInput} value={state.password} className='px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md' type="password" name='password' placeholder='Password' id='password' required />
        </div>

        <div className='flex items-center w-full gap-3 mb-3'>
            <input className='w-4 h-4 text-blue-600 overflow-hidden bg-gray-200 rounded border-gray-300 focus:ring-blue-500' type="checkbox" name="checkbox" id="checkbox" />
            <label htmlFor="checkbox"> I agree to privacy policy & treams</label> 
        </div>

        <button className='bg-sky-300 w-full hover:shadow-blue-300/ hover:shadow-lg text-white rounded-md px-7 py-2 mb-3'>Sign Up</button>

        <div className='flex items-center mb-3 gap-3 justify-center'>
            <p>Already Have an account ? <Link className='font-bold' to="/login">Sing In</Link> </p>

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
            
        </div>
    );
};

export default Register;