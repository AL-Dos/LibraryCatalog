import React, { useState } from 'react';
import '../index.css';
import webLogo from '../assets/weblogo.png';
import dashboard from '../assets/dashboard.png';
import books from '../assets/open-book.png';
import logout from '../assets/logout.png';
import { useNavigate } from 'react-router-dom';

const UserIssue = () => {

    const navigate = useNavigate();

    const handleUserDashboardBttn = () => {
        navigate('/userdashboard');
    };

    const handleUserBooksBttn = () => {
        navigate('/userbooks');
    };

    const handleUserIssueBttn = () => {
        navigate('/userissue');
    };

    const handleLogoutBttn = () => {
        navigate('/');
    };

    return (
        <div>
            <div className='body flex flex-col'>
                <header className='flex justify-between p-5 bg-black/20 border-b-2'>
                    <div className="flex items-center gap-2 font-extrabold font-sans font-family: Arial, sans-serif">
                        <img src={webLogo} className='w-9 h-9' />
                        <button className='text-white text-3xl'>
                            CS 4-319 LIBRARY
                        </button>
                    </div>
                    <div className='flex flex-row gap-6 items-center'>
                        <h1 className='text-white font-extrabold'>Welcome, User!</h1>
                        <button onClick={handleLogoutBttn}>
                            <img src={logout} className='w-7 h-7' />
                        </button>
                    </div>
                </header>
                <main className='flex h-screen'>
                    <div className='left-nav'>
                        <button className='bttn' onClick={handleUserDashboardBttn}>
                            <img src={dashboard} className='w-9' />
                            DASHBOARD
                        </button>
                        <button className='bttn' onClick={handleUserBooksBttn}>
                            <img src={books} className='w-9' />
                            BOOK DETAILS
                        </button>
                        <button className='bttn' onClick={handleUserIssueBttn}>
                            <img src={books} className='w-9' />
                            ISSUED BOOKS
                        </button>
                    </div>
                    <div className='w-screen'>
                        <div className='flex flex-col items-center border-b border-neutral-500 mb-10'>
                            <h1 className='main-text my-12'>ISSUE BOOKS</h1>
                        </div>
                        <div className='mx-10 p-4 bg-slate-300'>
                            <table className='w-full text-left'>
                                <thead>
                                    <tr>
                                        <th className='tbody font-extrabold text-xl'>S.No.</th>
                                        <th className='tbody font-extrabold text-xl'>Book Name</th>
                                        <th className='tbody font-extrabold text-xl'>Category</th>
                                        <th className='tbody font-extrabold text-xl'>Issue Date</th>
                                        <th className='tbody font-extrabold text-xl'>Due Date</th>
                                        <th className='tbody font-extrabold text-xl'>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='tbody'></td>
                                        <td className='tbody'></td>
                                        <td className='tbody'></td>
                                        <td className='tbody'></td>
                                        <td className='tbody'></td>
                                        <td className='tbody'></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default UserIssue