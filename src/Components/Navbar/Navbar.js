import React from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <nav className='navbar'>
        <h3 className='logo'>Landkit</h3>
        <ul className="nav-links">
          <Link to='/'>
            <li>Home</li>
          </Link>
          <Link to='/Documentation'>
            <li>Documentation</li>
          </Link>
          <Link to='/Pages'>
            <li>Pages</li>
          </Link>
          <Link to='/Accounts'>
            <li>Accounts</li>
          </Link>
        </ul>
        <button class="button">Button</button>
      </nav>
    </>
  )
}
export default Navbar