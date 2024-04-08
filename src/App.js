import './App.css';
import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from '../src/pages/Home';
import Details from '../src/pages/Details';

function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/place/:placeName" element={<Details />} />
            </Routes>
        </BrowserRouter>  
    </>
  );
}

export default App;
