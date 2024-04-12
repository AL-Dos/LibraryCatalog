import React, { useState } from 'react';
import logo from '../Assets/uslogo.png'
import logout from '../Assets/logout (1).png'
import me from '../Assets/me.png'
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate();

    const handleLogoutBttn = () => {
        navigate('/');
    };

    return (
        <div className='header2'>
            <div className='flex items-center'>
                <img src={logo} className='logo' />
            </div>
            <div className='flex items-center gap-3'>
                <img src={me} className='w-10 h-10 rounded-full' />
                <h1 className='font-dm text-sm mr-10'>Welcome, Nicklaus Ling!</h1>
                <button><img src={logout} className='w-7' onClick={handleLogoutBttn} /></button>
            </div>
        </div>
    )
}

export default Header