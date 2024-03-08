import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
        <div id="nav">
            <Link to="/add-restraunt"><p>Add restaurant</p></Link>
            <Link to="/login"><p>Log in</p></Link>
            <Link to="/sign-up"><p>Sign up</p></Link>
        </div>
  )
}

export default Navbar