import React from 'react'
import Header from '../Components/Header'
import User from '../Components/User'

const AdminUsers = () => {
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
                                <h1 className='text-5xl text-white font-bebas font-bold mb-5'>ADD USER DETAILS</h1>
                            </div>
                            <div className='form'>
                                <label className='text-xs text-left font-raleway'>Username:</label>
                                <input type='text' className='py-2 px-6 rounded-lg' />
                            </div>
                            <div className='form'>
                                <label className='text-xs text-left font-raleway'>EmailID:</label>
                                <input type='text' className='py-2 px-6 rounded-lg' />
                            </div>
                            <div className='form'>
                                <label className='text-xs text-left font-raleway'>Password:</label>
                                <input type='password' className='py-2 px-6 rounded-lg' />
                            </div>
                            <div className='form'>
                                <label className='text-xs text-left font-raleway'>Role:</label>
                                <select className='py-2 px-6 rounded-lg'>
                                    <option value='' disabled selected hidden>Select Role</option>
                                    <option>Select Role</option>
                                    <option>Admin</option>
                                    <option>User/Student</option>
                                </select>
                            </div>
                            <div className='form'>
                                <label className='text-xs text-left font-raleway'>Status:</label>
                                <select className='py-2 px-6 rounded-lg'>
                                    <option value=''>Select Status</option>
                                    <option value='select'>Active</option>
                                    <option value='select'>Inactive</option>
                                </select>
                            </div>
                            <div class='form'>
                                <label class='text-xs text-left font-raleway'>Profile Photo:</label>
                                <input type='file' id='fileInput' accept='image/*'/>
                            </div>

                            <div className='form mt-5'>
                                <button className='button font-raleway '>Submit</button>
                            </div>
                        </div>
                        <div className='w-5/12 h-full flex items-center justify-center'>
                            <User />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminUsers