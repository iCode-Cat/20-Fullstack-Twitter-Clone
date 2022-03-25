import './App.css';
import * as React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Auth from './Pages/Auth';
import axios from 'axios';
import { useEffect } from 'react';

function App() {
  const test = async () => {
    const req = await axios.get('http://localhost:3333/api/auth/is_auth', {
      withCredentials: true,
    });
    console.log(req);
  };

  useEffect(() => {
    test();
  }, []);

  return (
    <div>
      <Routes>
        <Route path='/auth' element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
