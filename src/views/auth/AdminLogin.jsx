import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { admin_login, messageClear } from '../../store/reducers/authReducer';
import { PropagateLoader } from 'react-spinners';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'; // Importing useNavigate

const AdminLogin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Initializing navigate
    const { loader, errorMessage, successMessage } = useSelector(state => state.auth);

    const [state, setState] = useState({
        email: "",
        password: ""
    });

    const handleInput = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(admin_login(state));
        console.log(state);
    };

    const overrideStyle = {
        display: 'flex',
        margin: '0 auto',
        height: '24px',
        justifyContent: 'center',
        alignItems: 'center'
    };

    useEffect(() => {
        if (errorMessage) {
            toast.error(errorMessage);
            dispatch(messageClear());
        }
        if (successMessage) {
            toast.success(successMessage);
            dispatch(messageClear());
            // navigate('/'); // Navigate to the home page after successful login
        }
    }, [dispatch, errorMessage, successMessage, navigate]);

    return (
        <div className='min-w-screen min-h-screen bg-sky-200 flex justify-center items-center'>
            <div className='w-[450px] text-sky-800 border border-slate-300 shadow-slate-800 bg-white p-8 rounded-md'>
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
                    <button disabled={loader} className='bg-sky-900 w-full hover:shadow-blue-300/ hover:shadow-lg text-white rounded-md px-7 py-2 mb-3'>
                        {loader ? <PropagateLoader color='#fff' cssOverride={overrideStyle} /> : 'Login'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
