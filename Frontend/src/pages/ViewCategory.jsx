import React, { useState } from 'react';
import '../index.css';
import webLogo from '../assets/weblogo.png';
import dashboard from '../assets/dashboard.png';
import setting from '../assets/gear.png';
import category from '../assets/options-lines.png';
import user from '../assets/user.png';
import logout from '../assets/logout.png';
import { useNavigate } from 'react-router-dom';

const ViewCategory = () => {

  const [showBooksDropdown, setShowBooksDropdown] = useState(false);
  const [showCategoriesDropdown, setShowCategoriesDropdown] = useState(false);
  const [showUsersDropdown, setShowUsersDropdown] = useState(false);
  const navigate = useNavigate();

  const handleBooksDropdownClick = () => {
    setShowBooksDropdown(!showBooksDropdown);
    setShowCategoriesDropdown(false);
    setShowUsersDropdown(false);
  };

  const handleCategoriesDropdownClick = () => {
    setShowCategoriesDropdown(!showCategoriesDropdown);
    setShowBooksDropdown(false);
    setShowUsersDropdown(false);
  };

  const handleUsersDropdownClick = () => {
    setShowUsersDropdown(!showUsersDropdown);
    setShowBooksDropdown(false);
    setShowCategoriesDropdown(false);
  };

  const handleDashboardBttn = () => {
    navigate('/dashboard');
  };

  const handleAddBooksBttn = () => {
    navigate('/addbooks');
  };

  const handleViewBooksBttn = () => {
    navigate('/viewbooks');
  };

  const handleAddCategoryBttn = () => {
    navigate('/addcategory');
  };

  const handleViewCategoryBttn = () => {
    navigate('/viewcategory');
  };

  const handleAddUsersBttn = () => {
    navigate('/addusers');
  };

  const handleViewUsersBttn = () => {
    navigate('/viewusers');
  };

  const handleLogoutBttn = () => {
    navigate('/');
  };

  return (
    <div className='body flex flex-col'>
      <header className='flex justify-between p-5 bg-black/20 border-b-2'>
        <div className="flex gap-2 font-extrabold font-sans font-family: Arial, sans-serif">
          <img src={webLogo} className='w-9' />
          <button className='text-white text-3xl'>
            CS 4-319 LIBRARY
          </button>
        </div>
        <div className='flex flex-row gap-6 items-center'>
          <h1 className='text-white font-extrabold'>Welcome, Admin!</h1>
          <button onClick={handleLogoutBttn}>
            <img src={logout} className='w-7 h-7' />
          </button>
        </div>
      </header>
      <main className='flex h-screen'>
        <div className='left-nav'>
          <button className='bttn' onClick={handleDashboardBttn}>
            <img src={dashboard} className='w-9' />
            DASHBOARD
          </button>
          <div className="relative">
            <button className='bttn' onClick={handleBooksDropdownClick}>
              <img src={setting} className='w-9' />
              MANAGE BOOKS
            </button>
            {showBooksDropdown && (
              <div className="dropdown">
                <button className='py-5 drop' onClick={handleAddBooksBttn}>ADD BOOKS</button>
                <button className='py-5 drop' onClick={handleViewBooksBttn}>VIEW BOOKS</button>
              </div>
            )}
          </div>
          <div className="relative">
            <button className='bttn' onClick={handleCategoriesDropdownClick}>
              <img src={category} className='w-9' />
              MANAGE CATEGORIES
            </button>
            {showCategoriesDropdown && (
              <div className="dropdown">
                <button className='py-5 drop' onClick={handleAddCategoryBttn}>ADD CATEGORIES</button>
                <button className='py-5 drop' onClick={handleViewCategoryBttn}>VIEW CATEGORIES</button>
              </div>
            )}
          </div>
          <div className="relative">
            <button className='bttn' onClick={handleUsersDropdownClick}>
              <img src={user} className='w-9' />
              MANAGE USERS
            </button>
            {showUsersDropdown && (
              <div className="dropdown">
                <button className='py-5 drop' onClick={handleAddUsersBttn}>ADD USERS</button>
                <button className='py-5 drop' onClick={handleViewUsersBttn}>VIEW USERS</button>
              </div>
            )}
          </div>
        </div>
        <div className='w-screen'>
          <div className='flex flex-col items-center border-b border-neutral-500 mb-10'>
            <h1 className='main-text my-12'>VIEW CATEGORY</h1>
          </div>
          <div className='mx-10 p-4 bg-slate-300'>
            <table className='w-full text-left'>
              <thead>
                <tr>
                  <th className='tbody font-extrabold text-xl'>S.No.</th>
                  <th className='tbody font-extrabold text-xl'>Category Name</th>
                  <th className='tbody font-extrabold text-xl'>Status</th>
                  <th className='tbody font-extrabold text-xl'>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
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
  )
}

export default ViewCategory