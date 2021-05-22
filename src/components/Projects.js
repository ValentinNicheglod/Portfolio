import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
    {
        name: 'Mono',
        img: 'mono.png',
        state: 'Finalizado',
        gallery: ['mono/inicio',  'mono/catalogo', 'mono/catalogo-filtro'],
        github: 'https://github.com/ValentinNicheglod/MONO',
        page: 'https://valentinnicheglod.github.io/MONO-/',
        type: 'Web'
    },
    {
        name: 'NotatKy',
        img: 'notatKy.png',
        state: 'Finalizado',
        gallery: ['notatky/inicio', 'notatky/login', 'notatky/signup', 'notatky/contra1', 'notatky/contra2', 'notatky/contra3', 'notatky/home', 'notatky/home-editing', 'notatky/home-editing-2', 'notatky/home-editing-3', 'notatky/home-add-tag', 'notatky/profile', 'notatky/edit-data', 'notatky/edit-pw', 'notatky/col-tag',],
        github: 'https://github.com/ValentinNicheglod/notatky-frontend',
        page: 'https://valentinnicheglod.github.io/NotatKy/#/',
        type: 'Web'
    },
    {
        name: 'TreeBank',
        img: 'treebank.png',
        state: 'Finalizado',
        gallery: ['treebank/0', 'treebank/1', 'treebank/2', 'treebank/3', 'treebank/4', 'treebank/5', 'treebank/6', 'treebank/7', 'treebank/8', 'treebank/9'],
        github: 'https://github.com/ValentinNicheglod/treebank',
        page: 'https://drive.google.com/file/d/1ZBBJfk34kLWOKT6QSCeHXc1n09jh6v0S/view',
        type: 'Aplicación'
    }
];

const Proyects = ({smallScreen}) => {

    return (
        <div className="bg-2 row min m-0">
            <div className="p-4">
                <div>
                    <h1 className="display-3 white title">
                        Proyectos...
                    </h1>
                </div>
                <div className="row d-flex justify-content-around proyect-card-cont">
                    {
                        projects.map((project, index) => (
                            <>
                            <ProjectCard
                                github= {project.github}
                                img= {project.img}
                                key={index}
                                gallery={project.gallery}
                                name= {project.name}
                                page= {project.page}
                                smallScreen={smallScreen}
                                state= {project.state}
                                type= {project.type}
                            />
                            <div id="preload">
                            {project.gallery && project.gallery.map(img => (
                                <img src={`projects/mockups/${img}.jpg`} alt=""/>
                            ))}
                            </div>
                            </>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Proyects
