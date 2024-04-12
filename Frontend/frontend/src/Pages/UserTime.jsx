import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/UHeader';
import Home from '../Assets/home.png';
import Bag from '../Assets/shopping-bag.png';
import Time from '../Assets/stopwatch.png';
import left from '../Assets/left.png';
import right from '../Assets/next.png';
import data from '../Components/data'; // Import your data

const UserTime = () => {
  const navigate = useNavigate();

  const handleUserDashboard = () => {
    navigate('/userdashboard');
  };

  const handleUserBooks = () => {
    navigate('/userbag');
  };

  const handleUserTime = () => {
    navigate('/usertime');
  };

  // Paginate the data
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const startIndex = currentPage * itemsPerPage + 1;
  const endIndex = Math.min(startIndex + itemsPerPage - 1, data.length);

  const paginatedData = data.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  return (
    <div className='bg2'>
      <Header />
      <div className='h-5/6 flex gap-16'>
        <div className='flex flex-col w-28 h-full items-center justify-center gap-12 border-r border-gray-300'>
          <button className='side p-3' onClick={handleUserDashboard}><img src={Home} className='w-8' /></button>
          <button className='side p-3' onClick={handleUserBooks}><img src={Bag} className='w-8' /></button>
          <button className='side p-3' onClick={handleUserTime}><img src={Time} className='w-8' /></button>
        </div>
        <div className='w-10/12 flex flex-col gap-12'>
          <div className='flex items-end justify-between'>
            <h1 className='text-6xl font-play font-medium mt-10 pl-8'>Book Deadline.</h1>
          </div>
          <div className='pl-8 flex h-4/6'>
            {paginatedData.map((d, index) => (
              <div key={index} className='flex flex-col gap-3'>
                <div className="book-container" style={{ width: '300px' }}> {/* Added book-container with fixed width */}
                  <img src={d.book} className='w-full pr-10 mb-5' /> {/* Set the width to full */}
                </div>
                <div className='mr-8 flex flex-col border-t border-b border-black py-1'>
                  <div className='flex flex-col'>
                    <h1 className='font-bebas text-4xl'>{d.bookname}</h1>
                  </div>
                </div>
                <div>
                  <p className='mr-8 font-dm text-sm'>Issued: Friday, 19/04/2024, 6:00 PM</p>
                  <p className='mr-8 font-dm text-sm'>Due: Monday, 22/04/2024, 6:00 PM</p>
                </div>
                <button className='mr-8 text-left w-fit bg-white rounded-lg py-1 px-3 border-black border text-sm cart mt-2'>Return Book</button>
              </div>
            ))}
          </div>
          <div className="flex gap-5 justify-start pl-8">
            <button onClick={prevPage} disabled={currentPage === 0} className='p-2 rounded-full border border-black bg-white cursor-pointer cart'><img src={left} className='w-6' /></button>
            <button onClick={nextPage} disabled={currentPage === totalPages - 1} className='p-2 rounded-full border border-black bg-white cursor-pointer cart'><img src={right} className='w-6' /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTime;
