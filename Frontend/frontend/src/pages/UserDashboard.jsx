import React, { useState } from 'react';
import '../index.css';
import webLogo from '../assets/weblogo.png';
import dashboard from '../assets/dashboard.png';
import books from '../assets/open-book.png';
import logout from '../assets/logout.png';
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {
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
          <div className='w-full'>
            <div className='flex flex-col items-center border-b border-neutral-500'>
              <h1 className='main-text my-12 mx-5'>WELCOME TO THE LIBRARY, USER!</h1>
              <h4 className='text-xl text-white font-bold mb-5 text-center mx-5'>"Step into a world of knowledge, where books whisper tales of adventure and discovery awaits at every turn."</h4>
              <button className='hover py-4 px-8 border rounded-lg bg-black/20 text-white font-medium mb-5'>REFRESH PAGE</button>
            </div>
            <div className='flex flex-row items-center py-2 my-3 mx-10 h-2/6 gap-5'>
              <div className='cards'>TOTAL BOOKS<br/>____ ____</div>
            </div>
            <div className='flex flex-row items-center py-2 my-3 mx-10 h-2/6 gap-5'>
              <div className='cards'>BOOKS ISSUED<br/>____ ____</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default UserDashboard;