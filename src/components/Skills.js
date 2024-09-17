import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

// Emojis

import DeveloperEmoji from '../images/emojis/Developer.png';
import SoftSkillsEmoji from '../images/emojis/Skills.png';
import UXUIDesignerEmoji from '../images/emojis/UXUIDesigner.png';

// Icons

import ChevronRightIcon from '../images/icons/BlueChevronRight.svg';
import ChevronLeftIcon from '../images/icons/BlueChevronLeft.svg';

// Skills Images

const url = 'https://raw.githubusercontent.com/ValentinNicheglod/Portfolio/V3.0/src/images/';

const Skills = ({ layout }) => {
  const { t } = useTranslation();

  const skillsData = [
    {
      skills: [
        {
          name: t('commitment'),
          image: `${url}skills/Commitment.png`,
        },
        {
          name: t('proactivity'),
          image: `${url}skills/Proactivity.png`,
        },
        {
          name: t('detail-attention'),
          image: `${url}skills/DetailAttention.png`,
        },
        {
          name: t('creativity'),
          image: `${url}skills/Creativity.png`,
        },
        {
          name: t('flexibility'),
          image: `${url}skills/Flexibility.png`,
        },
        {
          name: t('leadership'),
          image: `${url}skills/Leadership.png`,
        },
      ],
      title: t('personal'),
      type: 'Soft',
      icon: SoftSkillsEmoji,
    },
    {
      skills: [
        {
          name: 'Adobe XD',
          image: `${url}skills/XD.png`,
        },
        {
          name: 'Illustrator',
          image: `${url}skills/Illustrator.png`,
        },
        {
          name: 'Photoshop',
          image: `${url}skills/Photoshop.png`,
        },
        {
          name: 'Figma',
          image: `${url}skills/Figma.png`,
        },
        {
          name: t('prototyping'),
          image: `${url}skills/Prototype.png`,
        },
        {
          name: 'Wireframing',
          image: `${url}skills/Wireframe.png`,
        },
      ],
      title: t('design'),
      type: 'Design',
      icon: UXUIDesignerEmoji,
    },
    {
      skills: [
        {
          name: 'Javascript',
          image: `${url}skills/JS.png`,
        },
        {
          name: 'Typescript',
          image: `${url}skills/TS.png`,
        },
        {
          name: 'Python',
          image: `${url}skills/Python.png`,
        },
        {
          name: 'HTML 5',
          image: `${url}skills/HTML.png`,
        },
        {
          name: 'CSS 3',
          image: `${url}skills/CSS.png`,
        },
        {
          name: 'GIT',
          image: `${url}skills/GIT.png`,
        },
        {
          name: 'React',
          image: `${url}skills/React.png`,
        },
        {
          name: 'Angular',
          image: `${url}skills/Angular.png`,
        },
        {
          name: 'Astro',
          image: `${url}skills/Astro.png`,
        },
        {
          name: 'Ionic',
          image: `${url}skills/Ionic.png`,
        },
        {
          name: 'Expo',
          image: `${url}skills/Expo.png`,
        },
        {
          name: 'Redux',
          image: `${url}skills/Redux.png`,
        },
        {
          name: 'Webpack',
          image: `${url}skills/Webpack.png`,
        },
        {
          name: 'RxJS',
          image: `${url}skills/Rxjs.png`,
        },
        {
          name: 'Tailwind CSS',
          image: `${url}skills/Tailwind.png`,
        },
        {
          name: 'Sass',
          image: `${url}skills/Sass.png`,
        },
        {
          name: 'Less',
          image: `${url}skills/Less.png`,
        },
        {
          name: 'Bootstrap',
          image: `${url}skills/Bootstrap.png`,
        },
        {
          name: 'Node JS',
          image: `${url}skills/Node.png`,
        },
        {
          name: 'Express',
          image: `${url}skills/Express.png`,
        },
        {
          name: 'NPM',
          image: `${url}skills/NPM.png`,
        },
        {
          name: 'Firebase',
          image: `${url}skills/Firebase.png`,
        },
        {
          name: 'Eslint',
          image: `${url}skills/Eslint.png`,
        },
        {
          name: 'Prettier',
          image: `${url}skills/Prettier.png`,
        },
        {
          name: 'MongoDB',
          image: `${url}skills/MongoDB.png`,
        },
        {
          name: 'MySQL',
          image: `${url}skills/MySQL.png`,
        },
        {
          name: 'PostgreSQL',
          image: `${url}skills/PostgreSQL.png`,
        },
        {
          name: 'Sequelize',
          image: `${url}skills/Sequelize.png`,
        },
        {
          name: 'Postman',
          image: `${url}skills/Postman.png`,
        },
        {
          name: 'GitHub',
          image: `${url}skills/GitHub.png`,
        },
      ],
      title: t('development'),
      type: 'Dev',
      icon: DeveloperEmoji,
    },
  ];

  const filterOptions = [
    {
      name: 'Soft',
      label: 'Soft Skills',
      mobileLabel: 'Soft Skills',
    },
    {
      name: 'Design',
      label: 'Design Skills',
      mobileLabel: 'Design Skills',
    },
    {
      name: 'Dev',
      label: 'Development Skills',
      mobileLabel: 'Dev Skills',
    },
  ];

  const [lastPage, setLastPage] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState('Soft');
  const [selectedSkill, setSelectedSkill] = useState(skillsData[0]);

  const scroll = useRef(null);
  const nextButton = useRef(null);
  const prevButton = useRef(null);
  let pageNumber = 0;

  const handleScroll = () => {
    const gap = window.innerWidth < 1300 ? 18 : 24;
    const containerWidth = document.getElementById('scroll-container').offsetWidth + gap;
    const displacement = -containerWidth * pageNumber;
    scroll.current.style.transform = `translateX(${displacement}px)`;
  };

  const handleButtonsState = () => {
    if (pageNumber <= 0) {
      prevButton.current.style.display = 'none';
    } else {
      prevButton.current.style.display = 'flex';
    }
    if (pageNumber === lastPage - 1 || lastPage === 0) {
      nextButton.current.style.display = 'none';
    } else {
      nextButton.current.style.display = 'flex';
    }
  };

  const handleFilter = (event, name) => {
    const filterName = name || event.target.name;
    const filteredSkills = skillsData.find((skill) => skill.type === filterName);
    setSelectedFilter(filterName);
    setSelectedSkill(filteredSkills);
  };

  const handlePageChange = (isNextPage) => {
    let actualPage = pageNumber;
    actualPage = isNextPage ? actualPage + 1 : actualPage - 1;
    pageNumber = actualPage;
    handleScroll();
    handleButtonsState();
  };

  useEffect(() => {
    handleFilter(undefined, 'Soft');
  }, []);

  useEffect(() => {
    if (layout.isDesktop) {
      const lastPage = Math.floor(selectedSkill.skills.length / 6);
      setLastPage(lastPage <= 1 ? 0 : lastPage);
      handleButtonsState();
    }
  }, [selectedSkill]);

  useEffect(() => {
    layout.isDesktop && handleButtonsState();
  }, [lastPage]);

  const Filters = () => (
    <div className="skills-filter">
      {filterOptions.map((filter, index) => (
        <button
          name={filter.name}
          key={index}
          id={selectedFilter === filter.name ? 'selected-white' : ''}
          onClick={handleFilter}
        >
          {layout.isDesktop ? filter.label : filter.mobileLabel}
        </button>
      ))}
    </div>
  );

  const DesktopSkills = () => (
    <>
      <Filters />
      <div className="d-flex justify-content-between">
        <div className="d-flex align-items-center">
          <img src={selectedSkill.icon} alt="" width="96" height="96" />
          <div className="ml-4">
            <h1 className="skills-title">
              {selectedSkill.type}
              <br />
              Skills
            </h1>
          </div>
        </div>
        <div className="skills-container">
          <div className="position-relative">
            <button
              className="pagination-button left"
              onClick={() => handlePageChange(false)}
              ref={prevButton}
              style={{ display: 'none' }}
            >
              <i className="bi bi-chevron-left white" />
            </button>
            <SkillsList />
            <button
              className="pagination-button right"
              onClick={() => handlePageChange(true)}
              ref={nextButton}
              style={{ display: 'none' }}
            >
              <i className="bi bi-chevron-right white" />
            </button>
          </div>
        </div>
      </div>
    </>
    /* <div className="skills-group">
    {skillObject.skills.map((skillGroup, index) => (
      <ul key={index}>
        {skillGroup.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    ))}
  </div> */
  );

  const MobileSkills = () => (
    <>
      <div className="d-flex align-items-center">
        <img src={SoftSkillsEmoji} alt="" width="64" height="64" />
        <div className="ml-2">
          <h1 className="skills-title">
            Skills
          </h1>
        </div>
      </div>
      <Filters />
      <SkillsList />
    </>
  );

  const SkillCard = ({ skill }) => (
    <div className="skill-card">
      <img src={skill.image} alt={`${skill.name} Logo`} />
      <span className="center-text">
        {skill.name}
      </span>
    </div>
  );

  const SkillsList = () => (
    <div className="skills-scroll-container" id="scroll-container">
      {/* <div className="skills-scroll position-relative" id="scroll" ref={scroll}>
        {selectedSkill.skills.map((skill, index) => (
          <SkillCard skill={skill} key={index} />
        ))}
      </div> */}
      {skillsData.map((skill) => (
        <div
          className={selectedSkill.type === skill.type ? 'skills-scroll position-relative' : 'skills-scroll position-absolute z-index-0 start-0'}
          id="scroll"
          ref={scroll}
        >
          {skill.skills.map((skill, index) => (
            <SkillCard skill={skill} key={index} />
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <section className="skills">
      {/* <DesktopSkills /> */}
      {layout.isTablet
        ? <MobileSkills />
        : <DesktopSkills />
      }
    </section>
  );
};

export default Skills;
