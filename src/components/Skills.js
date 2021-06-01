import React from 'react';
import { Tooltip } from '@material-ui/core';
import animateScrollTo from 'animated-scroll-to';

const backend = [
  [
    {
      src: 'skills/express.png',
      title: 'Express',
    },
    {
      src: 'skills/mysql.png',
      title: 'MySQL',
    },
    {
      src: 'https://img.icons8.com/color/55/000000/nodejs.png',
      title: 'NodeJS',
    },
  ],
  [
    {
      src: 'https://img.icons8.com/color/55/000000/postgreesql.png',
      title: 'PostgreSQL',
    },
    {
      src: 'skills/sequelize.png',
      title: 'Sequelize',
    },
  ],
];

const frontend = [
  [
    {
      src: 'https://img.icons8.com/color/55/000000/bootstrap.png',
      title: 'Bootstrap',
    },
    {
      src: 'https://img.icons8.com/color/55/000000/css3.png',
      title: 'CSS 3',
    },
    {
      src: 'https://img.icons8.com/color/55/000000/html-5.png',
      title: 'HTML 5',
    },
  ],
  [
    {
      src: 'https://img.icons8.com/windows/55/000000/less-logo.png',
      title: 'Less',
    },
    {
      src: 'https://img.icons8.com/color/55/000000/react-native.png',
      title: 'React JS y React Native',
    },
    {
      src: 'https://img.icons8.com/windows/55/000000/redux.png',
      title: 'Redux',
    },
  ],
];
const others = [
  {
    src: 'https://img.icons8.com/color/55/000000/git.png',
    title: 'Git',
  }, {
    src: 'https://img.icons8.com/ios-filled/55/000000/github.png',
    title: 'GitHub',
  }, {
    src: 'https://img.icons8.com/color/55/000000/javascript.png',
    title: 'Javascript',
  }, {
    src: 'skills/json.png',
    title: 'JSON',
  }, {
    src: 'https://img.icons8.com/color/55/000000/npm.png',
    title: 'NPM',
  }, {
    src: 'https://img.icons8.com/color/55/000000/typescript.png',
    title: 'Typescript',
  }, {
    src: 'skills/webpack.png',
    title: 'Webpack',
  },
];

const Skills = () => (
  <div className="bg-5 min skills responsive-cont m-0 p-4">
    <div>
      <h1 className="display-3 white title skills-title">
        Tech skills...
      </h1>
    </div>
    <div className="d-flex justify-content-center align-items-center h-90">
      <div className="card w-75 p-5 shadow">
        <div className="row">
          <div className="w-50 fit-content">
            <div className="skill-title skill-title-1">
              <h6 className="display-6 m-0">FRONT END</h6>
              <div className="card-icon">
                <img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAiElEQVRIS2NkoDFgpLH5DHS3wIGBgWE+AwODApk+e8DAwJDIwMBwAKYf3QcgBfJkGg7TBjJDEZcF/6ES5AYdhn50g0YtGA0iggl4NIiGQBBRoyx6iFxYohcVBgwMDOcJBgR+BYYMDAwXsBV2sCRGoflw7WDHI/uA5hZQy+Uo5pBb7hPtmKFvAQCemyEZ3hVsZQAAAABJRU5ErkJggg==" />
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center skill-ilustration">
              <img
                draggable={false}
                // src="ilustrations/front.svg"
                src="https://valentinnicheglod.github.io/Portfolio/ilustrations/front.svg"
                alt=""
                className="skill-img"
                height="320"
              />
            </div>
            <hr />

            <div>
              {frontend.map((row, i) => (
                <div className="d-flex col justify-content-around mb-3" key={i}>
                  {row.map((icon, i) => (
                    <Tooltip title={icon.title} placement="right" key={i}>
                      <div>
                        <img
                          draggable={false}
                          src={icon.src}
                          alt="skill-icon"
                          width="55"
                        />
                      </div>
                    </Tooltip>
                  ))}
                </div>
              ))}

            </div>
          </div>
          <div className="w-50 fit-content">
            <div className="skill-title">
              <div className="card-icon">
                <img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAlklEQVRIS2NkoDFgpLH5DHS1wIGBgWE+AwODAoW+esDAwJDIwMBwAGQOsg9AEvIUGg7TDjJLEd2C/1BZSoMNxRxkw0i1AFk9LjZKEA06C3BFF84g+sDAwMBPpUh+CEuNyHEASqYLqJCSQIYnYEumVHI8qjGUJkmCjkIPotGcDAqy0ZxMMOGM5mSCQYSigK45mTSnEakaAEn1LBkSFpfeAAAAAElFTkSuQmCC" />
              </div>
              <h6 className="display-6 m-0">BACK END</h6>
            </div>
            <div className="d-flex justify-content-center align-items-center skill-ilustration">
              <img
                draggable={false}
                // src="ilustrations/back.svg"
                src="https://valentinnicheglod.github.io/Portfolio/ilustrations/back.svg"
                alt=""
                className="skill-img"
                height="270"
              />
            </div>
            <hr />
            <div>
              {backend.map((row, i) => (
                <div className="d-flex col justify-content-around mb-3" key={i}>
                  {row.map((icon, i) => (
                    <Tooltip title={icon.title} placement="right" key={i}>
                      <div>
                        <img
                          draggable={false}
                          src={icon.src}
                          alt="skill-icon"
                          width="55"
                        />
                      </div>
                    </Tooltip>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <hr />
          <div className="d-flex justify-content-center row">

            <div className="d-flex col justify-content-around">
              {
                others.map((icon, i) => (
                  <Tooltip title={icon.title} placement="right" key={i}>
                    <div>
                      <img
                        draggable={false}
                        src={icon.src}
                        alt="skill-icon"
                        width="55"
                      />
                    </div>
                  </Tooltip>
                ))
                }
            </div>
          </div>
        </div>
      </div>
      <button className="btn more-info more-info2" onClick={() => animateScrollTo(window.innerHeight * 3)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
          <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
        </svg>
      </button>
    </div>
  </div>
);

export default Skills;
