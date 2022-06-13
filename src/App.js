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
import { Contacts } from './Contacts';

function App() {

  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   fetch(`${API}/users`)
  //     .then((res) => res.json())
  //     .then((data) => setUsers(data));
  // }, [])

  const navigate = useNavigate();

  return (
    <div className="App">

      <div div className="main" >
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/verifyemail" element={<VerifyEmail />} />
          <Route path="/verifytoken" element={<VerifyToken />} />
          <Route path="/passwordreset" element={<PasswordReset />} />
          <Route path="/signup" />
          <Route path="/home" element={<Home />} />
          <Route path="/leads" element={<Leads />} />
          <Route path="/leads/edit/:id" element={<EditLead />} />
          <Route path="/leads/add_lead_request" element={<AddLead />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/edit/:id" element={<EditService />} />
          <Route path="/services/new_service_request" element={<AddService />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>

      </div >
    </div >
  );
}

export default App;



