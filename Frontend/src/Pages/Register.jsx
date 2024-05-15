import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../Assets/uslogo.png';
import axios from 'axios';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    });

    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const { username, email, password, password2 } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrors({});
        setMessage('');

        if (password !== password2) {
            setErrors({ password2: "Passwords do not match" });
        } else {
            const newUser = {
                username,
                email,
                password
            };
            try {
                const res = await axios.post('http://localhost:8000/api/register', newUser);
                console.log(res.data);
                setMessage('Account created successfully! Redirecting to login...');
                setTimeout(() => {
                    navigate('/'); // Redirect to login after successful registration
                }, 3000);
            } catch (err) {
                if (err.response && err.response.data) {
                    setErrors(err.response.data);
                } else {
                    setErrors({ general: "An error occurred. Please try again." });
                }
            }
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
                    <form className='flex flex-col w-full items-center gap-5' onSubmit={handleSubmit}>
                        <div className='flex flex-col w-6/12 gap-1 text-left'>
                            <input
                                placeholder='User Name'
                                type="text"
                                name="username"
                                className='textfield p-2 border rounded'
                                value={username}
                                onChange={onChange}
                                required
                            />
                            {errors.username && <p className='text-red-500 text-sm mt-1'>{errors.username}</p>}
                        </div>
                        <div className='flex flex-col w-6/12 gap-1 text-left'>
                            <input
                                placeholder='Email'
                                type="email"
                                name="email"
                                className='textfield p-2 border rounded'
                                value={email}
                                onChange={onChange}
                                required
                            />
                            {errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email}</p>}
                        </div>
                        <div className='flex flex-col w-6/12 gap-1 text-left'>
                            <input
                                placeholder='Password'
                                type="password"
                                name="password"
                                className='textfield p-2 border rounded'
                                value={password}
                                onChange={onChange}
                                required
                            />
                            {errors.password && <p className='text-red-500 text-sm mt-1'>{errors.password}</p>}
                        </div>
                        <div className='flex flex-col w-6/12 gap-1 text-left'>
                            <input
                                placeholder='Confirm Password'
                                type="password"
                                name="password2"
                                className='textfield p-2 border rounded'
                                value={password2}
                                onChange={onChange}
                                required
                            />
                            {errors.password2 && <p className='text-red-500 text-sm mt-1'>{errors.password2}</p>}
                        </div>
                        <div className='flex flex-row w-6/12 justify-between my-2'>
                            <button className='button bg-blue-500 text-black py-2 px-4 rounded' type='submit'>Create Account</button>
                            <button className='button bg-gray-500 text-black py-2 px-4 rounded' type='button' onClick={handleBack}>Back</button>
                        </div>
                        {message && <p className='text-green-500 text-sm mt-1'>{message}</p>}
                        {errors.general && <p className='text-red-500 text-sm mt-1'>{errors.general}</p>}
                    </form>
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