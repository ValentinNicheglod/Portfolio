import React, { useState, useEffect, useRef } from 'react';
import animateScrollTo from 'animated-scroll-to';
import ProjectCard from './ProjectCard';
import ChevronRightIcon from '../images/icons/BlueChevronRight.svg';
import ChevronLeftIcon from '../images/icons/BlueChevronLeft.svg';
import Slider from './Slider';

import UXUIDesignerEmoji from '../images/emojis/UXUIDesigner.png';
import DeveloperEmoji from '../images/emojis/Developer.png';
import meteorBG from '../images/MeteorBG.jpg';
import meteorIcon from '../images/logos/meteor.png';
import notatkyBG from '../images/NotatkyBG.jpg';
import notatKyIcon from '../images/logos/notatKy.png';
import radleyBG from '../images/RadleyBG.jpg';
import radleyIcon from '../images/logos/radley.png';

const icons = {
  react: ['https://img.icons8.com/ios/60/000000/react-native--v1.png', 'React'],
  reactNative: ['https://img.icons8.com/ios/60/000000/react-native--v1.png', 'React native'],
  redux: ['https://img.icons8.com/ios/60/000000/redux.png', 'Redux'],
  js: ['https://img.icons8.com/ios/60/000000/javascript--v1.png', 'Javascript'],
  mysql: ['https://img.icons8.com/ios/60/000000/mysql-logo.png', 'MySQL'],
};

const projects = [
  {
    name: 'NotatKy',
    id: 0,
    subtitle: 'App de Notas',
    backgroundImage: notatkyBG,
    icon: notatKyIcon,
    description: 'Aplicación web de notas en donde puedes crear un perfil y guardar tus notas pudiendo también filtrarlas por etiquetas, agregarlas a colecciones y demás.',
    gallery: ['notatky/V2/Inicio', 'notatky/V2/GuestMode', 'notatky/V2/Login', 'notatky/V2/Login2', 'notatky/V2/SignUp', 'notatky/V2/SignUp2', 'notatky/V2/PasswordReset1', 'notatky/V2/PasswordReset2', 'notatky/V2/PasswordReset3', 'notatky/V2/Home', 'notatky/V2/Note', 'notatky/V2/TagModal', 'notatky/V2/Archive', 'notatky/V2/Trash', 'notatky/V2/Profile', 'notatky/V2/Profile2', 'notatky/V2/Profile3', 'notatky/V2/CollectionsTags', 'notatky/V2/CollectionsTags2'],
    mobileGallery: ['notatky/mobile/1', 'notatky/mobile/2', 'notatky/mobile/3', 'notatky/mobile/4', 'notatky/mobile/14', 'notatky/mobile/15', 'notatky/mobile/16', 'notatky/mobile/6', 'notatky/mobile/8', 'notatky/mobile/9', 'notatky/mobile/7', 'notatky/mobile/11', 'notatky/mobile/10', 'notatky/mobile/12', 'notatky/mobile/13'],
    github: 'https://github.com/ValentinNicheglod/NotatKy-',
    page: 'https://valentinnicheglod.github.io/NotatKy/#/',
    type: 'Dev',
    typeText: 'Desarrollo Web',
    typeIcon: DeveloperEmoji,
  },
  {
    name: 'Meteor',
    id: 1,
    subtitle: 'App de e-commerce',
    backgroundImage: meteorBG,
    icon: meteorIcon,
    description: 'Caso de estudio UX sobre un e-commerce de moda basado en la inclusividad, es una app en la que puedes comprar productos de todos los modelos y talles.',
    gallery: [{ id: 'vertical', path: 'meteor/Login' }, 'meteor/Registro', 'meteor/Home', { id: 'vertical', path: 'meteor/Favoritos' }, { id: 'vertical', path: 'meteor/Producto' }, { id: 'vertical', path: 'meteor/Buscar' }, { id: 'vertical', path: 'meteor/Bolsa' }, 'meteor/Checkout', { id: 'vertical', path: 'meteor/Cuenta' }],
    page: 'https://www.figma.com/proto/Ehw4AATRdzR9nvnOSarXC5/Meteor-Prototype?page-id=0%3A1&node-id=0%3A1&viewport=1446%2C517%2C0.17&scaling=min-zoom&starting-point-node-id=1%3A2821&show-proto-sidebar=1',
    type: 'Design',
    typeText: 'Diseño UX/UI',
    typeIcon: UXUIDesignerEmoji,
  },
  {
    name: 'Radley',
    id: 2,
    subtitle: 'Prototipo web',
    backgroundImage: radleyBG,
    icon: radleyIcon,
    description: 'Prototipo web de un e-commerce de moda en el que puedes visualizar, buscar y comprar productos, cuenta con categorías y una bolsa de compras.',
    gallery: [{ path: 'radley/Inicio', scrollable: true }, 'radley/Login', 'radley/Registrarse', { path: 'radley/ProductosRecomendados', scrollable: true }, { path: 'radley/Producto', scrollable: true }, { path: 'radley/Bolsa', scrollable: true }, { path: 'radley/Checkout1', scrollable: true }, { path: 'radley/Checkout2', scrollable: true }, { path: 'radley/Checkout3', scrollable: true }],
    hasScrollablePrototype: true,
    page: 'https://www.figma.com/proto/mKtUDUKJ8F8LKVewdXe7yq/Radley-Prototype?page-id=0%3A1&node-id=1%3A536&viewport=731%2C386%2C0.06&scaling=scale-down-width&starting-point-node-id=1%3A536',
    type: 'Design',
    typeText: 'Diseño UX/UI',
    typeIcon: UXUIDesignerEmoji,
  },
];

const filterOptions = [
  {
    name: 'All',
    label: 'Todos',
  },
  {
    name: 'Design',
    label: 'Diseño UX/UI',
  },
  {
    name: 'Dev',
    label: 'Desarrollo Web',
  },
];

const Projects = ({ isSmallScreen }) => {
  const [lastPage, setLastPage] = useState(0);
  const [pageNumber, setPageNumber] = useState(0);
  const [projectsList, setProjectsList] = useState(projects);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [open, setOpen] = useState(false);
  const [deviceType, setDeviceType] = useState('computer');
  const [animation, setAnimation] = useState(true);
  const [selectedProject, setSelectedProject] = useState({});
  const [galleryButtonState, setGalleryButtonState] = useState('');

  const scroll = useRef(0);

  useEffect(() => {
    scroll.current.style.transform = `translate(${-86 * pageNumber}vw)`;
  }, [pageNumber]);

  useEffect(() => {
    const lastPage = Math.floor(projectsList.length / 3);
    setLastPage(lastPage <= 1 ? 0 : lastPage);
  }, [projectsList]);

  const handleFilter = (event) => {
    const filterName = event.target.name;
    setSelectedFilter(filterName);
    if (filterName === 'All') {
      setProjectsList(projects);
    } else {
      const filteredProjects = projects.filter((project) => project.type === filterName);
      setProjectsList(filteredProjects);
    }
  };

  const handlePageChange = (isNextPage) => {
    setPageNumber(isNextPage ? pageNumber + 1 : pageNumber - 1);
  };

  const openGallery = (index) => {
    setSelectedProject(projects[index]);
    setGalleryButtonState('hover');
    setOpen(true);
    setTimeout(() => {
      document.body.setAttribute('id', 'no-overflow');
      setGalleryButtonState('');
    }, 1500);
  };

  const closeGallery = () => {
    setAnimation(false);
    document.body.removeAttribute('id');
    setTimeout(() => {
      setDeviceType('computer');
      setOpen(false);
      setAnimation(true);
    }, 1500);
  };

  return (
    <>
      <section className="m-0 projects">
        <div className="projects-header mb-48">
          <h1 className="title mb-16">
            Mi trabajo
          </h1>
          <div className="project-filter">
            {filterOptions.map((filter, index) => (
              <button
                name={filter.name}
                key={index}
                id={selectedFilter === filter.name ? 'selected' : ''}
                onClick={handleFilter}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
        <div className="position-relative">
          {
            pageNumber !== 0 && (
              <button className="pagination-button left" onClick={() => handlePageChange(false)}>
                <img src={ChevronLeftIcon} width="45" alt="Ir a la pagina anterior" />
              </button>
            )
          }
          <div className="projects-container">
            <div className="projects-scroll" ref={scroll}>
              {
                projectsList.map((project, i) => (
                  <ProjectCard
                    project={project}
                    isSmallScreen={isSmallScreen}
                    key={project.id}
                    openGallery={openGallery}
                    galleryButtonState={galleryButtonState}
                  />
                ))
              }
            </div>
          </div>
          {
            pageNumber !== lastPage && (
              <button className="pagination-button right" onClick={() => handlePageChange(true)}>
                <img src={ChevronRightIcon} width="45" alt="Ir a la siguiente pagina" />
              </button>
            )
          }
        </div>
      </section>
      {open && selectedProject
        && (
          <div id={animation ? 'modal' : 'modal-hidden'}>
            <Slider
              closeGallery={closeGallery}
              deviceType={deviceType}
              images={deviceType === 'phone' ? selectedProject.mobileGallery : selectedProject.gallery}
              index={selectedProject.id}
              key={selectedProject.id}
              mobile={selectedProject.mobileGallery}
              open={open}
              project={selectedProject}
              setDeviceType={setDeviceType}
            />
          </div>
        )}
    </>
  );
};

export default Projects;
