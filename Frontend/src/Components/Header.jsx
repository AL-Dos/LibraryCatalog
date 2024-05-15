import React, { useState } from 'react';
import logo from '../Assets/adlogo.png'
import logout from '../Assets/logout.png'
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate();

  const handleDashboardBttn = () => {
    navigate('/admindashboard');
  };

  const handleBooksBttn = () => {
    navigate('/adminbooks');
  };

  const handleCategoryBttn = () => {
    navigate('/admincategory');
  };

  const handleIssueReqBttn = () => {
    navigate('/adminissuebooks');
  };

  const handleLogoutBttn = () => {
    navigate('/');
  };

  return (
    <div className='header'>
      <div className='flex items-center'>
        <img src={logo} className='logo' />
      </div>
      <div className='nav font-raleway'>
        <button className='hover' onClick={handleDashboardBttn}>DASHBOARD</button>
        <div className='flex flex-col'>
          <button className='hover' onClick={handleBooksBttn}>BOOKS</button>
        </div>
        <div className='flex flex-col'>
          <button className='hover' onClick={handleCategoryBttn}>CATEGORIES</button>
        </div>
        <button className='hover' onClick={handleIssueReqBttn}>REQUESTS</button>
      </div>
      <div className='flex'>
        <button><img src={logout} className='w-7' onClick={handleLogoutBttn} /></button>
      </div>
    </div>
  )
}

export default Header