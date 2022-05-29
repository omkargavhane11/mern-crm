import { Navigate } from 'react-router-dom';
import './App.css';
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
          <Route path="/signup" element={<Signup users={users} setUsers={setUsers} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/leads" element={<Leads />} />
          <Route path="/leads/edit/:id" element={<EditLead />} />
          <Route path="/leads/add_lead_request" element={<AddLead />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/edit/:id" element={<EditService />} />
          <Route path="/services/new_service_request" element={<AddService />} />
        </Routes>

      </div >
    </div >
  );
}

export default App;



