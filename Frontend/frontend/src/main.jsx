import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Dashboard from './pages/Dashboard.jsx';
import AddBooks from './pages/AddBooks.jsx';
import ViewBooks from './pages/ViewBooks.jsx';
import AddCategory from './pages/AddCategory.jsx';
import ViewCategory from './pages/ViewCategory.jsx';
import AddUsers from './pages/AddUsers.jsx';
import ViewUsers from './pages/ViewUsers.jsx';
import UserDashboard from './pages/UserDashboard.jsx';
import UserBooks from './pages/UserBooks.jsx';
import UserIssue from './pages/UserIssue.jsx';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/addbooks" element={<AddBooks />} />
      <Route path="/viewbooks" element={<ViewBooks />} />
      <Route path="/addcategory" element={<AddCategory />} />
      <Route path="/viewcategory" element={<ViewCategory />} />
      <Route path="/addusers" element={<AddUsers />} />
      <Route path="/viewusers" element={<ViewUsers />} />
      <Route path="/userdashboard" element={<UserDashboard />} />
      <Route path="/userbooks" element={<UserBooks />} />
      <Route path="/userissue" element={<UserIssue />} />
    </Routes>
  </BrowserRouter>
);
