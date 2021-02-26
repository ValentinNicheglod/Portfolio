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
        <div className="bg-white h-100 row max-height m-0 responsive-cont">
            <div className="justify-content-center align-items-center">
                <div>
                    <div className="h-50 p-5">
                        <div className="h-25 bg-2 d-flex justify-content-center align-items-center logo">
                            <img 
                                src="logo-white.png" 
                                alt="" 
                                width="60%" 
                                height="60%" 
                                id="img" 
                                style={{margin: '3rem'}} 
                                draggable={false}
                            />
                        </div>
                    </div>
                    <div className="h-50 p-2 row d-flex align-items-center mt-5">
                        <h1 className="display-3">
                            Hola! Soy <b><span className="co-1">Valentín</span></b>,
                        </h1>
                        <h6 className="display-6">
                            Desarrollador Web Full Stack
                        </h6>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default GreetingsMobile
