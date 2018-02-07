import React from 'react';
import Header from './Header';
import Middle from './Middle';
import imgs from './data';

function Body() {
  return(
    <div>
      <Header />
      {imgs.map((img, i) =>
        <Middle {...img}
                key={i}/>
      )}
    </div>
  );
}

export default Body;
