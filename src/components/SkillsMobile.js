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
                                    <img 
                                        draggable={false} src={`${card.img}.png`} 
                                        alt="" style={{width:"50%", aspectRatio: 1/1}}
                                    />
                                    <h4 className="display-4 m-0">{card.name}</h4>
                                </div>
                                <div>
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
                </div>
            </div>
        </div>
    )
}

export default SkillsMobile;
