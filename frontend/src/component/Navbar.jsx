import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import Login from './Login'

function Navbar() {
    return (
        <div>
            <ul>
                <NavLink className="navbar" to="/about" >About us</NavLink>
                <NavLink className="navbar" to="/login">Login</NavLink>
                <NavLink className="navbar" to="/signup">Signup</NavLink>
            </ul>
        </div>
    )
}

export default Navbar
