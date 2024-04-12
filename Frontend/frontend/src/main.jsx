import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login'
import AdminDashboard from './Pages/AdminDashboard'
import AdminBooks from './Pages/AdminBooks';
import AdminCategory from './Pages/AdminCategory';
import AdminUsers from './Pages/AdminUsers';
import AdminIssueB from './Pages/AdminIssueB';
import  UserDashboard from './Pages/UserDashboard';
import UserBag from './Pages/UserBag';
import UserTime from './Pages/UserTime';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/admindashboard" element={<AdminDashboard />} />
      <Route path="/adminbooks" element={<AdminBooks />} />
      <Route path="/admincategory" element={<AdminCategory />} />
      <Route path="/adminusers" element={<AdminUsers />} />
      <Route path="/adminissuebooks" element={<AdminIssueB />} />
      <Route path="/userdashboard" element={<UserDashboard />} />
      <Route path="/userbag" element={<UserBag />} />
      <Route path="/usertime" element={<UserTime />} />
    </Routes>
  </BrowserRouter>
);