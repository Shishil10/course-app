import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
        <div>
            <ul className="nav justify-content-center">
                <li className="nav-item"><NavLink className="nav-link"  to="/">Courses List</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link"  to="/students">Students List</NavLink>

                
                </li>
                
            </ul>

        </div>
    )
}

export default Navbar