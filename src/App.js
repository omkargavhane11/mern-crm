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

  const [lead_data, setlead_data] = useState([
    {
      id: 1,
      fname: "fn1",
      lname: "ln1",
      email: "email1",
      password: "password1",
      username: "username1",
      address: "address1",
      contactNo: 9012345678,
      intrest: "something",
      status: "new"
    },
    {
      id: 2,
      fname: "fn2",
      lname: "ln2",
      email: "email2",
      password: "password2",
      username: "username2",
      address: "address2",
      contactNo: 9012345678,
      intrest: "something",
      status: "new"
    },
    {
      id: 3,
      fname: "fn3",
      lname: "ln3",
      email: "email3",
      password: "password3",
      username: "username3",
      address: "address3",
      contactNo: 9012345678,
      intrest: "something",
      status: "new"
    },
  ]);

  const [service_data, setservice_data] = useState([
    {
      id: 1,
      fname: "fn1",
      lname: "ln1",
      email: "email1",
      password: "password1",
      username: "username1",
      address: "address1",
      contactNo: 9191919191,
      intrest: "something",
      status: "new"
    },
    {
      id: 2,
      fname: "fn2",
      lname: "ln2",
      email: "email2",
      password: "password2",
      username: "username2",
      address: "address2",
      contactNo: 9191919191,
      intrest: "something",
      status: "new"
    },
    {
      id: 3,
      fname: "fn3",
      lname: "ln3",
      email: "email3",
      password: "password3",
      username: "username3",
      address: "address3",
      contactNo: 9191919191,
      intrest: "something",
      status: "new"
    },
  ]);

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
          <Route path="/" element={<SignIn users={users} setUsers={setUsers} lead_data={lead_data} />} />
          <Route path="/signup" element={<Signup users={users} setUsers={setUsers} />} />
          <Route path="/home" element={<Home lead_data={lead_data} service_data={service_data} />} />
          <Route path="/leads" element={<Leads lead_data={lead_data} setlead_data={setlead_data} />} />
          <Route path="/leads/edit/:id" element={<EditLead lead_data={lead_data} setlead_data={setlead_data} />} />
          <Route path="/leads/add_lead_request" element={<AddLead lead_data={lead_data} setlead_data={setlead_data} />} />
          <Route path="/services" element={<Services service_data={service_data} setservice_data={setservice_data} />} />
          <Route path="/services/edit/:id" element={<EditService service_data={service_data} setservice_data={setservice_data} />} />
          <Route path="/services/new_service_request" element={<AddService service_data={service_data} setservice_data={setservice_data} />} />
        </Routes>

      </div >
    </div >
  );
}

export default App;



