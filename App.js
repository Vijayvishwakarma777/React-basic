import React from 'react';
import { BrowserRouter, Route,Routes} from "react-router-dom";
import './App.css';
function App () { 
  return (
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<div>Home Page</div>} />
     <Route path="/about" element={<div>About Page</div>} />
     <Route path="/Contact" element={<div>Contact Page</div>} />
        
      
      </Routes> 

    </BrowserRouter>
      
  );
} 

export default App;
