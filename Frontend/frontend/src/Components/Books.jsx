import React from 'react';
import edit from '../Assets/editing.png';
import remove from '../Assets/delete.png';

const Books = () => {
    return (
        <div className='flex flex-col items-center w-screen h-full gap-5'>
            <ul className='w-full h-full flex flex-col items-center justify-evenly gap-5 overflow-y-auto'>
                <li className='vcard'>
                    <div className='w-6/12 bcard1' />
                    <div className=' w-4/12 h-full flex flex-col justify-evenly text-left'>
                        <h1 className='num'>#1</h1>
                        <div>
                            <h1 className='font-bebas leading-none text-3xl'>Naruto Shippuden</h1>
                            <h1 className='font-raleway text-xs underline'>Masashi Kishimoto</h1>
                            <h1 className='font-raleway text-xs'>Anime</h1>
                        </div>
                    </div>
                    <div className='w-2/12 h-full flex flex-col justify-between py-2'>
                        <div className='flex flex-col gap-2'>
                            <h1 className='av'>Available</h1>
                        </div>
                        <div className='flex justify-around'>
                            <button><img src={remove} className='action' alt='remove' /></button>
                            <button><img src={edit} className='action' alt='edit' /></button>
                        </div>
                    </div>
                </li>
                <li className='vcard'>
                    <div className='w-6/12'>Background 2</div>
                    <div className=' w-4/12 h-full flex flex-col justify-evenly text-left'>
                        <h1 className='num'>#2</h1>
                        <div>
                            <h1 className='font-bebas leading-none text-3xl'>Book Title 2</h1>
                            <h1 className='font-raleway text-xs underline'>Author 2</h1>
                            <h1 className='font-raleway text-xs'>Category 2</h1>
                        </div>
                    </div>
                    <div className='w-2/12 h-full flex flex-col justify-between py-2'>
                        <h1 className='av'>Status</h1>
                        <div className='flex justify-around'>
                            <button><img src={remove} className='action' alt='remove' /></button>
                            <button><img src={edit} className='action' alt='edit' /></button>
                        </div>
                    </div>
                </li>
                <li className='vcard'>
                    <div className='w-6/12'>Background 3</div>
                    <div className=' w-4/12 h-full flex flex-col justify-evenly text-left'>
                        <h1 className='num'>#3</h1>
                        <div>
                            <h1 className='font-bebas leading-none text-3xl'>Book Title 3</h1>
                            <h1 className='font-raleway text-xs underline'>Author 3</h1>
                            <h1 className='font-raleway text-xs'>Category 3</h1>
                        </div>
                    </div>
                    <div className='w-2/12 h-full flex flex-col justify-between py-2'>
                        <h1 className='av'>Status</h1>
                        <div className='flex justify-around'>
                            <button><img src={remove} className='action' alt='remove' /></button>
                            <button><img src={edit} className='action' alt='edit' /></button>
                        </div>
                    </div>
                </li>
                <li className='vcard'>
                    <div className='w-6/12'>Background 4</div>
                    <div className=' w-4/12 h-full flex flex-col justify-evenly text-left'>
                        <h1 className='num'>#4</h1>
                        <div>
                            <h1 className='font-bebas leading-none text-3xl'>Book Title 4</h1>
                            <h1 className='font-raleway text-xs underline'>Author 4</h1>
                            <h1 className='font-raleway text-xs'>Category 4</h1>
                        </div>
                    </div>
                    <div className='w-2/12 h-full flex flex-col justify-between py-2'>
                        <h1 className='av'>Status</h1>
                        <div className='flex justify-around'>
                            <button><img src={remove} className='action' alt='remove' /></button>
                            <button><img src={edit} className='action' alt='edit' /></button>
                        </div>
                    </div>
                </li>
                <li className='vcard'>
                    <div className='w-6/12'>Background 5</div>
                    <div className=' w-4/12 h-full flex flex-col justify-evenly text-left'>
                        <h1 className='num'>#5</h1>
                        <div>
                            <h1 className='font-bebas leading-none text-3xl'>Book Title 5</h1>
                            <h1 className='font-raleway text-xs underline'>Author 5</h1>
                            <h1 className='font-raleway text-xs'>Category 5</h1>
                        </div>
                    </div>
                    <div className='w-2/12 h-full flex flex-col justify-between py-2'>
                        <h1 className='av'>Status</h1>
                        <div className='flex justify-around'>
                            <button><img src={remove} className='action' alt='remove' /></button>
                            <button><img src={edit} className='action' alt='edit' /></button>
                        </div>
                    </div>
                </li>
                <li className='vcard'>
                    <div className='w-6/12'>Background 6</div>
                    <div className=' w-4/12 h-full flex flex-col justify-evenly text-left'>
                        <h1 className='num'>#6</h1>
                        <div>
                            <h1 className='font-bebas leading-none text-3xl'>Book Title 6</h1>
                            <h1 className='font-raleway text-xs underline'>Author 6</h1>
                            <h1 className='font-raleway text-xs'>Category 6</h1>
                        </div>
                    </div>
                    <div className='w-2/12 h-full flex flex-col justify-between py-2'>
                        <h1 className='av'>Status</h1>
                        <div className='flex justify-around'>
                            <button><img src={remove} className='action' alt='remove' /></button>
                            <button><img src={edit} className='action' alt='edit' /></button>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Books;
