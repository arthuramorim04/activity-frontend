import React from 'react'
import { Router ,Route, Routes } from 'react-router-dom';
import Home from './pages/home/home'
import SingIn from './pages/singin/singin'
import Register from './pages/singup/register'

require('./assets/app.css')

function App() {
  return (
    <Home/>
  );
}

export default App;
