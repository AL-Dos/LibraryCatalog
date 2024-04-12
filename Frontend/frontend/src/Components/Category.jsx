import React from 'react';
import edit from '../Assets/editing.png';
import remove from '../Assets/delete.png';

const Category = () => {
    return (
        <div className='w-full h-full border rounded-xl bg-slate-300 bg-opacity-30 backdrop-blur-md'>
            <table class="table-auto w-full">
                <thead>
                    <tr className='border-b font-bebas underline text-3xl text-white'>
                        <th className='p-5'>#</th>
                        <th>Category</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='border-b font-raleway'>
                        <td className='p-5'>1</td>
                        <td>Anime</td>
                        <td>Active</td>
                        <td>
                            <div className='flex gap-5 justify-center h-10'>
                                <button className='p-3 flex items-center acthover'><img src={remove} className='action' alt='remove' /></button>
                                <button className='p-3 flex items-center acthover'><img src={edit} className='action' alt='edit' /></button>
                            </div>
                        </td>
                    </tr>
                    <tr className='border-b font-raleway'>
                        <td className='p-5'>2</td>
                        <td>Fiction</td>
                        <td>Inactive</td>
                        <td>
                            <div className='flex gap-5 justify-center'>
                                <button className='p-3 flex items-center acthover'><img src={remove} className='action' alt='remove' /></button>
                                <button className='p-3 flex items-center acthover'><img src={edit} className='action' alt='edit' /></button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Category;
