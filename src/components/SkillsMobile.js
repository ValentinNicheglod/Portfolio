import React from 'react'

const skills = [
    {
        name: 'FRONT END',
        img: 'frontend',
        skills: ['Bootstrap', 'CSS 3', 'HTML 5', 'Less','Material UI', 'React', 'React Native', 'Redux' ],
        colors: ['#ff5722', '#e91e63'],
        background: 'green'
    },
    {
        name: 'BACK END',
        img: 'backend',
        skills: ['Express', 'MySQL', 'Node JS', 'Postgresql','Sequelize'],
        colors: ['#009688', '#66bb6a'],
        background: 'yellow'
    },
    {
        name: 'GENERAL',
        img: 'other',
        skills: ['Git', 'GitHub', 'JavaScript', 'JSON','NPM', 'TypeScript', 'Webpack'],
        colors: ['#ffc107', '#ff5722'],
        background: 'purple'
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
                            <div 
                                className="card p-4 d-flex justify-content-center mb-2 skill-bg" 
                                //style={{background: `linear-gradient(315deg, ${card.colors[0]}, ${card.colors[1]}`}}
                                style={{background: `url(${card.background}-bg.jpg`}}
                            >
                                <div className="row">
                                    <div className="d-flex justify-content-center align-items-center row skill-mobile-cont-1">
                                        <h6 className="display-6 m-0">{card.name}</h6>
                                        <img 
                                            draggable={false} 
                                            src={`${card.img}.svg`} 
                                            alt="" 
                                            width="80%"
                                        />
                                    </div>
                                    <div className="skill-mobile-cont-2">
                                        <ul className="p-0">
                                            {
                                                card.skills.map(skill => (
                                                    <li className="list-item">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#5A38FD" className="bi bi-check2" viewBox="0 0 16 16">
                                                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                                                        </svg>
                                                        &nbsp;{skill}
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
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
