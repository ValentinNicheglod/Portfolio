import React, { useState } from 'react';

import '../App.css';
import 'react-slideshow-image/dist/styles.css';

import About from '../components/About';
import Contact from '../components/Contact';
import Greeting from '../components/Greeting';
import GreetingsMobile from '../components/GreetingsMobile';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import SkillsMobile from '../components/SkillsMobile';

import Modal from '@material-ui/core/Modal';
import { Slide } from 'react-slideshow-image';


const Inicio = () => {

    const slideImages = [
        'me/2.jpeg',
        'me/3.jpeg',
        'me/4.jpeg'
      ];

    const [open, setOpen] = useState(false);

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
                : <Skills/>
            }
            <Projects
                smallScreen={smallScreen}
                setOpen={setOpen}
            />
            <Contact
                smallScreen={smallScreen}
            />
            <Modal 
                open={open}
                onClose={() => setOpen(false)}
            >
                <div className="slide-container h-100">
                    <Slide autoplay={false} transitionDuration={500} className="h-100">
                        <div className="each-slide">
                            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                            <span>Slide 1</span>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
                            <span>Slide 2</span>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                            <span>Slide 3</span>
                            </div>
                        </div>
                    </Slide>
                </div>
            </Modal>
        </div>
    )
};

export default Inicio;
