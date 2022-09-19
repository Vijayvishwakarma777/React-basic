import React from 'react';
import { BrowserRouter, Route,Routes} from "react-router-dom";
import './App.css';
function App () { 
  return (
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<div>Home Page</div>} /> for home page 
     <Route path="/about" element={<div>About Page</div>} /> for About page 
     <Route path="/Contact" element={<div>Contact Page</div>} /> For Contact Page
        
      
      </Routes> 

    </BrowserRouter>
      
  );
} 

export default App;
