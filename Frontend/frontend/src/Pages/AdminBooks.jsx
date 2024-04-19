import React from 'react'
import Header from '../Components/Header'
import Books from '../Components/Books'

const AdminBooks = () => {
    return (
        <div>
            <div className='h-screen bg'>
                <div className='blurr'>
                    <div className='z-40'>
                        <Header />
                    </div>
                    <div className='flex text-center items-center justify-around h-5/6 mt-5'>
                        <div className='w-5/12 h-full flex flex-col items-center justify-center bg-slate-300 bg-opacity-30 backdrop-blur-md border gap-2 rounded-xl'>
                            <div>
                                <h1 className='text-5xl text-white font-bebas font-bold mb-5'>ADD BOOK DETAILS</h1>
                            </div>
                            <div className='form'>
                                <label className='text-xs text-left font-raleway'>Name:</label>
                                <input type='text' className='py-2 px-6 rounded-lg' />
                            </div>
                            <div className='form'>
                                <label className='text-xs text-left font-raleway'>Category:</label>
                                <select className='py-2 px-6 rounded-lg'>
                                    <option value='' disabled selected hidden>Select Category</option>
                                    <option>Select Category</option>
                                </select>
                            </div>
                            <div className='form'>
                                <label className='text-xs text-left font-raleway'>Author:</label>
                                <input type='text' className='py-2 px-6 rounded-lg' />
                            </div>
                            <div className='form'>
                                <label className='text-xs text-left font-raleway'>Quantity:</label>
                                <input type='text' className='py-2 px-6 rounded-lg' />
                            </div>
                            <div className='form'>
                                <label className='text-xs text-left font-raleway'>Availability:</label>
                                <select className='py-2 px-6 rounded-lg'>
                                    <option value=''>Select Status</option>
                                    <option value='select'>Available</option>
                                    <option value='select'>Not Available</option>
                                </select>
                            </div>
                            <div class='form'>
                                <label class='text-xs text-left font-raleway'>Book Cover:</label>
                                <input type='file' id='fileInput' accept='image/*' />
                            </div>

                            <div className='form mt-5'>
                                <button className='button font-raleway '>Submit</button>
                            </div>
                        </div>
                        <div className='w-5/12 h-full flex items-center justify-center'>
                            <div className='flex flex-col items-center w-screen h-full gap-5'>
                                <ul className='w-full h-full flex flex-col items-center justify-evenly gap-5 overflow-y-auto'>
                                    <Books Number='1' Title='Naruto Shippuden' Author='Masashi Kishimoto' Category='Anime' Status='Available' />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminBooks