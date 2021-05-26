import React from 'react';

const Greeting = () => {

    return (
        <div className="bg-white row max-height m-0 responsive-cont clip">
            <div className="col-md-8 col-sm-8 d-flex justify-content-center align-items-center">
                <div className="welcome">
                    <h1 className="display-3">
                        Hola! Soy <b><span className="co-1 name">Valentín</span></b>,
                    </h1>
                    <h6 className="display-6">
                        Desarrollador Web Full Stack
                    </h6>
                    <button className="btn more-info co-1" onClick={() => window.scrollBy(0, 750)}>
                
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                </svg>
                &nbsp;&nbsp;
                Sobre mi
            </button>
                </div>
            </div>
            <div className="col-md-4 col-sm-4 d-flex justify-content-end p-0">
                <div className="w-100 h-100 bg-7 clip3 position-absolute"/>
                <div className="w-75 h-100 bg-2 clip2 position-relative d-flex justify-content-end decoration">
                    <img 
                        src="logo-white.png" 
                        alt="" 
                        width="40%" 
                        height="23%" 
                        id="img" 
                        draggable={false}
                    />
                </div>
            </div>
        </div>
    )
};

export default Greeting;
