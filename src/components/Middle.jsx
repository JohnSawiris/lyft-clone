import React from 'react';
import PropTypes from 'prop-types';

function Middle(props) {
  return(
    <div className="middleContianer">
      <style jsx>{`
        .middleContianer {
          display: flex;
          background-color: #fff;
        }
        .text {
          order: 1;
          flex: 1;
          color: #ff00bf;
          font-weight: 700;
          padding: 3rem;
        }
        .text h2{
          color: #000;
          font-size: 2rem;
        }
        .image {
          flex: 2;
        }
        .image img {
          width: 100%;
        }
        .paragraph {
          color: #000;
          line-height: 2rem;
          font-size: 1.2rem;
          font-weight 300;
        }
      `}</style>
      <div className="text">
        <p>{props.text}</p>
        <h2>{props.title}</h2>
        <p className="paragraph">{props.paragraph}</p>
      </div>
      <div className="image" style={props.order}>
        <img src={props.img} />
      </div>
    </div>
  );
}

Middle.propTypes = {
  img: PropTypes.any,
  text: PropTypes.string,
  title: PropTypes.string,
  paragraph: PropTypes.string,
  order: PropTypes.object
}

export default Middle;
