import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        
        <div className="row">
            <div className="col-md-2">
            <nav>
          <ul>
            <li>
              <Link className="link" to="/addServices">Add Service</Link>
            </li>
            <li>
              <Link className="link" to="/list">Service List</Link>
            </li>
            <li>
              <Link className="link" to="/reviewUs">Review Us</Link>
            </li>
          </ul>
        </nav>
            </div>
        </div>
    );
};

export default Sidebar;