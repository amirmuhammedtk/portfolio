import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Corrected import
import Home from './Home';
import About from './About';
import Qualification from './Qualification';
import Skills from './Skills';
import Contact from './Contact';
import Navb from './NavBar';
import App from './App';
import Project from './Project';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route path='/Home' element={<Home/>}></Route>
          <Route path='/About' element={<About/>}></Route>
          <Route path='/Qualification' element={<Qualification/>}></Route>
          <Route path='/Skills' element={<Skills/>}></Route>
          <Route path='/Contact' element={<Contact/>}></Route>
          <Route path='/Project' element={<Project/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
