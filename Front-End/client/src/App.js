import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from "./Pages/Dashboard/Dashboard";
import 'bootstrap/dist/css/bootstrap.min.css';
// import CreateMemes from "./Pages/CreateMemes/CreateMemes";
// import ReadMemes from "./Pages/ReadMemes/ReadMemes"
// import EditDashboard from "./Pages/EditDashboard/EditDashboard";
// import Memespage from "./Pages/Memespage/Memespage";
// import GetOneMeme from "./Pages/getoneMeme/getoneMeme";
// import Registration from "./Pages/Registration/Registration"
// import Login from "./Pages/Login/Login";
// import Home from "./Pages/Home/Home";
import ReadProduct from "./Pages/ReadProduct/ReadProduct"
import EditProduct from "./Pages/EditProducts/EditProducts"
import CreateProduct from "./Pages/CreateProduct/CreateProduct"
import Registration from "./Pages/Registration/Registration"
import Login from "./Pages/login/login"

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="read/:id" element={< ReadProduct/>}/>
        <Route path="edit/:id" element={<EditProduct/>}/>
        <Route path="/create" element={<CreateProduct/>}/>
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        
      </Routes>
    </BrowserRouter>  
    </div>
  );
}

export default App;
