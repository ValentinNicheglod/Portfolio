import React from 'react'

const skills = [
    {
        name: 'FRONT END',
        img: 'frontend',
        skills: ['Bootstrap', 'CSS 3', 'HTML 5', 'Less','Material UI', 'React', 'React Native', 'Redux' ],
        colors: ['#ff5722', '#e91e63'],
        background: 'green',
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAiElEQVRIS2NkoDFgpLH5DHS3wIGBgWE+AwODApk+e8DAwJDIwMBwAKYf3QcgBfJkGg7TBjJDEZcF/6ES5AYdhn50g0YtGA0iggl4NIiGQBBRoyx6iFxYohcVBgwMDOcJBgR+BYYMDAwXsBV2sCRGoflw7WDHI/uA5hZQy+Uo5pBb7hPtmKFvAQCemyEZ3hVsZQAAAABJRU5ErkJggg==',
        width: '95%'
    },
    {
        name: 'BACK END',
        img: 'backend',
        skills: ['Express', 'MySQL', 'Node JS', 'Postgresql','Sequelize'],
        colors: ['#009688', '#66bb6a'],
        background: 'yellow',
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAlklEQVRIS2NkoDFgpLH5DHS1wIGBgWE+AwODAoW+esDAwJDIwMBwAGQOsg9AEvIUGg7TDjJLEd2C/1BZSoMNxRxkw0i1AFk9LjZKEA06C3BFF84g+sDAwMBPpUh+CEuNyHEASqYLqJCSQIYnYEumVHI8qjGUJkmCjkIPotGcDAqy0ZxMMOGM5mSCQYSigK45mTSnEakaAEn1LBkSFpfeAAAAAElFTkSuQmCC',
        width: '90%'
    },
    {
        name: 'GENERAL',
        img: 'other',
        skills: ['Git', 'GitHub', 'JavaScript', 'JSON','NPM', 'TypeScript', 'Webpack'],
        colors: ['#ffc107', '#ff5722'],
        background: 'pink',
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABcUlEQVRIS7XVvzMdURjG8c8taWgp0NCSGenxD4Q+ZqKnj0pU0tMzQ0/+AfRJQUuDglaaaM1rzmb2bvbXvbGnu/ecfb/P+7z7nO3pePU6rm9YwDTu24gbBjCLmwSYaYIMA/iMY5xhrQvAPjaxje9dAH5iESu4+B/AAj5hN1dkBH/S71G84Fuy66oMVjWDVRxiPPkcfsdaSqp/4SPi3CmesZFAfZwyQCjaSad+4EsqEH99xR4OsJUEHKVOYz+ezXfcl4NQG6pDVaw4GA/kV6iN/XWc5DbyoqLb6Ca66gOEh/P4nVRntuQBj5jAHG4L8ABHN2OIWh+qAFV+ZgF7wmTJQPNzu0a8JP9YVOdnXcAq59Y05LyfZQFrnFvda5r5GddBgLKALeMyWZS9ppVzq7uLwsMoEO2XBSwbw1BBK84wVJ8jC1jTDfF3v+1tWgzYuwOqAtYIatvBHeIrVhawWkhbQBSZwkOj5MKBQQCD1n473zngFQdTVBmi/FcZAAAAAElFTkSuQmCC',
        width: '77%'
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
                            <div className="card p-3 bg-3 d-flex justify-content-center mb-2 skill-mobile">
                                <div className="row">
                                    <div className="d-flex justify-content-center align-items-center row skill-mobile-cont-1">
                                        
                                        <img 
                                            draggable={false} 
                                            src={`${card.img}.svg`} 
                                            alt=""
                                            width={card.width}
                                        />
                                    </div>
                                    <div className="skill-mobile-cont-2">
                                        <div className="skill-title">
                                            <h6 className="display-6 m-0">{card.name}</h6>
                                            <div className="card-icon">
                                                <img alt="" src={card.icon}/> 
                                            </div>
                                              
                                        </div>
                                        <ul className="p-0 white">
                                            {
                                                card.skills.map(skill => (
                                                    <li className="list-item">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#F9A826" className="bi bi-check2" viewBox="0 0 16 16">
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
