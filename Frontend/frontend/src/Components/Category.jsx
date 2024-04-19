import React from 'react';
import edit from '../Assets/editing.png';
import remove from '../Assets/delete.png';

const Category = ({Number, Category, Status}) => {
    return (
        <>
            <tr className='border-b font-raleway'>
                <td className='p-5'>{Number}</td>
                <td>{Category}</td>
                <td>{Status}</td>
                <td>
                    <div className='flex gap-5 justify-center h-10'>
                        <button className='p-3 flex items-center acthover'><img src={remove} className='action' alt='remove' /></button>
                        <button className='p-3 flex items-center acthover'><img src={edit} className='action' alt='edit' /></button>
                    </div>
                </td>
            </tr>
        </>
    )
}

export default Category;
