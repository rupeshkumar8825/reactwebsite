// now in this we will collect all the components of the website and then we export this 
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import About from './About';
import Home from './Home';
import Services from './Services';
import Contact from "./Contact";

// defining the function for this purpose 
function App() {
  console.log("this is the app component");

  // say everything went fine 
  return (
    <>
      {/* here we have to create the route for the website  */}
      <Router>
        {/* <Routes> */}
        {/* <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/contact" component={Contact} /> */}
        <Routes>
          <Route path="/about" element={<About></About>} />
          <Route path="/" element={<Home></Home>} />
          <Route path="/services" element={<Services></Services>} />
          <Route path="/contact" element={<Contact></Contact>} />
        </Routes>
        {/* </Routes> */}
      </Router>
    </>
  );
}

// now we have to export this so that other files can also use this 
export default App;
