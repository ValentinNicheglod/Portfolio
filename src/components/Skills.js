import React, { useState } from 'react';

// Emojis

import SkillsEmoji from '../images/emojis/Skills.png';

// Skills

const skillsList = [
  {
    type: 'Personales',
    skills: [['Atención al detalle', 'Adaptabilidad', 'Proactividad', 'Compromiso']],
    mobileSkills: ['Detallismo', 'Adaptabilidad', 'Proactividad', 'Compromiso'],
  },
  {
    type: 'Diseño',
    skills: [['Figma', 'Adobe XD', 'Adobe Photoshop', 'Adobe Illustrator']],
    mobileSkills: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator'],
  },
  {
    type: 'Desarrollo',
    skills: [['Javascript', 'Typescript', 'HTML', 'CSS'], ['React JS', 'React Native', 'Redux', 'Node Js'], ['Express', 'SQL', 'Sequelize', 'Firebase']],
    mobileSkills: ['Javascript', 'Typescript', 'HTML', 'CSS'],
    extraSkills: [['React', 'React Native', 'Redux', 'NodeJS'], ['Express', 'SQL', 'Sequelize', 'Firebase']],
  },
];

const Skills = ({ isSmallScreen }) => {
  const [showAllSkills, setShowAllSkills] = useState(false);

  const handleSkillsState = () => {
    setShowAllSkills(!showAllSkills);
  };

  const desktopSkillsGroup = (skillObject) => (
    <div className="skills-group">
      {skillObject.skills.map((skillGroup) => (
        <ul>
          {skillGroup.map((skill) => (
            <li>{skill}</li>
          ))}
        </ul>
      ))}
    </div>
  );

  const mobileSkillsGroup = (skillObject, index) => (
    <div>
      <div className="skills-group-cont">
        <div className="skills-group" tabIndex={index}>
          {skillObject.mobileSkills.map((skill, index) => (
            <p key={index}>{skill}</p>
          ))}
        </div>
        {!showAllSkills && skillObject.extraSkills && <button className="expand-skills-btn" onClick={handleSkillsState}>+8</button>}
      </div>
      {showAllSkills && skillObject.extraSkills?.map((skillGroup, index) => (
        <div className="skills-group-cont">
          <div className="skills-group mt-8">
            {skillGroup.map((skill, index) => (
              <p key={index}>{skill}</p>
            ))}
          </div>
          {index !== skillObject.extraSkills?.length - 2 && <button className="expand-skills-btn mt-8" onClick={handleSkillsState}>-</button>}
        </div>
      ))}
    </div>
  );

  return (
    <section className="skills">
      <div className="skills-title-cont">
        <h1 className="skills-title mb-8">Skills</h1>
        <img src={SkillsEmoji} alt="" />
      </div>
      <div className="skills-container">
        {skillsList.map((skillObject, index) => (
          <div key={index}>
            <h2>
              <b className="white">{skillObject.type}</b>
            </h2>
            {isSmallScreen
              ? mobileSkillsGroup(skillObject, index)
              : desktopSkillsGroup(skillObject)}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
