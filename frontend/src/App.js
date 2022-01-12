import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { login_handler, signin_handler } from './utilities/handlers';
import Login from './components/login'
import Signup from './components/signup'

const App = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Login setUsername={setUsername} setPassword={setPassword} login_handler={login_handler(username, password)}/>}/>
          <Route path='signup' element={<Signup setUsername={setUsername} setPassword={setPassword} login_handler={signin_handler(username, password)}/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
