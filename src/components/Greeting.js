import React from 'react';
import animateScrollTo from 'animated-scroll-to';

const Greeting = ({ smallScreen }) => (
  <div className="bg-white row max-height m-0 responsive-cont clip greeting">
    <div className="col-md-8 col-sm-8 d-flex greeting-col justify-content-center align-items-center">
      {smallScreen
        && (
        <>
          <div className="logo-responsive">
            <img src="logo-white.png" alt="logo" />
          </div>
          <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="currentColor" fillOpacity="1" d="M0,96L18.5,106.7C36.9,117,74,139,111,160C147.7,181,185,203,222,186.7C258.5,171,295,117,332,101.3C369.2,85,406,107,443,117.3C480,128,517,128,554,106.7C590.8,85,628,43,665,48C701.5,53,738,107,775,144C812.3,181,849,203,886,181.3C923.1,160,960,96,997,106.7C1033.8,117,1071,203,1108,240C1144.6,277,1182,267,1218,240C1255.4,213,1292,171,1329,138.7C1366.2,107,1403,85,1422,74.7L1440,64L1440,0L1421.5,0C1403.1,0,1366,0,1329,0C1292.3,0,1255,0,1218,0C1181.5,0,1145,0,1108,0C1070.8,0,1034,0,997,0C960,0,923,0,886,0C849.2,0,812,0,775,0C738.5,0,702,0,665,0C627.7,0,591,0,554,0C516.9,0,480,0,443,0C406.2,0,369,0,332,0C295.4,0,258,0,222,0C184.6,0,148,0,111,0C73.8,0,37,0,18,0L0,0Z" />
          </svg>
        </>
        )}
      <div className="welcome">
        <h1 className="display-2">
          Hola! Soy&nbsp;
          <b><span className="co-1 name">Valentín</span></b>
          ,
        </h1>
        <h6 className="display-6">
          Desarrollador Web Full Stack
        </h6>
        <button className="btn more-info co-1" onClick={() => animateScrollTo(window.innerHeight)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
          </svg>
          &nbsp;
          Sobre mi
        </button>
      </div>
    </div>
    <div className="col-md-4 d-flex justify-content-end p-0">
      <div className="w-25 h-75 bg-1 clip4 position-absolute" />
      <div className="w-100 h-100 bg-7 clip3 position-absolute" />
      <div className="w-100 h-100 bg-1 clip5 position-absolute" />
      <div className="w-75 h-100 bg-2 clip2 position-relative d-flex justify-content-end decoration">
        <img
          src="logo-white.png"
          alt="logo"
          width="40%"
          height="23%"
          id="img"
          draggable={false}
        />
      </div>
    </div>
  </div>
);

export default Greeting;
