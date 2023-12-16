import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import Content from './components/Content'
import Logout from './components/Logout';
import Dashboard from './components/routes/Dashboard';
import Notification from './components/routes/Notification';
import Profile from './components/routes/Profile';
import Settings from './components/routes/Settings';
import User from './components/routes/User';

export default function Routers() {
  return (
    <div>
    <Router>
      <Routes>
         <Route path="/" element={<Login />} />
         <Route path="/signup" element={<Signup />} />  
          <Route path="content" element={<Content/>}>
           <Route index element={<Dashboard />}/>
           <Route path="dashboard" element={<Dashboard />}/>
           <Route path="notification" element={< Notification/>}/>
           <Route path="profile" element={<Profile/>}/>
           <Route path="settings" element={<Settings/>}/>
          <Route path="user" element={<User />}/>
         </Route>
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
    </div>
  )
}
