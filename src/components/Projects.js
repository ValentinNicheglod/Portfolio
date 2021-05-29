import React from 'react';
import animateScrollTo from 'animated-scroll-to';
import ProjectCard from './ProjectCard';

const projects = [
  {
    name: 'Mono',
    img: 'mono.png',
    state: 'Finalizado',
    gallery: ['mono/inicio', 'mono/catalogo', 'mono/catalogo-filtro'],
    mobile_gallery: ['mono/mobile/17', 'mono/mobile/18', 'mono/mobile/19'],
    github: 'https://github.com/ValentinNicheglod/MONO',
    page: 'https://valentinnicheglod.github.io/MONO-/',
    type: 'Web',
  },
  {
    name: 'NotatKy',
    img: 'notatKy.png',
    state: 'Finalizado',
    gallery: ['notatky/inicio', 'notatky/login', 'notatky/signup', 'notatky/contra1', 'notatky/contra2', 'notatky/contra3', 'notatky/home', 'notatky/home-editing', 'notatky/home-editing-2', 'notatky/home-editing-3', 'notatky/home-add-tag', 'notatky/profile', 'notatky/edit-data', 'notatky/edit-pw', 'notatky/col-tag'],
    mobile_gallery: ['notatky/mobile/1', 'notatky/mobile/2', 'notatky/mobile/3', 'notatky/mobile/4', 'notatky/mobile/5', 'notatky/mobile/14', 'notatky/mobile/15', 'notatky/mobile/16', 'notatky/mobile/6', 'notatky/mobile/7', 'notatky/mobile/8', 'notatky/mobile/9', 'notatky/mobile/10', 'notatky/mobile/11', 'notatky/mobile/12', 'notatky/mobile/13'],
    github: 'https://github.com/ValentinNicheglod/NotatKy',
    page: 'https://valentinnicheglod.github.io/NotatKy/#/',
    type: 'Web',
  },
  {
    name: 'TreeBank',
    img: 'treebank.png',
    state: 'Finalizado',
    gallery: ['treebank/0', 'treebank/1', 'treebank/2', 'treebank/3', 'treebank/4', 'treebank/5', 'treebank/6', 'treebank/7', 'treebank/8', 'treebank/9', 'treebank/10', 'treebank/11'],
    github: 'https://github.com/ValentinNicheglod/treebank',
    page: 'https://github.com/ValentinNicheglod/treebank',
    type: 'Aplicación',
  },
];

const Projects = ({ smallScreen }) => (
  <div className="bg-2 row min projects m-0">
    <div className="p-4">
      <div>
        <h1 className="display-3 white title">
          Proyectos...
        </h1>
      </div>
      <div className="row d-flex justify-content-around proyect-card-cont">
        {
                        projects.map((project, i) => (
                          <>
                            <ProjectCard
                              github={project.github}
                              img={project.img}
                              key={i}
                              gallery={project.gallery}
                              mobileGallery={project.mobile_gallery}
                              name={project.name}
                              page={project.page}
                              smallScreen={smallScreen}
                              state={project.state}
                              type={project.type}
                            />
                            <div id="preload">
                              {project.gallery && project.gallery.map((img) => (
                                <img src={`projects/mockups/${img}.jpg`} alt="" />
                              ))}
                            </div>
                          </>
                        ))
                    }
      </div>
      <button className="btn more-info more-info1" onClick={() => animateScrollTo(window.innerHeight * 4 + 10)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
          <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
        </svg>
      </button>
    </div>
  </div>
);

export default Projects;
