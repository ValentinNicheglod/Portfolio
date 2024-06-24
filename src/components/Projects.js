import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import ProjectCard from './ProjectCard';
import Slider from './Slider';

// Emojis

import UXUIDesignerEmoji from '../images/emojis/UXUIDesigner.png';
import DeveloperEmoji from '../images/emojis/Developer.png';

// Backgrounds

import MeteorBG from '../images/MeteorBG.png';
import ReconnectBG from '../images/ReconnectBG.png';
import RadleyBG from '../images/RadleyBG.png';

// Icons

import ChevronRightIcon from '../images/icons/BlueChevronRight.svg';
import ChevronLeftIcon from '../images/icons/BlueChevronLeft.svg';
import MeteorIcon from '../images/logos/meteor.png';
import ReconnectIcon from '../images/logos/reconnect.png';
import RadleyIcon from '../images/logos/radley.png';

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      name: 'ReConnect',
      id: 0,
      subtitle: t('reconnect-subtitle'),
      backgroundImage: ReconnectBG,
      icon: ReconnectIcon,
      description: t('reconnect-description'),
      gallery: ['reconnect/Pricing%20Page'],
      mobileGallery: ['reconnect/Pricing%20Page'],
      github: 'https://github.com/valentinnicheglod1/pricing-page',
      page: 'https://valentinnicheglod1.github.io/pricing-page/',
      type: 'Dev',
      typeText: t('web-development'),
      typeIcon: DeveloperEmoji,
    },
    {
      name: 'Meteor',
      id: 1,
      subtitle: t('meteor-subtitle'),
      backgroundImage: MeteorBG,
      icon: MeteorIcon,
      description: t('meteor-description'),
      gallery: [{ id: 'vertical', path: 'meteor/Login' }, 'meteor/Registro', 'meteor/Home', { id: 'vertical', path: 'meteor/Favoritos' }, { id: 'vertical', path: 'meteor/Producto' }, { id: 'vertical', path: 'meteor/Buscar' }, { id: 'vertical', path: 'meteor/Bolsa' }, 'meteor/Checkout', { id: 'vertical', path: 'meteor/Cuenta' }],
      behance: 'https://www.behance.net/gallery/158637771/Meteor-UX-Case-Study',
      page: 'https://www.figma.com/proto/Ehw4AATRdzR9nvnOSarXC5/Meteor-Prototype?page-id=0%3A1&node-id=0%3A1&viewport=1446%2C517%2C0.17&scaling=min-zoom&starting-point-node-id=1%3A2821&show-proto-sidebar=1',
      type: 'Design',
      typeText: t('uxui-design'),
      typeIcon: UXUIDesignerEmoji,
    },
    {
      name: 'Radley',
      id: 2,
      subtitle: t('radley-subtitle'),
      backgroundImage: RadleyBG,
      icon: RadleyIcon,
      description: t('radley-description'),
      gallery: [{ path: 'radley/Inicio', scrollable: true }, 'radley/Login', 'radley/Registrarse', { path: 'radley/ProductosRecomendados', scrollable: true }, { path: 'radley/Producto', scrollable: true }, { path: 'radley/Bolsa', scrollable: true }, { path: 'radley/Checkout1', scrollable: true }, { path: 'radley/Checkout2', scrollable: true }, { path: 'radley/Checkout3', scrollable: true }],
      hasScrollablePrototype: true,
      behance: 'https://www.behance.net/gallery/159262049/Radley',
      page: 'https://www.figma.com/proto/mKtUDUKJ8F8LKVewdXe7yq/Radley-Prototype?page-id=0%3A1&node-id=1%3A536&viewport=731%2C386%2C0.06&scaling=scale-down-width&starting-point-node-id=1%3A536',
      type: 'Design',
      typeText: t('uxui-design'),
      typeIcon: UXUIDesignerEmoji,
    },
  ];

  const filterOptions = [
    {
      name: 'All',
      label: t('all'),
    },
    {
      name: 'Design',
      label: t('uxui-design'),
    },
    {
      name: 'Dev',
      label: t('web-development'),
    },
  ];

  const [lastPage, setLastPage] = useState(0);
  const [projectsList, setProjectsList] = useState(projects);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [open, setOpen] = useState(false);
  const [deviceType, setDeviceType] = useState('computer');
  const [animation, setAnimation] = useState(true);
  const [selectedProject, setSelectedProject] = useState({});
  const [galleryButtonState, setGalleryButtonState] = useState('');

  const scroll = useRef(null);

  let pageNumber = 0;

  useEffect(() => {
    const lastPage = Math.ceil(projectsList.length / 3);
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
    pageNumber = isNextPage ? pageNumber + 1 : pageNumber - 1;
    scroll.current.style.transform = `translateX(${-86 * pageNumber}vw)`;
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

  const Filters = () => (
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
  );

  const PreviousButton = () => (
    <>
      {
        pageNumber !== 0 && (
          <button className="pagination-button left" onClick={() => handlePageChange(false)}>
            <img src={ChevronLeftIcon} width="45" alt="Ir a la pagina anterior" />
          </button>
        )
      }
    </>
  );

  const NextButton = () => (
    <>
      {
        pageNumber !== lastPage && (
          <button className="pagination-button right" onClick={() => handlePageChange(true)}>
            <img src={ChevronRightIcon} width="45" alt="Ir a la siguiente pagina" />
          </button>
        )
      }
    </>
  );

  const ProjectsContainer = () => (
    <div className="position-relative">
      <PreviousButton />
      <div className="projects-container">
        <div className="projects-scroll" ref={scroll}>
          {
            projectsList.map((project) => (
              <ProjectCard
                project={project}
                key={project.id}
                openGallery={openGallery}
                galleryButtonState={galleryButtonState}
              />
            ))
          }
        </div>
      </div>
      <NextButton />
    </div>
  );

  return (
    <>
      <section className="m-0 projects">
        <div className="projects-header mb-48">
          <h1 className="title mb-16">
            {t('projects')}
          </h1>
          <Filters />
        </div>
        <ProjectsContainer />
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
