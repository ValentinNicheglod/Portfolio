import React from 'react';
import Tilt from 'react-tilt';

const laptop = "M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z";
const smartphone = "M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z";
const finished = "M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z";
const production = "M2.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C3.25 2 2.49 2.759 2.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6zM13.886 7.9v.163c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456V7.332c-1.114 0-1.49-.362-1.49-1.456V4.352C13.51 2.759 12.75 2 11.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6z";

const ProjectCard = ({name, img, state, github, page, smallScreen, type}) => {
    return (
        <Tilt 
            className="Tilt card bg-1 p-3 proyect-card" 
            options={{ max : 10, scale: 1.05 }}
            
        >
            <div className="d-flex justify-content-center row" style={{height: '70%'}}>
                {!smallScreen &&
                    <>
                        <div className="d-flex justify-content-center col-md-6 col-sm-6 white p-info">
                            <p>
                                {
                                    type === 'Web' 
                                    ? <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        width="16" 
                                        height="16" 
                                        fill="currentColor" 
                                        className="bi bi-laptop" 
                                        viewBox="0 0 16 16"
                                    >
                                        <path d={laptop}/>
                                    </svg>
                                    : <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        width="16" 
                                        height="16" 
                                        fill="currentColor" 
                                        className="bi bi-phone" 
                                        viewBox="0 0 16 16"
                                    >
                                        <path d={smartphone}/>
                                        <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                                    </svg>
                                }
                                &nbsp;&nbsp;&nbsp;{type}
                            </p>
                        </div>
                        <div className="d-flex justify-content-center col-md-6 col-sm-6 white p-info">
                            <p>
                                {
                                    state === 'Finalizado'
                                    ? <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        width="16" 
                                        height="16" 
                                        fill="currentColor" 
                                        className="bi bi-check2" 
                                        viewBox="0 0 16 16"
                                    >
                                        <path d={finished}/>
                                    </svg>
                                    : <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        width="16" 
                                        height="16" 
                                        fill="currentColor" 
                                        className="bi bi-braces" 
                                        viewBox="0 0 16 16"
                                    >
                                        <path d={production}/>
                                </svg>
                                }
                                &nbsp;&nbsp;&nbsp;{state}
                            </p>
                        </div>
                    </>
                }
                <div className="d-flex justify-content-center image">
                    <img 
                        src={`projects/${img}`}
                        alt="" 
                        style={smallScreen ? {aspectRatio: 1/1, maxWidth: '100%'} : {width:"90%", aspectRatio: 1/1}}
                        draggable={false}
                    />
                </div>
            </div>

            {!smallScreen && <hr/>}

            <div 
                className="row" 
                style={{height: '30%'}}
            >
                <div>
                    <h6 className="display-6 d-flex justify-content-center align-items-start white">
                        {name}
                    </h6>
                </div>
                <div className="d-flex justify-content-around">
                    {
                        github &&
                            <a 
                                className="proyect-btn btn" 
                                href={github} 
                                target="_blank" 
                                rel="noreferrer noopener"
                            >
                                CÓDIGO
                            </a>
                    }
                    {
                        page &&
                            <a 
                                className="proyect-btn btn" 
                                href={page} 
                                target="_blank" 
                                rel="noreferrer noopener"
                            >
                                VISITAR
                            </a>
                    }
                </div>
            </div>
        </Tilt>
    )
}

export default ProjectCard