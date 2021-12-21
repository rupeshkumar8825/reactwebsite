// in this we will combine our all the components and then we will export it to the index.js 
import React from 'react';
// import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes,

} from "react-router-dom";
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Home from "./Home";
import Navbar from './Navbar';
// we also have to import the bootstrap to use this 
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// we also have to add the bootstrap javascript to use this 
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";


function App() {
  console.log("right now in the app component");

  // say everything went fine 
  return (
    <>
      {/* adding the navbar  */}
      <Router>
        {/* <Navbar></Navbar> */}
        {/* we have to create the routing here  */}
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/services" element={<Services></Services>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
        </Routes>
      </Router>
    </>
  )
}

// now we also have to export this to the index.js 
export default App;