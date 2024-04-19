import React from 'react';
import edit from '../Assets/editing.png';
import remove from '../Assets/delete.png';
import photo from '../Assets/naruto.jpg';

const Books = ({Number, Title, Author, Category, Status, rmFunc, edFunc}) => {
    return (
        <>
            <li className='vcard overflow-hidden'>
                <div className='w-6/12 bcard'>
                    <img src={photo}/>
                </div>
                <div className=' w-4/12 h-full flex flex-col justify-evenly text-left'>
                    <h1 className='num'>{Number}</h1>
                    <div>
                        <h1 className='font-bebas leading-none text-3xl'>{Title}</h1>
                        <h1 className='font-raleway text-xs underline'>{Author}</h1>
                        <h1 className='font-raleway text-xs'>{Category}</h1>
                    </div>
                </div>
                <div className='w-2/12 h-full flex flex-col justify-between py-2'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='av'>{Status}</h1>
                    </div>
                    <div className='flex justify-around'>
                        <button><img src={remove} className='action' alt='remove' onClick={rmFunc} /></button>
                        <button><img src={edit} className='action' alt='edit' onClick={edFunc} /></button>
                    </div>
                </div>
            </li>
        </>
    )
}

export default Books;