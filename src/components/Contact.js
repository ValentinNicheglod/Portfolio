import React from 'react';

const contactLinks = [
    {
        href: 'https://github.com/ValentinNicheglod',
        class: 'bi bi-github',
        path: 'M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z'
    },
    {
        href: 'https://www.linkedin.com/in/valentin-nicheglod/',
        class: 'bi bi-linkedin',
        path: 'M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z'
    },
    {
        href: 'https://twitter.com/DevNicheglod',
        class: 'bi bi-twitter',
        path: 'M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z'
    },
]

const Contact = ({smallScreen}) => {
    return (
        <div className="h-100 ">
            
            <div className="bg-2 d-flex justify-content-center row contact">
                <hr/>
                <h1 className="display-3 white title d-flex justify-content-center">
                    CONTACTO
                </h1>
                <div className="social-cont d-flex justify-content-around">
                    {
                        !smallScreen &&
                            <a href="mailto:nicheglod69@gmail.com" className="social-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFF" className="bi bi-envelope" viewBox="0 0 16 16">
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
                                </svg>
                            </a>
                    }
                    {
                        contactLinks.map(link => (
                            <a 
                                href={link.href} 
                                className="social-btn" 
                                target="_blank" 
                                rel="noreferrer noopener"
                            >
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg"  
                                    fill="#FFFF" 
                                    className={link.class} 
                                    viewBox="0 0 16 16"
                                >
                                    <path d={link.path}/>
                                </svg>
                            </a>
                        ))
                    }
                </div>
                {
                    smallScreen
                        ? <a 
                            href="mailto:nicheglod69@gmail.com" 
                            className="btn contact-btn"
                        >
                            ENVÍAME UN CORREO
                        </a>
                        : <div className="card h-50 w-75 bg-1 d-flex justify-content-around align-items-center contact-card">
                            <h3 className="display-6 white contact-title">
                                ¿QUIERES COMUNICARTE CONMIGO?
                            </h3>
                            <p className="white">
                                Estoy dispuesto a recibir propuestas laborales o realizar colaboraciones en algún proyecto.
                            </p>
                            <a 
                                href="mailto:nicheglod69@gmail.com" 
                                className="btn contact-btn"
                            >
                                ENVÍAME UN CORREO
                            </a>
                        </div>
                }
            </div>
            <div 
                className="bg-white h-50 d-flex justify-content-center row legend" 
                style={{paddingTop: '10%'}}
            >
                <div className="d-flex justify-content-center">
                    <img 
                        src='logo.png' 
                        alt="" 
                        width="150" 
                        height="150" 
                        draggable={false}
                    />
                </div>
                <p className="d-flex justify-content-center">
                    Hecho por mi con mucho amor 💖 y café ☕
                </p>
            </div>
        </div>
    )
};

export default Contact;
