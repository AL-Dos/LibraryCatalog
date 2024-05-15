import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import User from '../Components/User';

const AdminsList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const token = localStorage.getItem('jwt'); // Get JWT token from localStorage
            const response = await fetch('http://localhost:8000/api/users/', {
                headers: {
                    'Authorization': `Bearer ${token}` // Include JWT token in the request headers
                }
            });
            if (response.ok) {
                const data = await response.json();
                setUsers(data);
            } else {
                console.error('Failed to fetch users');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <Header />
            <div className='container'>
                <h1>User List</h1>
                <User users={users} /> {/* Pass users data to the Users component */}
            </div>
        </div>
    );
};

export default AdminsList;