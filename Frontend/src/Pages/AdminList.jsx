import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import edit from '../Assets/editing.png';
import remove from '../Assets/delete.png';
import Header from '../Components/Header'

const UserList = () => {
    const [users, setUsers] = useState([]);
    const token = localStorage.getItem('jwt'); // Retrieve JWT token from local storage
    const userId = token ? jwt_decode(token).id : null; // Decode token to get userId

    useEffect(() => {
        fetchUsers();
    }, [userId]); // Fetch users whenever userId changes

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/users/', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const deleteUser = async (userId) => {
        try {
            await axios.delete(`http://localhost:8000/api/users/${userId}/`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            // After successful deletion, fetch updated list of users
            fetchUsers();
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    return (
        <div>
            <div className='bg-local md:bg-fixed'>
            <div className='blurr'>
            <div className='z-40'>
                <Header />
            </div>        
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
                            </div>
                        </div>
                        <div className='w-2/12 h-full flex flex-col justify-between py-2'>
                            <h1 className='av'>Active</h1>
                            <div className='flex justify-around'>
                                <button onClick={() => deleteUser(user.id)}><img src={remove} className='action' alt='remove' /></button>
                                <button><img src={edit} className='action' alt='edit' /></button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
            </div>
            
        </div>
        </div>
    )
}

export default UserList;