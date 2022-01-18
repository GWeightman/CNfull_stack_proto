import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/login'
import Signup from './components/signup'
import Home from './components/home';
import Contact from './components/contact';
import Admin from './components/admin'
import Devpage from './components/devpage';
import Notauth from './components/notauth';

const App = () => {
  const [username, setUsername] = useState();
  const [fname, setFname] = useState();
  const [sname, setSname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [status, setStatus] = useState();

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='login' element={<Login setUsername={setUsername} setPassword={setPassword}/>}/>
          <Route path='signup' element={<Signup username={username} setUsername={setUsername} password={password} setPassword={setPassword} fname={fname} setFname={setFname} sname={sname} setSname={setSname} email={email} setEmail={setEmail}/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='admin' element={<Admin/>}/>
          <Route path='devpage' element={<Devpage/>}/>
          <Route path='notauth' element={<Notauth/>}/> 
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
