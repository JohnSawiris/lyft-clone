import React from 'react';

function ProductsAndNews(props) {
  return(
    <div className="section">
      <style jsx>{`
        .section {
          padding: 2rem;
          background-color: #fff;
          color: #000;
          text-align: justify;
        }
        .learnMore {
          padding: 1rem 1.5rem;
          border: 1px solid #000;
          border-radius: 8px;
          font-size: 1rem;
          color: #000;
          text-align: center;
          background-color: #fff;
          transition: all .4s ease-in;
        }
        .learnMore:hover {
          background-color: rgba(0,0,0, .1);
        }
      `}</style>
      <p>{props.text}</p>
      <h2>{props.title}</h2>
      <p>{props.paragraph}</p>
      <button className="learnMore">Learn more</button>
    </div>
  );
}

export default ProductsAndNews;
