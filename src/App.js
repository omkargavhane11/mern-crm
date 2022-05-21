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
    },
    {
      id: 2,
      fname: "fn2",
      lname: "ln2",
      email: "email2",
      password: "password2",
      username: "username2",
      address: "address2",
    },
    {
      id: 3,
      fname: "fn3",
      lname: "ln3",
      email: "email3",
      password: "password3",
      username: "username3",
      address: "address3",
    },
  ]);

  const [users, setUsers] = [
    {
      fname: "omkar",
      lname: "gavhane",
      email: "ogomkargavhane@gmail.com",
      password: "let@123",
      username: "omkar123",
      contact: 9191919191
    }
  ]

  const navigate = useNavigate();
  return (
    <div className="App">
      <div className="navbar">
        <img src="" alt="loading" />
        {/* <h5 className="navbar_link" onClick={() => navigate('/')}>Company</h5> */}
        <h5 className="navbar_link home_navlink" onClick={() => navigate('/home')}>Home</h5>
        <h5 className="navbar_link" onClick={() => navigate('/leads')}>Leads</h5>
        <h5 className="navbar_link" onClick={() => navigate('/services')}>Services</h5>
        <h5 className="navbar_link" onClick={() => navigate('/contacts')}>Contacts</h5>
      </div>
      <Routes>
        <Route path="/" element={<SignIn users={users} setUsers={setUsers} />} />
        <Route path="/signup" element={<Signup users={users} setUsers={setUsers} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/leads" element={<Leads lead_data={lead_data} setlead_data={setlead_data} />} />
        <Route path="/leads/add_lead_request" element={<AddLead lead_data={lead_data} setlead_data={setlead_data} />} />
        <Route path="/services" element={<Services service_data={service_data} setservice_data={setservice_data} />} />
        <Route path="/services/new_service_request" element={<AddService service_data={service_data} setservice_data={setservice_data} />} />
      </Routes>
    </div>
  );
}

export default App;


