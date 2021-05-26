import React from 'react';

import '../App.css';
import 'react-slideshow-image/dist/styles.css';

import About from '../components/About';
import Contact from '../components/Contact';
import Greeting from '../components/Greeting';
import GreetingsMobile from '../components/GreetingsMobile';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import SkillsMobile from '../components/SkillsMobile';
import SkillsMobileCopy from '../components/SkillsMobileCopy';

const Inicio = () => {
    document.addEventListener("contextmenu", function(e){
        if (e.target.nodeName === "IMG") {
            e.preventDefault();
        }
    }, false);

    const smallScreen = window.screen.width < 600;

    return (
        <div className="h-100">
            {smallScreen
                ? <GreetingsMobile/>
                : <Greeting/>
            }
            <About/>
            {smallScreen
                ? <SkillsMobile/>
                : <>
                <Skills/>
                <SkillsMobileCopy/>
                </>
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
