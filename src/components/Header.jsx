import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
         <header className="navbar">
  <img className="logo" src="src/assets/images/logo.svg" alt="Entri news logo" />
  <nav className="links">
    <ul>
      <li className="link">
        <Link to="/">Home</Link>
      </li>
      <li className="link">
        <Link to="#">New</Link>
      </li>
      <li className="link">
        <Link to="#">Popular</Link>
      </li>
      <li className="link">
        <Link to="/trending">Trending</Link>
      </li>
      <li className="link">
        <Link to="#">Categories</Link>
      </li>
    </ul>
  </nav>
</header>
    </div>
  )
}

export default Header
