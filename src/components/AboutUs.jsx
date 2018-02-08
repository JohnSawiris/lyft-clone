import React from 'react';
import phone from '../assets/imgs/phone.png';
function AboutUs() {
  return(
    <div className="aboutUs">
      <style jsx>{`
          .aboutUs {
            width: 90%;
            display: block;
            order: 1;
            margin-top: 10rem;
            margin: auto;
          }
          h2 {
            text-transform: uppercase;
            font-size: 2rem;
          }
          .stuff{
            margin-bottom: 3rem;
          }
          .left, .right {
            display: inline-block;
            margin: 0;
            width: 50%;
          }
          .phone {
            display: inline-block;
            padding: 2rem;
            max-width: 100%;
            width: 450px;
          }
          @media (max-width: 1500px) {
            .phone {
              padding: 0;
            }
          }
          @media (max-width: 900px) {
            .aboutUs {
              margin: 2rem;
            }
            .phone {
              max-width: 100%;
              padding: 0;
            }
          }
      `}</style>
      <div className="left">
        <div className="stuff">
          <h2>a ride in minutes</h2>
          <p>Request a ride and you’ll be on your way in minutes. Request. Ride. Repeat.</p>
        </div>
        <div className="stuff">
          <h2>serious about safety</h2>
          <p>From knowing the color of your driver’s car to our 24/7 Trust & Safety Team, we got you.</p>
        </div>
        <div className="stuff">
          <h2>happy drivers.</h2>
          <h2>happy riders.</h2>
          <p>Ride with us and you’ll see why 9 out of 10 rides end with five stars.</p>
        </div>
      </div>
      <div className="right">
        <img className="phone" src={phone} />
      </div>
    </div>
  );
}

export default AboutUs;
