import React from 'react';
import edit from '../Assets/editing.png';
import remove from '../Assets/delete.png';

const Category = ({Number, Category, Status, rmFunc, edFunc}) => {
    return (
        <>
            <tr className='border-b font-raleway'>
                <td className='p-5'>{Number}</td>
                <td>{Category}</td>
                <td>{Status}</td>
                <td>
                    <div className='flex gap-5 justify-center h-10'>
                        <button className='p-3 flex items-center acthover'><img src={remove} className='action' alt='remove' onClick={rmFunc}/></button>
                        <button className='p-3 flex items-center acthover'><img src={edit} className='action' alt='edit' onClick={edFunc} /></button>
                    </div>
                </td>
            </tr>
        </>
    )
}

export default Category;