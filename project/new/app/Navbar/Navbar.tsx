import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand" style={{color:'yellow', fontWeight:'bold'}} href="/">
            YogaMaster
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link className="nav-link active" href="#home">
                HOME
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="#about">
                ABOUT
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="#contact">
                CONTACT
              </Link>
            </li>

          
            <li className="nav-item">
              <Link className="nav-link" href="#classes">
                CLASSES
              </Link>
            </li>




             <li className="nav-item">
              <Link className="nav-link" href="/Login">
                LOGIN
              </Link>
            </li>
          </ul>

        </div>

      </div>
    </nav>
    </div>
  )
}

export default Navbar
