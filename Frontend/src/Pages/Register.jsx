import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../Assets/uslogo.png';

const Register = () => {
    const [userName, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Validate fields
        if (!userName || !email || !password || !confirmPassword) {
            setErrorMessage('All fields are required.');
            return;
        }

        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match!');
            return;
        }

        try {
            const response = await fetch('http://localhost:8000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    name: userName
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                setErrorMessage(errorData.detail || 'Registration failed!');
                return;
            }

            const data = await response.json();
            setSuccessMessage('Registration successful!');
            setTimeout(() => {
                navigate('/');
            }, 2000);
        } catch (error) {
            console.error('Error:', error);
            setErrorMessage('An error occurred. Please try again.');
        }
    };

    const handleBack = () => {
        navigate('/');
    };

    return (
        <div className='bg flex'>
            <div className='w-3/6 h-screen flex items-center justify-center'>
                <div className='h-5/6 w-5/6 bg-white bg-opacity-50 backdrop-blur-md shadow-xl border-4 rounded-xl border-white flex flex-col items-center justify-evenly'>
                    <h1 className='text-5xl text-black font-dm font-black tracking-tight px-5'>Create your Account!</h1>
                    {errorMessage && <div className="error-message">{errorMessage}</div>}
                    {successMessage && <div className="success-message">{successMessage}</div>}
                    <div className='flex flex-col w-full items-center gap-5'>
                        <div className='flex flex-col w-6/12 gap-1 text-left'>
                            <input
                                placeholder='User Name'
                                type="text"
                                name="userName"
                                className='textfield'
                                value={userName}
                                onChange={(e) => setName(e.target.value)} />
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