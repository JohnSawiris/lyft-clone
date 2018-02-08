import React from 'react';
import MilesToMoney from './MilesToMoney';
import AboutUs from './AboutUs';
import bgImg from '../assets/imgs/bg-lyft.jpg';

function Header() {
  return(
    <div className="header">
      <style jsx>{`
        .header {
          display: flex;
          justify-content: flex-end;
          flex-wrap: wrap;
        }
        .lyftSign {
          position: absolute;
          top: -180px;
          width: 100%;
          z-index: -33333;
        }
        @media (max-width: 1500px) {
          .lyftSign {
            top: -40px;
            max-width: 100%;
          }
        }
        @media (max-width: 900px) {
          .lyftSign {
            width: 100%;
            display: block;
            position: relative;
            top: 0px;
          }
        }
      `}</style>
      <img className="lyftSign" src={bgImg} />
      <AboutUs />
      <MilesToMoney />
    </div>
  );
}

export default Header;
