import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import logo from '../Assets/uslogo.png';

const Register = () => {
    // State variables to store user input
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can add logic to submit the form data to your backend
        // For now, let's just log the values to the console
        console.log('First Name:', fName);
        console.log('Last Name:', lName);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Confirm Password:', confirmPassword);
    };

    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/');
    };

    return (
        <div className='bg flex'>
            <div className='w-3/6 h-screen flex items-center justify-center'>
                <div className='h-5/6 w-5/6 bg-white bg-opacity-50 backdrop-blur-md shadow-xl border-4 rounded-xl border-white flex flex-col items-center justify-evenly'>
                    <h1 className='text-5xl text-black font-dm font-black tracking-tight px-5'>Create your Account!</h1>
                    <div className='flex flex-col w-full items-center gap-5'>
                        <div className='flex flex-col w-6/12 gap-1 text-left'>
                            <input
                                placeholder='First Name'
                                type="text"
                                name="fName"
                                className='textfield'
                                value={fName}
                                onChange={(e) => setFName(e.target.value)} />
                        </div>
                        <div className='flex flex-col w-6/12 gap-1 text-left'>
                            <input
                                placeholder='Last Name'
                                type="text"
                                name="lName"
                                className='textfield'
                                value={lName}
                                onChange={(e) => setLName(e.target.value)} />
                        </div>
                        <div className='flex flex-col w-6/12 gap-1 text-left'>
                            <input
                                placeholder='Email'
                                type="text"
                                name="email"
                                className='textfield'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className='flex flex-col w-6/12 gap-1 text-left'>
                            <input
                                placeholder='Password'
                                type="password"
                                name="password"
                                className='textfield'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className='flex flex-col w-6/12 gap-1 text-left'>
                            <input
                                placeholder='Confirm Password'
                                type="password"
                                name="confirmPassword"
                                className='textfield'
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)} />
                        </div>
                        <div className='flex flex-row w-6/12 justify-between my-2'>
                            <button className='button' onClick={handleSubmit}>Create Account</button>
                            <button className='button' onClick={handleBack}>Back</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center w-3/6 h-screen bg-white bg-opacity-50 backdrop-blur-md shadow-xl border-l-4'>
                <div className='w-5/6 h-4/6 flex flex-col items-center justify-center'>
                    <img src={logo} className='pl-32' alt="Logo" />
                </div>
            </div>
        </div>
    );
};

export default Register;
