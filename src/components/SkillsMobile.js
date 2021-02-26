import React from 'react'

const skills = [
    {
        name: 'FRONT END',
        img: 'front',
        skills: ['Bootstrap', 'CSS 3', 'HTML 5', 'Less','Material UI', 'React', 'React Native', 'Redux' ]
    },
    {
        name: 'BACK END',
        img: 'back',
        skills: ['Express', 'MySQL', 'Node JS', 'Postgresql','Sequelize']
    },
    {
        name: 'LENGUAJES Y UTILIDADES',
        img: 'others',
        skills: ['Git', 'GitHub', 'JavaScript', 'JSON','NPM', 'TypeScript', 'Webpack']
    }
]

const SkillsMobile = () => {

    return (
        <div className="bg-5 min skills m-0">
            <div className="p-4">
                <div>
                     <h1 className="display-3 white title">
                        Mis habilidades...
                    </h1>
                </div>
                <div className="d-flex justify-content-center align-items-center row">
                    {
                        skills.map(card => (
                            <div className="card p-4 d-flex justify-content-center mb-2">
                                <div className="d-flex justify-content-center align-items-end col mb-3">
                                    <img draggable={false} src={`${card.img}.png`} alt="" style={{width:"50%", aspectRatio: 1/1}}/>
                                    <h4 className="display-4 m-0">{card.name}</h4>
                                </div>
                                <div className="">
                                    <ul>
                                        {
                                            card.skills.map(skill => (
                                                <li className="list-item">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#5A38FD" className="bi bi-check2" viewBox="0 0 16 16">
                                                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                                                    </svg>
                                                    &nbsp;&nbsp;{skill}
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        ))
                    }
                 {/*   <div className="card w-75 p-5">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="d-flex justify-content-center">
                                    <img draggable={false} src="/front.png" alt="" style={{width:"70%", aspectRatio: 1/1}}/>
                                </div>
                                <hr/>
                                <div className="d-flex justify-content-center">
                                    <h6 className="display-6 mb-4">FRONT END</h6>
                                </div>
                                <div className="d-flex col justify-content-around mb-3">
                                    <img draggable={false} src="https://img.icons8.com/color/48/000000/bootstrap.png" alt="" width="55" height="55" title="Bootstrap"/>
                                    <img draggable={false} src="https://img.icons8.com/color/48/000000/css3.png" alt="" width="55" height="55" title="CSS 3"/>
                                    <img draggable={false} src="https://img.icons8.com/color/48/000000/html-5.png" alt="" title="HTML 5"/>
                                </div>
                                <div className="d-flex col justify-content-around mb-3">
                                    <img draggable={false} src="https://img.icons8.com/windows/55/000000/less-logo.png" alt="" title="Less"/>
                                    <img draggable={false} src="https://img.icons8.com/color/48/000000/material-ui.png" alt="" width="55" height="55" title="Material UI"/>
                                    <img draggable={false} src="https://img.icons8.com/color/48/000000/react-native.png" alt="" width="55" height="55" title="React JS y React Native"/>
                                </div>
                                <div className="d-flex col justify-content-around mb-3">
                                    <img draggable={false} src="https://img.icons8.com/windows/48/000000/redux.png" alt="" title="Redux"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="d-flex justify-content-center">
                                    <img draggable={false} src="/back.png" alt="" style={{width:"70%", aspectRatio: 1/1}}/>
                                </div>
                                <hr/>
                                <div className="d-flex justify-content-center">
                                    <h6 className="display-6 mb-4">BACK END</h6>
                                </div>
                                <div className="d-flex col justify-content-around mb-3">
                                    <img draggable={false} src="./express.png" alt="" width="70" height="65" title="Express"/>
                                    <img draggable={false} src="./mysql.png" alt="" width="55" height="55" title="MySQL"/>
                                    <img draggable={false} src="https://img.icons8.com/color/55/000000/nodejs.png" alt="" title="Node JS"/>
                                </div>
                                <div className="d-flex col justify-content-around">
                                    <img draggable={false} src="https://img.icons8.com/color/55/000000/postgreesql.png" alt="" title="PostgreSQL"/>
                                    <img draggable={false} src="./sequelize.png" alt="" width="55" height="55" title="Sequelize"/>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center row">
                                <hr/>
                                <h6 className="display-6 d-flex justify-content-center mb-4 ">{smallScreen ? 'OTROS' : 'LENGUAJES Y UTILIDADES' }</h6>
                                <div className="d-flex col justify-content-around">
                                    <img draggable={false} src="https://img.icons8.com/color/48/000000/git.png" alt="" width="55" height="55" title="Git"/>
                                    <img draggable={false} src="https://img.icons8.com/color/48/000000/github.png" alt="" width="55" height="55" title="GitHub"/>
                                    <img draggable={false} src="https://img.icons8.com/color/48/000000/javascript.png" alt="" width="55" height="55" title="JavaScript"/>
                                    <img draggable={false} src="/json.png" alt="" width="55" height="55" title="JSON"/>
                                    <img draggable={false} src="https://img.icons8.com/color/48/000000/npm.png" alt="" width="55" height="55" title="NPM"/>
                                    <img draggable={false} src="https://img.icons8.com/color/48/000000/typescript.png" alt="" width="55" height="55" title="TypeScript"/>
                                    <img draggable={false} src="/webpack.png" alt="" width="55" height="55" title="Webpack"/>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default SkillsMobile;
