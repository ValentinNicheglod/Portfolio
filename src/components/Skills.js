import { Tooltip } from '@material-ui/core';
import React from 'react';

const backend = [
    [
        {
            src: "skills/express.png",
            title: "Express"
        },
        {
            src: "skills/mysql.png",
            title: "MySQL"
        },
        {
            src: "https://img.icons8.com/color/55/000000/nodejs.png",
            title: "NodeJS"
        }
    ],
    [
        {
            src: "https://img.icons8.com/color/55/000000/postgreesql.png",
            title: "PostgreSQL"
        },
        {
            src: "skills/sequelize.png",
            title: "Sequelize"
        }
    ]
];

const frontend = [
    [
        {
            src: "https://img.icons8.com/color/55/000000/bootstrap.png",
            title: "Bootstrap"
        },
        {
            src: "https://img.icons8.com/color/55/000000/css3.png",
            title: "CSS 3"
        },
        {
            src: "https://img.icons8.com/color/55/000000/html-5.png",
            title: "HTML 5"
        }
    ],
    [
        {
            src: "https://img.icons8.com/windows/55/000000/less-logo.png",
            title: "Less"
        },
        {
            src: "https://img.icons8.com/color/55/000000/react-native.png",
            title: "React JS y React Native"
        },
        {
            src: "https://img.icons8.com/windows/55/000000/redux.png",
            title: "Redux"
        }
    ]
];
const others = [
    {
        src: 'https://img.icons8.com/color/55/000000/git.png',
        title: 'Git'
    },{
        src: 'https://img.icons8.com/ios-filled/55/000000/github.png',
        title: 'GitHub'
    },{
        src: 'https://img.icons8.com/color/55/000000/javascript.png',
        title: 'Javascript'
    },{
        src: 'skills/json.png',
        title: 'JSON'
    },{
        src: 'https://img.icons8.com/color/55/000000/npm.png',
        title: 'NPM'
    },{
        src: 'https://img.icons8.com/color/55/000000/typescript.png',
        title: 'Typescript'
    },{
        src: 'skills/webpack.png',
        title: 'Webpack'
    }
]

const Skills = () => {

    return (
        <div className="bg-5 min skills m-0 p-4">
                <div>
                    <h1 className="display-3 white title">
                        Tech skills...
                    </h1>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="card w-75 p-5 shadow">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="d-flex justify-content-center h-50">
                                    <img 
                                        draggable={false} 
                                        src="front.svg" 
                                        alt="" 
                                        className="skill-img"
                                    />
                                </div>
                                <hr/>
                                <div className="d-flex justify-content-center">
                                    <h6 className="display-6 mb-4">FRONT END</h6>
                                </div>
                                <div>
                                    {frontend.map((row, i) => (
                                        <div className="d-flex col justify-content-around mb-3" key={i}>
                                            {row.map((icon, i) => (
                                                <Tooltip title={icon.title} placement="right">
                                                    <div>
                                                        <img 
                                                            draggable={false} 
                                                            src={icon.src}
                                                            alt="skill-icon"  
                                                        />
                                                    </div>
                                                </Tooltip>
                                            ))}
                                        </div>
                                    ))}
                                    
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="d-flex justify-content-center h-50">
                                    <img 
                                        draggable={false} 
                                        src="back.svg" 
                                        alt="" 
                                        className="skill-img"
                                    />
                                </div>
                                <hr/>
                                <div className="d-flex justify-content-center">
                                    <h6 className="display-6 mb-4">BACK END</h6>
                                </div>
                                <div>
                                    {backend.map((row, i) => (
                                        <div className="d-flex col justify-content-around mb-3" key={i}>
                                            {row.map((icon, i) => (
                                                <Tooltip title={icon.title} placement="right">
                                                    <div>
                                                        <img 
                                                            draggable={false} 
                                                            src={icon.src}
                                                            alt="skill-icon"  
                                                        />
                                                    </div>
                                                </Tooltip>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="d-flex justify-content-center row mt-4">
                                <hr/>
                                <h6 className="display-6 d-flex justify-content-center mb-4 ">
                                    LENGUAJES Y UTILIDADES
                                </h6>
                                <div className="d-flex col justify-content-around">
                                    {
                                        others.map((icon, i) => (
                                            <Tooltip title={icon.title} placement="right" key={i}>
                                                <div>
                                                    <img 
                                                        draggable={false} 
                                                        src={icon.src}
                                                        alt="skill-icon"  
                                                    />
                                                </div>
                                            </Tooltip>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
};

export default Skills;
