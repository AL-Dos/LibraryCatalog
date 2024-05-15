import React from 'react';
import edit from '../Assets/editing.png';
import remove from '../Assets/delete.png';

const Users = ({ users }) => {
    return (
        <div className='flex flex-col items-center w-screen h-full gap-5'>
            <ul className='w-full h-full flex flex-col items-center justify-evenly gap-5 overflow-y-auto'>
                {users.map((user, index) => (
                    <li key={user.id} className='vcard'>
                        {/* Display user information */}
                        <div className='w-4/12 h-full flex flex-col justify-evenly text-left'>
                            <h1 className='num'>#{index + 1}</h1>
                            <div>
                                <h1 className='font-bebas text-3xl'>{user.name}</h1>
                                <h1 className='font-raleway text-xs underline'>{user.email}</h1>
                                <h1 className='font-raleway text-xs'>{user.role}</h1>
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
                ))}
            </ul>
        </div>
    )
}

export default Users;