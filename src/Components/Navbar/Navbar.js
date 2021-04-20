import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
    return (
      <div className="d-flex justify-content-center">
        <div className="w-75 row">
         <div className="col-md-6 mt-2">
           <h2>House Cleanning</h2>
           </div>
         <div className="col-md-6">
         <nav className="navbar">
          <ul className ="navItem">
            <li>
              <Link className="link" to="/home">Home</Link>
            </li>
            <li>
              <Link className="link" to="/about">About</Link>
            </li>
            <li>
              <Link className="link" to="/dashbord">Dashbord</Link>
            </li>
            <li>
              <Link className="link" to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link className="link" to="/login">login</Link>
            </li>
          </ul>
        </nav>
         </div>
            
        </div>
        </div>
    );
};

export default Navbar;