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
                            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#D7CFFF" d="M34.1,-59.3C47.1,-51.5,62.5,-48.3,69,-39.1C75.5,-30,72.9,-15,70.5,-1.4C68.1,12.2,65.8,24.5,59.6,34C53.4,43.6,43.3,50.6,32.7,59C22.1,67.4,11.1,77.3,-2.1,80.9C-15.3,84.6,-30.6,82,-43,74.7C-55.4,67.3,-64.8,55.1,-67.7,41.8C-70.5,28.6,-66.7,14.3,-65.8,0.5C-64.9,-13.3,-66.9,-26.5,-62.2,-36.5C-57.5,-46.5,-46,-53.2,-34.6,-61.9C-23.1,-70.6,-11.5,-81.4,-0.5,-80.5C10.5,-79.6,21.1,-67.2,34.1,-59.3Z" transform="translate(100 100)" />
</svg>
                        </div>
                    </div>
                    <div className="h-50 p-2 row d-flex align-items-center mt-5 greeting-text">
                        <h1 className="display-3">
                            Hola! Soy <b><span className="co-2 name">Valentín</span></b>,
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
