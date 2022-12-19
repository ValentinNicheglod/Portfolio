import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import ProjectCard from './ProjectCard';
import Slider from './Slider';

// Emojis

import UXUIDesignerEmoji from '../images/emojis/UXUIDesigner.png';
import DeveloperEmoji from '../images/emojis/Developer.png';

// Backgrounds

import MeteorBG from '../images/MeteorBG.jpg';
import NotatkyBG from '../images/NotatkyBG.jpg';
import RadleyBG from '../images/RadleyBG.jpg';

// Icons

import ChevronRightIcon from '../images/icons/BlueChevronRight.svg';
import ChevronLeftIcon from '../images/icons/BlueChevronLeft.svg';
import MeteorIcon from '../images/logos/meteor.png';
import NotatKyIcon from '../images/logos/notatKy.png';
import RadleyIcon from '../images/logos/radley.png';

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      name: 'NotatKy',
      id: 0,
      subtitle: t('notatky-subtitle'),
      backgroundImage: NotatkyBG,
      icon: NotatKyIcon,
      description: t('notatky-description'),
      gallery: ['notatky/V2/Inicio', 'notatky/V2/GuestMode', 'notatky/V2/Login', 'notatky/V2/Login2', 'notatky/V2/SignUp', 'notatky/V2/SignUp2', 'notatky/V2/PasswordReset1', 'notatky/V2/PasswordReset2', 'notatky/V2/PasswordReset3', 'notatky/V2/Home', 'notatky/V2/Note', 'notatky/V2/TagModal', 'notatky/V2/Archive', 'notatky/V2/Trash', 'notatky/V2/Profile', 'notatky/V2/Profile2', 'notatky/V2/Profile3', 'notatky/V2/CollectionsTags', 'notatky/V2/CollectionsTags2'],
      mobileGallery: ['notatky/mobile/1', 'notatky/mobile/2', 'notatky/mobile/3', 'notatky/mobile/4', 'notatky/mobile/14', 'notatky/mobile/15', 'notatky/mobile/16', 'notatky/mobile/6', 'notatky/mobile/8', 'notatky/mobile/9', 'notatky/mobile/7', 'notatky/mobile/11', 'notatky/mobile/10', 'notatky/mobile/12', 'notatky/mobile/13'],
      github: 'https://github.com/ValentinNicheglod/NotatKy-',
      page: 'https://valentinnicheglod.github.io/NotatKy/#/',
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

  const ProjectsContainer = () => (
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
        <div className="position-relative">
          {
            pageNumber !== 0 && (
              <button className="pagination-button left" onClick={() => handlePageChange(false)}>
                <img src={ChevronLeftIcon} width="45" alt="Ir a la pagina anterior" />
              </button>
            )
          }
          <ProjectsContainer />
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
