/* eslint-disable no-undef */
import React, { useState } from 'react';
// import Tilt from 'react-tilt';
import Modal from '@material-ui/core/Modal';
import { Slide, Fade } from 'react-slideshow-image';
import Slider from './Slider';

const laptop = "M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z";
const smartphone = "M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z";
const finished = "M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z";
const production = "M2.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C3.25 2 2.49 2.759 2.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6zM13.886 7.9v.163c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456V7.332c-1.114 0-1.49-.362-1.49-1.456V4.352C13.51 2.759 12.75 2 11.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6z";

const ProjectCard = ({name, img, state, /* gallery */ github, page, smallScreen, type}) => {

    const [open, setOpen] = useState(false);
    const gallery = ['https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800', 'https://cnnespanol.cnn.com/wp-content/uploads/2019/12/s_64a163f16ecbb099e52f2f8271f73cbbfcfc9034be4d646f7375e4db1ca6f3d7_1573501883482_ap_19001106049831-1.jpg?quality=100&strip=info&w=320&h=240&crop=1']
    // eslint-disable-next-line no-undef
    const carousel = $('#carousel-slide');

    return (
        <div className="Tilt card bg-1 p-3 proyect-card">
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
                        style={smallScreen ? {aspectRatio: 1/1, width: '150px', maxHeight: '150px'} : {width:"90%", aspectRatio: 1/1}}
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
                                //title="Repositorio de GitHub"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                </svg>
                                <p className="m-0">GitHub</p>
                            </a>
                    }
                    {
                        gallery &&
                            <button 
                                className="proyect-btn btn" 
                                onClick={() => setOpen(true)}
                                //title="Galería de imágenes"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-images" viewBox="0 0 16 16">
                                    <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                                    <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z"/>
                                </svg>
                                <p className="m-0">Galería</p>
                            </button>
                            
                    }
                    {
                        page &&
                            <a 
                                className="proyect-btn btn" 
                                href={page} 
                                target="_blank" 
                                rel="noreferrer noopener"
                                //title="Abrir proyecto"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                                </svg>
                                <p className="m-0">Abrir</p>
                            </a>
                    }
                </div>
            </div>
            
            <Modal 
                open={open}
                onClose={() => setOpen(false)}
                id="modal"
            >
                <div className="slide-container h-100">
                    {/* <Slide 
                        autoplay={false} 
                        className="h-100"
                        nextArrow={
                            <div title="Siguiente">
                                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="grey" className="bi bi-chevron-compact-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
                                </svg>
                            </div>
                        }
                        prevArrow={
                            <div title="Anterior">
                                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="grey" className="bi bi-chevron-compact-left" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/>
                                </svg>
                            </div>
                        }
                    >
                        {gallery && gallery.map((image) => (
                            <div className="each-slide">
                                <img async src={`projects/mockups/${image}.jpg`} alt="no img" id="preload"/>
                                <div style={{'backgroundImage': `url(projects/mockups/${image}.jpg)`}} />
                            </div>
                        ))}
                    </Slide> */}
                    {/* <Fade 
                        autoplay={false} 
                        className="h-100"
                        nextArrow={
                            <div title="Siguiente">
                                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="grey" className="bi bi-chevron-compact-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
                                </svg>
                            </div>
                        }
                        prevArrow={
                            <div title="Anterior">
                                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="grey" className="bi bi-chevron-compact-left" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/>
                                </svg>
                            </div>
                        }
                    >
                        {gallery && gallery.map((image_path) => (
                            <div className="each-fade">
                                <div className="image-container">
                                    <img src={`projects/mockups/${image_path}.jpg`} alt="no img" />
                                </div>
                            </div>
                        ))}
                    </Fade> */}
                    {/* <div id="carousel-slide" className="carousel slide h-100" data-ride="carousel">
                    <ol className="carousel-indicators">
                        {gallery && gallery.map((image_path, i) => (
                            <li key={i} data-target="#carousel-slide" data-slide-to={i}></li>
                        ))}
                    </ol>
                        <div className="carousel-inner h-100">
                            {gallery && gallery.map((image_path, i) => (
                                <div className={i === 0 ? "carousel-item active" : "carousel-item"} key={i}>
                                    <img className="d-block h-100 image-slider" src={`projects/mockups/${image_path}.jpg`} alt=""/>
                                </div>
                            ))}
                        </div>
                        <a className="carousel-control-prev" href="#carousel-slide" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        </a>
                        <a className="carousel-control-next" href="#carousel-slide" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        </a>
                    </div> */}
                    <Slider images={gallery}/>
                    <button 
                        className="btn close-gallery-btn" 
                        onClick={() => setOpen(false)} 
                        title="Cerrar galería"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="red" className="bi bi-x" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </button>
                </div>
            </Modal>
        </div>
    )
}

export default ProjectCard