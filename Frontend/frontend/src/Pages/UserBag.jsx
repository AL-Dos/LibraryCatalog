import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/UHeader';
import Home from '../Assets/home.png';
import Bag from '../Assets/shopping-bag.png';
import Back from '../Assets/back.png';
import Time from '../Assets/stopwatch.png';
import del from '../Assets/delete.png';
import check from '../Assets/check.png';
import left from '../Assets/left.png';
import right from '../Assets/next.png';
import data from '../Components/data'; // Import your data

const UserBag = () => {
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
    const itemsPerPage = 2;
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
                    <button className='side p-3' onClick={handleUserDashboard} ><img src={Home} className='w-8' /></button>
                    <button className='side p-3' onClick={handleUserBooks}><img src={Bag} className='w-8' /></button>
                    <button className='side p-3' onClick={handleUserTime}><img src={Time} className='w-8' /></button>
                </div>
                <div className='w-10/12 flex flex-col gap-12'>
                    <div className='flex items-end justify-between'>
                        <h1 className='text-6xl font-play font-medium mt-10 pl-8'>My Cart.</h1>
                        <button className='flex gap-3 h-fit p-3 border bg-white rounded-full font-dm text-sm items-center cart' onClick={handleUserDashboard}>
                            <img src={Back} className='w-5 h-5' />
                            Continue Browsing
                        </button>
                    </div>
                    <div className='pl-8'>
                        <table className='flex flex-col'>
                            <thead>
                                <tr className='flex justify-between w-full gap-10 py-5 font-raleway text-sm border-b border-black'>
                                    <th className='w-2/12 text-right'></th>
                                    <th className='w-5/12 text-left'>BOOK</th>
                                    <th className='w-2/12 text-center'>AVAILABILITY</th>
                                    <th className='w-2/12 text-center'>ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {paginatedData.map((item, index) => (
                                    <tr key={index} className='flex items-center justify-between w-full gap-10 py-5 font-dm text-sm border-b border-black select'>
                                        <td className='w-2/12 flex justify-end'><img src={item.book} className='w-36' /></td>
                                        <td className='w-5/12 text-left flex items-end gap-5'>
                                            <div className='flex flex-col'>
                                                <h1 className='font-bebas text-5xl'>{item.bookname}</h1>
                                                <div className='flex flex-col font-dm font-medium'>
                                                    <p className='text-lg'>{item.author}</p>
                                                    <p className='text-lg'>{item.category}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='w-2/12 text-center font-dm'>{item.availability}</td>
                                        <td className='w-2/12 justify-center flex items-center gap-2'>
                                            <button className='flex items-center gap-3 p-3 rounded-full bg-white font-dm cart'><img src={del} className='w-3' />Remove</button>
                                            <button className='flex items-center gap-3 p-3 rounded-full bg-white font-dm cart'><img src={check} className='w-3' />Request</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {/* Pagination controls */}
                        <div className='flex justify-start gap-5 mt-10'>
                            <button onClick={prevPage} disabled={currentPage === 0} className='p-2 rounded-full border border-black bg-white cart'><img src={left} className='w-6' /></button>
                            <button onClick={nextPage} disabled={currentPage === totalPages - 1} className='p-2 border border-black rounded-full bg-white cart'><img src={right} className='w-6' /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserBag;
