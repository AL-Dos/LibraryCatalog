import React from 'react';
import edit from '../Assets/editing.png';
import remove from '../Assets/delete.png';

const User = () => {
    return (
        <div className='flex flex-col items-center w-screen h-full gap-5'>
            <ul className='w-full h-full flex flex-col items-center justify-evenly gap-5 overflow-y-auto'>
                <li className='vcard'>
                    <div className='w-6/12 ucard1' />
                    <div className=' w-4/12 h-full flex flex-col justify-evenly text-left'>
                        <h1 className='num'>#1</h1>
                        <div>
                            <h1 className='font-bebas text-3xl'>Nicklaus Ling</h1>
                            <h1 className='font-raleway text-xs underline'>mnsling@addu.edu.ph</h1>
                            <h1 className='font-raleway text-xs'>Student</h1>
                        </div>
                    </div>
                    <div className='w-2/12 h-full flex flex-col justify-between p-2'>
                        <h1 className='av'>Active</h1>
                        <div className='flex justify-around'>
                            <button><img src={remove} className='action' alt='remove' /></button>
                            <button><img src={edit} className='action' alt='edit' /></button>
                        </div>
                    </div>
                </li>
                <li className='vcard'>
                    <div className='w-6/12'>Photo 2</div>
                    <div className=' w-4/12 h-full flex flex-col justify-evenly text-left'>
                        <h1 className='num'>#2</h1>
                        <div>
                            <h1 className='font-bebas text-3xl'>Name 2</h1>
                            <h1 className='font-raleway text-xs underline'>Email 2</h1>
                            <h1 className='font-raleway text-xs'>Role 2</h1>
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
                    <div className='w-6/12'>Photo 3</div>
                    <div className=' w-4/12 h-full flex flex-col justify-evenly text-left'>
                        <h1 className='num'>#3</h1>
                        <div>
                            <h1 className='font-bebas text-3xl'>Name 3</h1>
                            <h1 className='font-raleway text-xs underline'>Email 3</h1>
                            <h1 className='font-raleway text-xs'>Role 3</h1>
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
                    <div className='w-6/12'>Photo 4</div>
                    <div className=' w-4/12 h-full flex flex-col justify-evenly text-left'>
                        <h1 className='num'>#4</h1>
                        <div>
                            <h1 className='font-bebas text-3xl'>Name 4</h1>
                            <h1 className='font-raleway text-xs underline'>Email 4</h1>
                            <h1 className='font-raleway text-xs'>Role 4</h1>
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
                    <div className='w-6/12'>Photo 5</div>
                    <div className=' w-4/12 h-full flex flex-col justify-evenly text-left'>
                        <h1 className='num'>#5</h1>
                        <div>
                            <h1 className='font-bebas text-3xl'>Name 5</h1>
                            <h1 className='font-raleway text-xs underline'>Email 5</h1>
                            <h1 className='font-raleway text-xs'>Role 5</h1>
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
                    <div className='w-6/12'>Photo 6</div>
                    <div className=' w-4/12 h-full flex flex-col justify-evenly text-left'>
                        <h1 className='num'>#6</h1>
                        <div>
                            <h1 className='font-bebas text-3xl'>Name 6</h1>
                            <h1 className='font-raleway text-xs underline'>Email 6</h1>
                            <h1 className='font-raleway text-xs'>Role 6</h1>
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

export default User;
