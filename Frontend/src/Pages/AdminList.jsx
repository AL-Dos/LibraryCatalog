import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import edit from '../Assets/editing.png';
import remove from '../Assets/delete.png';
import Header from '../Components/Header';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [violations, setViolations] = useState({});
    const token = localStorage.getItem('jwt');
    const userId = token ? jwtDecode(token).id : null;

    useEffect(() => {
        if (userId) {
            fetchUsers();
        }
    }, [userId]);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/users/', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setUsers(response.data);
            const initialViolations = {};
            response.data.forEach(user => {
                initialViolations[user.id] = user.violation_type || ''; // Default to empty if no violation
            });
            setViolations(initialViolations);
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
            fetchUsers(); // Refresh user list after deletion
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    const markViolation = async (userId) => {
        try {
            const violation_type = violations[userId];
            await axios.post(`http://localhost:8000/api/users/${userId}/violation/`, {
                violation_type
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            fetchUsers(); // Refresh user list after marking violation
        } catch (error) {
            console.error('Error marking violation:', error);
        }
    };

    const handleViolationChange = (userId, value) => {
        setViolations({
            ...violations,
            [userId]: value
        });
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
                                    <div className='w-4/12 h-full flex flex-col justify-evenly text-left'>
                                        <h1 className='num'>#{index + 1}</h1>
                                        <div>
                                            <h1 className='font-bebas text-3xl'>{user.name}</h1>
                                            <h1 className='font-raleway text-xs underline'>{user.email}</h1>
                                        </div>
                                    </div>
                                    <div className='w-2/12 h-full flex flex-col justify-between py-2'>
                                        <select
                                            className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-cyan-400"
                                            value={violations[user.id] || ''}
                                            onChange={(e) => handleViolationChange(user.id, e.target.value)}
                                        >
                                            <option value=''>None</option>
                                            <option value='theft'>Theft</option>
                                            <option value='overdue'>Overdue</option>
                                            <option value='damaged'>Damaged</option>
                                            <option value='others'>Others</option>
                                        </select>
                                        <div className='flex justify-around mt-4'>
                                            <button onClick={() => deleteUser(user.id)}>
                                                <img src={remove} className='action' alt='remove' />
                                            </button>
                                            <button onClick={() => markViolation(user.id)}>
                                                <img src={edit} className='action' alt='edit' />
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserList;