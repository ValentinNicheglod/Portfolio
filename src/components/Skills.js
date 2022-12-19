import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

// Emojis

import SkillsEmoji from '../images/emojis/Skills.png';

const Skills = ({ layout }) => {
  const { t } = useTranslation();

  const skillsList = [
    {
      type: t('personal'),
      skills: [[t('detail-attention'), t('adaptability'), t('proactivity'), t('commitment')]],
      mobileSkills: [t('detail-attention-2'), t('adaptability'), t('proactivity'), t('commitment')],
    },
    {
      type: t('design'),
      skills: [['Figma', 'Adobe XD', 'Adobe Photoshop', 'Adobe Illustrator']],
      mobileSkills: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator'],
    },
    {
      type: t('development'),
      skills: [['Javascript', 'Typescript', 'HTML', 'CSS'], ['React JS', 'React Native', 'Redux', 'Node Js'], ['Express', 'SQL', 'Sequelize', 'Firebase']],
      mobileSkills: ['Javascript', 'Typescript', 'HTML', 'CSS'],
      extraSkills: [['React', 'React Native', 'Redux', 'NodeJS'], ['Express', 'SQL', 'Sequelize', 'Firebase']],
    },
  ];

  const [showAllSkills, setShowAllSkills] = useState(false);

  const handleSkillsState = () => {
    setShowAllSkills(!showAllSkills);
  };

  const desktopSkillsGroup = (skillObject) => (
    <div className="skills-group">
      {skillObject.skills.map((skillGroup, index) => (
        <ul key={index}>
          {skillGroup.map((skill) => (
            <li key={skill}>{skill}</li>
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
            <p key={index} name={skill}>{skill}</p>
          ))}
        </div>
        {!showAllSkills && skillObject.extraSkills && <button className="expand-skills-btn" onClick={handleSkillsState}>+8</button>}
      </div>
      {showAllSkills && skillObject.extraSkills?.map((skillGroup, index) => (
        <div key={index} className="skills-group-cont">
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
            {layout.isTablet
              ? mobileSkillsGroup(skillObject, index)
              : desktopSkillsGroup(skillObject)}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
