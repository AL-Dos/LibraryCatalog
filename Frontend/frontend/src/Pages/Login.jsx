import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../Assets/uslogo.png'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {

        if (email === 'admin@gmail.com' && password === 'adminonly123') {
            navigate('/admindashboard');
        }
        else if (email === 'user@gmail.com' && password === 'useronly123') {
            navigate('/userdashboard');
        }
        else {
            alert('Incorrect Password!');
        }
    };

    return (
        <div className='bg'>
            <div className='flex justify-between text-center'>
                <div className='w-3/6 h-screen flex items-center justify-center'>
                    <div className='h-3/6 w-5/6 bg-white bg-opacity-50 backdrop-blur-md shadow-xl border-4 rounded-xl border-white flex flex-col items-center justify-evenly'>
                        <h1 className='text-5xl text-white font-play font-black px-5'>WELCOME TO THE<br/>LIBRARY!</h1>
                        <div className='flex flex-col w-full items-center gap-5'>
                            <div className='flex flex-col w-6/12 gap-1 text-left'>
                                <label htmlFor='email'>Email</label>
                                <input
                                    placeholder='Email'
                                    type="text"
                                    name="email"
                                    className='textfield'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className='flex flex-col w-6/12 gap-1 text-left'>
                                <label htmlFor='password'>Password</label>
                                <input
                                    placeholder='Password'
                                    type="password"
                                    name="password"
                                    className='textfield'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className='flex flex-row w-6/12 justify-between my-2'>
                                <button className='button' onClick={handleLogin}>Sign In</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center w-3/6 h-screen bg-white bg-opacity-50 backdrop-blur-md shadow-xl border-l-4'>
                    <div className='w-5/6 h-4/6 flex flex-col items-center justify-center'>
                        <img src={logo} className='pl-32' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login