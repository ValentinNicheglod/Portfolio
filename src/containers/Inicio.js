import React from 'react';

import '../App.css';

import About from '../components/About';
import Contact from '../components/Contact';
import Greeting from '../components/Greeting';
import GreetingsMobile from '../components/GreetingsMobile';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import SkillsMobile from '../components/SkillsMobile';

const Inicio = () => {

    document.addEventListener("contextmenu", function(e){
        if (e.target.nodeName === "IMG") {
            e.preventDefault();
        }
    }, false);

    const smallScreen = window.screen.width < 600;

    return (
        <div className="h-100">
            {!smallScreen
                ? <Greeting/>
                : <GreetingsMobile/>
            }
            <About/>
            {!smallScreen
                ? <Skills/>
                : <SkillsMobile/>
            }
            <Projects
                smallScreen={smallScreen}
            />
            <Contact
                smallScreen={smallScreen}
            />
        </div>
    )
};

export default Inicio;
