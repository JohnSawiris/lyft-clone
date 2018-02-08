import React from 'react';
import { Link } from 'react-router-dom';
import lyftLogo from '../assets/imgs/logo.png';

function NavBar() {
  const routerLinks = {
    display: 'inline-block',
    padding:  '1rem',
    textAlign: 'center',
    textDecoration: 'none',
    fontSize: '19px',
    color: '#fff',
    flex: '1',
    alignSelf: 'center',
    transition: 'all .4s ease-in'
  };
  return(
    <nav className="navContainer">
      <style global jsx>{`
          .navContainer {
            display: flex;
            position: sticky;
            top: 0;
            background-color: rgba(0, 0, 0, 0.5);
            justify-content: space-between;
          }
          .logo {
            width: 60px;
            margin: 1rem 2rem;
          }
          .links {
            width: 600px;
            display:flex;
            justify-content: space-between;
            margin-right: 8rem;
            padding: .4rem;
          }
          .links a:hover {
            background-color: rgba(255,255,255,0.2);
          }
          .logIn {
            display: inline-block;
            text-align: center;
            padding: 1rem 2.5rem;
            font-size: 1rem;
            margin-left: 1rem;
            background-color: transparent;
            border: 1px solid #fff;
            border-radius: 5px;
            color: #fff;
            align-self: center;
            transition: all .4s ease-in;
          }
          .logIn:hover {
            background-color: rgba(255,255,255,0.2);
            border-color: rgba(255,255,255,0.6);
          }
      `}</style>
      <Link to="/"><img className="logo" src={lyftLogo} /></Link>
      <div className="links">
        <Link style={routerLinks} to="">Drive</Link>
        <Link style={routerLinks} to="#">Explore</Link>
        <Link style={routerLinks} to="#">Help</Link>
        <button className="logIn">Log In</button>
      </div>
    </nav>
  );
}

export default NavBar;
