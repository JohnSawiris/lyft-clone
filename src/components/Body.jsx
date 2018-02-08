import React from 'react';
import Header from './Header';
import Middle from './Middle';
import ProductsAndNews from './ProductsAndNews';
import FindLyftNYourCity from './FindLyftNYourCity';

import imgs from './data';
import products from './products';

function Body() {
  return(
    <div>
      <style jsx>{`
          .bgWhite {
            width: 100%;
            background-color: #fff;
          }
        .sectionContainer {
          display: flex;
          justify-content: space-between;
          width: 90%;
          padding-top: 1rem;
          margin: 0 auto;
        }
      `}</style>
      <Header />
      {imgs.map((img, i) =>
        <Middle {...img}
                key={i}/>
      )}
      <div className="bgWhite">
        <div className="sectionContainer">
          {products.map((product, i) =>
            <ProductsAndNews {...product}
                              key={i}/>
          )}
        </div>
      </div>
      <FindLyftNYourCity />
    </div>
  );
}

export default Body;
