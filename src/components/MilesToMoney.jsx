import React from 'react';

function MilesToMoney() {
  return(
    <div className="miletomoney">
      <style jsx>{`
        .miletomoney {
          display: block;
          width: 500px;
          background-color: #fff;
          color: purple;
          align-self: flex-end;
          padding: 3rem 4rem 2rem;
          text-transform: uppercase;
        }
        .miletomoney h1 {
          color: #352384;
          font-size:2.4rem;
        }
        .contact {
          color: #bfc7d9;
        }
        .btn {
          background-color: #ff00bf;
          color: #fff;
          outline: 0;
          border-color: #ff00bf;
          border-radius: 5px;
          font-size: 1rem;
          padding: 1rem;
          display: inline-block;
          font-weight: bold;
          margin-right 1rem;
        }
        .small {
          font-size: .6rem;
          margin-bottom: 1rem;
        }
        a {
          color: #ff00bf;
        }
        @media (max-width: 900px) {
          .miletomoney {
            width: 100%;
            margin: 0;
          }
        }
      `}</style>
      <h1>turn miles <br></br>into money</h1>
      <p>sign up to drive with lyft.</p>
      <p className="contact">Phone Number</p>
      <hr />
      <button className="btn">Become a Driver</button>
      <a href="#" className="contact">sign up to ride</a>
      <p className="small contact">Already applied? <a href="#"> Check the status of your application here.</a></p>
      <p className="small contact">Earn money for inviting friends to drive. <a href="#">Learn more</a></p>
    </div>
  );
}

export default MilesToMoney;
