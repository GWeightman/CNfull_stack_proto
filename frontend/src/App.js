import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { login_fetch } from './utilities/handlers'
import Login from './components/login'
import Signup from './components/signup'

const App = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const login_handler = async (e) => {
    e.preventDefault();
    const ret_val = await login_fetch(username)
    if (ret_val.usr.username == username && ret_val.user.password == password) {
      console.log(ret_val);
    }
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Login setUsername={setUsername} setPassword={setPassword} login_handler={login_handler}/>}/>
          <Route path='signup' element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
