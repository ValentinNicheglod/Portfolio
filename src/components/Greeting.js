import React from 'react';

const Greeting = () => {

    return (
        <div className="bg-white row h-100 m-0 clip">
            <div className="col-md-8 col-sm-8 d-flex justify-content-center align-items-center">
                <div>
                    <h1 className="display-3">
                        Hola! Soy <b><span className="co-1">Valentín</span></b>,
                    </h1>
                    <h1 className="display-6">
                        Desarrollador Web Full Stack
                    </h1>
                </div>
            </div>
            <div className="col-md-4 col-sm-4 d-flex justify-content-end p-0">
                <div className="w-100 h-100 bg-7 clip3 position-absolute"/>
                <div className="w-75 h-100 bg-2 clip2 position-relative d-flex justify-content-end decoration">
                    <img 
                        src="/logo.png" 
                        alt="" 
                        width="40%" 
                        height="23%" 
                        id="img" 
                        style={{margin: '4rem'}} 
                        draggable={false}
                    />
                </div>
            </div>
        </div>
    )
};

export default Greeting;
