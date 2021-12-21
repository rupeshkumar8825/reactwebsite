// in this we will write the code for the navbar for the learning purpose 
import React from 'react';
import { Link } from 'react-router-dom';

// we have to write the function for the navbar 
function Navbar() {
    console.log("right now at the navbar component");

    return (
        <>
            {/* adding the bootstrap code for this  */}
            <div className='container-fluid nav_bg'></div>
            <div className='row'>
                <div className="col-10 mx-auto">

                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to="/">RupeshKumar</Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/services">Services</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/about">About</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/contact">Contact</Link>
                                    </li>


                                </ul>

                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}


// now we have to export this to be used at other places 
export default Navbar;
