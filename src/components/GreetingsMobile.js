import React from 'react'

const GreetingsMobile = () => {
    return (
/*         <div className="mobile-greeting">
            <div className="h-100 d-flex justify-content-center p-5 row">
                <div className="w-50">
                    <img 
                        src="logo.png" 
                        alt="" 
                        height="100%"
                        width="100%"
                        id="img" 
                        draggable={false}
                    />
                </div>
                <h1 className="display-1 d-flex justify-content-center my-5">
                    ¡Hola!
                </h1>
                <h3 className="display-3 d-flex justify-content-center my-5">
                    Soy<b><span className="co-1">&nbsp;Valentín</span></b>
                </h3>
                <h6 className="d-flex justify-content-center my-5">
                    Desarrollador Web Full Stack
                </h6>
            </div>
        </div> */
        <div className="bg-8 h-100 row max-height m-0 responsive-cont">
            <div className="d-flex justify-content-center align-items-center">
                <div>
                    <div className="h-50 p-5 d-flex justify-content-center">
                        <div className="h-25 d-flex justify-content-center align-items-center logo">
                            <img 
                                src="logo-white.png" 
                                alt="" 
                                width="60%" 
                                height="60%" 
                                id="img" 
                                style={{margin: '3rem', zIndex: '200'}} 
                                draggable={false}
                            />
                            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#5A38FD" d="M24.5,-27.5C32.2,-10,39,0.2,37.2,8.5C35.3,16.7,24.7,22.9,11.9,31.7C-0.8,40.5,-15.6,51.9,-29.3,49.6C-43.1,47.3,-55.7,31.5,-61.2,12.5C-66.8,-6.5,-65.2,-28.6,-53.8,-47C-42.4,-65.4,-21.2,-80,-6.4,-74.9C8.4,-69.8,16.9,-45,24.5,-27.5Z" transform="translate(100 100)" />
                            </svg>
                            
                            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="blob3">
                                <path fill="#387AC4" d="M38.9,-30.9C48.3,-19.2,52.4,-3.2,51.5,16.3C50.7,35.7,45,58.6,30.6,66.7C16.2,74.8,-6.7,68.3,-29.1,58.3C-51.4,48.4,-73.2,35,-76.1,18.4C-79.1,1.8,-63.4,-18.1,-47.6,-31.3C-31.8,-44.5,-15.9,-51,-0.6,-50.5C14.7,-50.1,29.5,-42.7,38.9,-30.9Z" transform="translate(100 100)" />
                            </svg>
                            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="blob2">
                                <path fill="#DA70D6" d="M55.7,-52.3C60.3,-38.6,44,-16.2,33.8,-0.6C23.6,14.9,19.5,23.4,9.6,33.4C-0.3,43.3,-16,54.6,-24.1,50.6C-32.1,46.5,-32.4,27,-30.9,12.9C-29.5,-1.1,-26.2,-9.7,-20.7,-23.6C-15.3,-37.5,-7.6,-56.6,8.9,-63.8C25.5,-70.9,51.1,-66,55.7,-52.3Z" transform="translate(100 100)" />
                            </svg>
                        </div>
                    </div>
                    <div className="h-50 p-2 row d-flex align-items-center mt-5 greeting-text">
                        <h1 className="display-3">
                            Hola! Soy <b><span className="co-2 name">Valentín</span></b>,
                        </h1>
                        <h6 className="display-6 rubik">
                            Desarrollador Web Full Stack
                        </h6>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default GreetingsMobile
