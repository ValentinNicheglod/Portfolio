import React from 'react';
import animateScrollTo from 'animated-scroll-to';
import ProjectCard from './ProjectCard';

const icons = {
  react: ['https://img.icons8.com/ios/60/000000/react-native--v1.png', 'React'],
  reactNative: ['https://img.icons8.com/ios/60/000000/react-native--v1.png', 'React native'],
  redux: ['https://img.icons8.com/ios/60/000000/redux.png', 'Redux'],
  js: ['https://img.icons8.com/ios/60/000000/javascript--v1.png', 'Javascript'],
  mysql: ['https://img.icons8.com/ios/60/000000/mysql-logo.png', 'MySQL'],
};

const projects = [
  {
    name: 'Mono',
    img: 'mono.png',
    state: 'Finalizado',
    description: 'Proyecto personal realizado para Henry Labs, es un sitio de e-commerce que utiliza los recursos de una API de Mercado Libre, se pueden ordenar y filtrar productos por condición y tipo de envío.',
    gallery: ['mono/inicio', 'mono/catalogo', 'mono/catalogo-filtro'],
    mobile_gallery: ['mono/mobile/17', 'mono/mobile/18', 'mono/mobile/19'],
    github: 'https://github.com/ValentinNicheglod/MONO',
    page: 'https://valentinnicheglod.github.io/MONO-/',
    type: 'Web',
    tech: [icons.js, icons.react],
    codeLines: '808',
    dates: {
      start: ['Diciembre', 2020],
      end: ['Diciembre', 2020],
    },
  },
  {
    name: 'NotatKy',
    img: 'notatKy.png',
    state: 'Finalizado',
    description: 'Aplicación web de notas en donde puedes crear un perfil y guardar tus notas pudiendo también filtrarlas por etiquetas, agregarlas a colecciones y demás.',
    gallery: ['notatky/inicio', 'notatky/guest', 'notatky/login', 'notatky/signup', 'notatky/contra1', 'notatky/contra2', 'notatky/contra3', 'notatky/home', 'notatky/home-editing-3', 'notatky/home-add-tag', 'notatky/home-editing-2', 'notatky/home-editing', 'notatky/profile', 'notatky/edit-data', 'notatky/edit-pw', 'notatky/col-tag'],
    mobile_gallery: ['notatky/mobile/1', 'notatky/mobile/2', 'notatky/mobile/3', 'notatky/mobile/4', 'notatky/mobile/14', 'notatky/mobile/15', 'notatky/mobile/16', 'notatky/mobile/6', 'notatky/mobile/8', 'notatky/mobile/9', 'notatky/mobile/7', 'notatky/mobile/11', 'notatky/mobile/10', 'notatky/mobile/12', 'notatky/mobile/13'],
    github: 'https://github.com/ValentinNicheglod/NotatKy-',
    page: 'https://valentinnicheglod.github.io/NotatKy/#/',
    type: 'Web',
    tech: [icons.js, icons.react, icons.redux, icons.mysql],
    codeLines: '9,422',
    dates: {
      start: ['Enero', 2021],
      end: ['Marzo', 2021],
    },
  },
  {
    name: 'TreeBank',
    img: 'treebank.png',
    state: 'Finalizado',
    description: 'Billetera virtual en donde podrás ver el saldo de tus cuentas en dólares y pesos, tus tarjetas, tus movimientos, tus estadísticas y también realizar transferencias, depósitos, cambios de divisa y pagos simulados.',
    gallery: ['treebank/0', 'treebank/1', 'treebank/2', 'treebank/3', 'treebank/4', 'treebank/5',
      'treebank/6', 'treebank/7', 'treebank/8', 'treebank/9', 'treebank/10', 'treebank/11'],
    github: 'https://github.com/ValentinNicheglod/treebank',
    page: 'https://github.com/ValentinNicheglod/treebank',
    type: 'Aplicación',
    tech: [icons.js, icons.reactNative, icons.redux, icons.mysql],
    codeLines: '5,989',
    dates: {
      start: ['Enero', 2021],
      end: ['Febrero', 2021],
    },
  },
];

const Projects = ({ smallScreen }) => (
  <div className="bg-2 row min projects m-0 responsive-cont">
    <div className="p-4">
      <div>
        <h1 className="display-3 white title">
          Proyectos...
        </h1>
      </div>
      <div className="row d-flex justify-content-around proyect-card-cont align-items-center">
        {
          projects.map((project, i) => (
            <>
              <ProjectCard
                github={project.github}
                img={project.img}
                description={project.description}
                key={i}
                gallery={project.gallery}
                index={i}
                mobileGallery={project.mobile_gallery}
                name={project.name}
                page={project.page}
                smallScreen={smallScreen}
                state={project.state}
                type={project.type}
                tech={project.tech}
                codeLines={project.codeLines}
                date={project.dates}
              />
            </>
          ))
        }
      </div>
      <button className="btn more-info more-info1" onClick={() => animateScrollTo(window.innerHeight * 4 + 10)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-chevron-compact-down" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z" />
        </svg>
      </button>
    </div>
  </div>
);

export default Projects;
