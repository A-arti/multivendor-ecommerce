import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { admin_login } from '../../store/reducers/authReducer';

const AdminLogin = () => {
    const dispatch = useDispatch();
    const [state, setState] = useState({
        email: "",
        password: ""
    });
    const handleInput = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(admin_login(state));
        console.log(state);
    }
    return (
        <div className='min-w-screen min-h-screen bg-sky-200   flex justify-center items-center ' >
            <div className='w-[450px] text-sky-800  border border-slate-300 shadow-slate-800 bg-white p-8 rounded-md'>
                {/* <div className='bg-white p-8 rounded-md w-[450px] text-sky-800 p-2 '> */}
                <div>
                    <img src="http://localhost:3000/images/logo.png" alt="logo" />
                </div>
                <form onSubmit={handleSubmit}>

                    <div className='flex flex-col w-full gap-1 mb-3'>
                        <label htmlFor="email">Email</label>
                        <input onChange={handleInput} value={state.email} className='px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md' type="email" name='email' placeholder='Email' id='email' required />

                    </div>

                    <div className='flex flex-col w-full gap-1 mb-3'>
                        <label htmlFor="password">Password</label>
                        <input onChange={handleInput} value={state.password} className='px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md' type="password" name='password' placeholder='Password' id='password' required />
                    </div>

                    <button className='bg-sky-900 w-full hover:shadow-blue-300/ hover:shadow-lg text-white rounded-md px-7 py-2 mb-3'>Log In</button>

                </form>

            </div>
        </div>

        // </div>
    );
};

export default AdminLogin;