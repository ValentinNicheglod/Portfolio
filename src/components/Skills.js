import React from 'react';

const Skills = () => {

    return (
        <div className="bg-5 min skills m-0 p-4">
                <div>
                    <h1 className="display-3 white title">
                        Mis habilidades...
                    </h1>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="card w-75 p-5">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="d-flex justify-content-center align-items-center h-50">
                                    <img 
                                        draggable={false} 
                                        src="front.svg" 
                                        alt="" 
                                        style={{width:"70%", aspectRatio: 1/1}}
                                    />
                                </div>
                                <hr/>
                                <div className="d-flex justify-content-center">
                                    <h6 className="display-6 mb-4">FRONT END</h6>
                                </div>
                                <div>
                                    <div className="d-flex col justify-content-around mb-3">
                                        <img 
                                            draggable={false} 
                                            src="https://img.icons8.com/color/48/000000/bootstrap.png" 
                                            alt="" 
                                            width="55" 
                                            height="55" 
                                            title="Bootstrap"
                                        />
                                        <img 
                                            draggable={false} 
                                            src="https://img.icons8.com/color/48/000000/css3.png" 
                                            alt="" 
                                            width="55" 
                                            height="55" 
                                            title="CSS 3"
                                        />
                                        <img 
                                            draggable={false} 
                                            src="https://img.icons8.com/color/48/000000/html-5.png" 
                                            alt="" 
                                            title="HTML 5"
                                        />
                                    </div>
                                    <div className="d-flex col justify-content-around mb-3">
                                        <img 
                                            draggable={false} 
                                            src="https://img.icons8.com/windows/55/000000/less-logo.png" 
                                            alt="" 
                                            title="Less"
                                        />
                                        <img 
                                            draggable={false} 
                                            src="https://img.icons8.com/color/48/000000/react-native.png" 
                                            alt="" 
                                            width="55" 
                                            height="55" 
                                            title="React JS y React Native"
                                        />
                                        <img 
                                            draggable={false} 
                                            src="https://img.icons8.com/windows/48/000000/redux.png" 
                                            alt="" 
                                            title="Redux"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="d-flex justify-content-center h-50">
                                    <img 
                                        draggable={false} 
                                        src="back.svg" 
                                        alt="" 
                                        style={{width:"70%", aspectRatio: 1/1}}
                                    />
                                </div>
                                <hr/>
                                <div className="d-flex justify-content-center">
                                    <h6 className="display-6 mb-4">BACK END</h6>
                                </div>
                                <div className="d-flex col justify-content-around mb-3">
                                    <img 
                                        draggable={false} 
                                        src="skills/express.png" 
                                        alt="" 
                                        width="70" 
                                        height="65" 
                                        title="Express"
                                    />
                                    <img 
                                        draggable={false} 
                                        src="skills/mysql.png" 
                                        alt="" 
                                        width="55" 
                                        height="55" 
                                        title="MySQL"
                                    />
                                    <img 
                                        draggable={false} 
                                        src="https://img.icons8.com/color/55/000000/nodejs.png" 
                                        alt="" 
                                        title="Node JS"
                                    />
                                </div>
                                <div className="d-flex col justify-content-around">
                                    <img 
                                        draggable={false} 
                                        src="https://img.icons8.com/color/55/000000/postgreesql.png" 
                                        alt="" 
                                        title="PostgreSQL"
                                    />
                                    <img 
                                        draggable={false} 
                                        src="skills/sequelize.png" 
                                        alt="" 
                                        width="55" 
                                        height="55" 
                                        title="Sequelize"
                                    />
                                </div>
                            </div>
                            <div className="d-flex justify-content-center row mt-4">
                                <hr/>
                                <h6 className="display-6 d-flex justify-content-center mb-4 ">
                                    LENGUAJES Y UTILIDADES
                                </h6>
                                <div className="d-flex col justify-content-around">
                                    <img 
                                        draggable={false} 
                                        src="https://img.icons8.com/color/48/000000/git.png" 
                                        alt="" 
                                        width="55" 
                                        height="55" 
                                        title="Git"
                                    />
                                    <img 
                                        draggable={false} 
                                        src="https://img.icons8.com/color/48/000000/github.png" 
                                        alt="" 
                                        width="55" 
                                        height="55" 
                                        title="GitHub"
                                    />
                                    <img 
                                        draggable={false} 
                                        src="https://img.icons8.com/color/48/000000/javascript.png" 
                                        alt="" 
                                        width="55" 
                                        height="55" 
                                        title="JavaScript"
                                    />
                                    <img 
                                        draggable={false} 
                                        src="skills/json.png" 
                                        alt="" 
                                        width="55" 
                                        height="55" 
                                        title="JSON"
                                    />
                                    <img 
                                        draggable={false} 
                                        src="https://img.icons8.com/color/48/000000/npm.png" 
                                        alt="" 
                                        width="55" 
                                        height="55" 
                                        title="NPM"
                                    />
                                    <img 
                                        draggable={false} 
                                        src="https://img.icons8.com/color/48/000000/typescript.png" 
                                        alt="" 
                                        width="55" 
                                        height="55" 
                                        title="TypeScript"
                                    />
                                    <img 
                                        draggable={false} 
                                        src="skills/webpack.png" 
                                        alt="" 
                                        width="55" 
                                        height="55" 
                                        title="Webpack"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
};

export default Skills;
