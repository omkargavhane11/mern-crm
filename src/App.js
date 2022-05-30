import './App.css';
import React from 'react';
import { NavLink, Route, Routes, useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { Signup } from './Signup';
import { Leads } from './Leads';
import { Services } from './Services';
import { AddLead } from './AddLead';
import { AddService } from './AddService';
import { Home } from './Home';
import { SignIn } from './SignIn';
import { EditLead } from './EditLead';
import { EditService } from './EditService';
import { API } from "./global.js";
import { VerifyEmail } from './VerifyEmail';
import { VerifyToken } from './VerifyToken';
import { PasswordReset } from './PasswordReset';

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${API}/users`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [])

  const navigate = useNavigate();

  return (
    <div className="App">
      <div className="navbar">
        <img src="" alt="loading" />
        <h5 className="navbar_link" onClick={() => navigate('/')}>Company</h5>
        <h5 className="navbar_link home_navlink" onClick={() => navigate('/home')}>Home</h5>
        <h5 className="navbar_link" onClick={() => navigate('/leads')}>Leads</h5>
        <h5 className="navbar_link" onClick={() => navigate('/services')}>Services</h5>
        <h5 className="navbar_link" onClick={() => navigate('/contacts')}>Contacts</h5>
        <h5 className="navbar_link logout" onClick={() => navigate('/')}>Log Out</h5>
      </div>
      <div div className="main" >
        <Routes>
          <Route path="/" element={<SignIn users={users} setUsers={setUsers} />} />
          <Route path="/verifyemail" element={<VerifyEmail />} />
          <Route path="/verifytoken" element={<VerifyToken />} />
          <Route path="/passwordreset" element={<PasswordReset />} />
          <Route path="/signup" element={<Signup users={users} setUsers={setUsers} />} />
          <Route path="/:username/home" element={<Home />} />
          <Route path="/:username/leads" element={<Leads />} />
          <Route path="/:username/leads/edit/:id" element={<EditLead />} />
          <Route path="/:username/leads/add_lead_request" element={<AddLead />} />
          <Route path="/:username/services" element={<Services />} />
          <Route path="/:username/services/edit/:id" element={<EditService />} />
          <Route path="/:username/services/new_service_request" element={<AddService />} />
        </Routes>

      </div >
    </div >
  );
}

export default App;



