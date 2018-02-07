import React from 'react';
import lyftLogo from '../assets/imgs/logo.png';

function NavBar() {
  return(
    <nav className="navContainer">
      <style jsx>{`
          .navContainer {
            display: flex;
            margin-top: 1rem;
            justify-content: space-between;
          }
          .logo {
            width: 60px;
            margin: 2rem 3rem;
          }
          .links {
            width: 600px;
            display:flex;
            justify-content: space-between;
            margin-right: 8rem;
            padding: .4rem;
          }
          .links a {
            display: inline-block;
            padding: 1rem;
            text-align: center;
            text-decoration: none;
            font-size: 19px;
            color: #fff;
            flex: 1;
            align-self: center;
            transition: all .4s ease-in;
          }
          .links a:hover {
            background-color: rgba(255,255,255,0.2);
          }
          .logIn {
            display: inline-block;
            text-align: center;
            padding: 1rem 2.5rem;
            font-size: 1rem;
            background-color: transparent;
            border: 1px solid #fff;
            border-radius: 5px;
            color: #fff;
            align-self: center;
            transition: all .4s ease-in;
          }
          .logIn:hover {
            background-color: rgba(255,255,255,0.2);
          }
      `}</style>
    <a href="#"><img className="logo" src={lyftLogo} /></a>
      <div className="links">
        <a href="#">Drive</a>
        <a href="#">Explore</a>
        <a href="#">Help</a>
        <button className="logIn">Log In</button>
      </div>
    </nav>
  );
}

export default NavBar;
