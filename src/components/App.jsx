import React from 'react';
import NavBar from './NavBar';
import Body from './Body';
import FindLyftNYourCity from './FindLyftNYourCity';
import { Switch, Route } from 'react-router-dom';

function App() {
  return(
    <div>
      <style global jsx>{`
          img {
            vertical-align: bottom;
          }
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
      <Switch>
        <Route exact path='/' component={Body} />
        <Route path='/middle' component={FindLyftNYourCity} />
      </Switch>
    </div>
  );
}

export default App;
