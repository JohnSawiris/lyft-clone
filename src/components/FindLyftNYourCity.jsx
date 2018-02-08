import React from 'react';
import findLyft from '../assets/imgs/find-lyft-your-city.svg';

function FindLyftNYourCity() {
  return(
    <div className="findLyft">
      <style jsx>{`
        .findLyft {
          display: flex;
          justify-content space-around;
          background-color: #352384;
        }
        .find-logo, .city-search {
          flex-basis: 48%;
          margin: auto;
        }
        .find-logo {
          text-align: center;
        }
        .find-logo img {
          margin-top: -25px;
          width: 200px;
        }
        .city-search {
          text-transform: uppercase;
        }
        .city-search input {
          background-color: #352384;
          border: none;
          font-size: 1.3rem;
          color: #fff;
          outline: 0;
          padding-bottom: .5rem;
          border-bottom: 0;
          width: 80%;
          border-bottom: 1px solid #fff;
        }
        .city-search p {
          color: #e6339e;
        }
      `}</style>
      <div className="find-logo">
        <img src={findLyft} />
      </div>
      <div className="city-search">
        <h1>Find Lyft in your city</h1>
        <input placeholder="Find a City" />
        <p>See airports we serve</p>
      </div>
    </div>
  );
}

export default FindLyftNYourCity;
