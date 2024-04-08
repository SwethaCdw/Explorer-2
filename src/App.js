import './App.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from '../src/pages/Home';
import Details from '../src/pages/Details';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/place/:placeName" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer /> 
    </Router>
  );
}

export default App;
