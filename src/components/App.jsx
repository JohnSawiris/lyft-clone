import React from 'react';
import NavBar from './NavBar';
import Body from './Body';

function App() {
  return(
    <div>
      <style global jsx>{`
          body {
            margin: 0;
            padding: 0;
            font-family: 'Montserrat', sans-serif;
            background: #ad5389;
            background: -webkit-linear-gradient(to bottom, #3c1053, #ad5389, #3c1053);
            background: linear-gradient(to bottom, #201538, #ad5389, #3c1053);
            background-repeat: no-repeat;
            min-height: 100vh;
            color: #fff;
          }
      `}</style>
      <NavBar />
      <Body />
    </div>
  );
}

export default App;
