import React from 'react';
import AboutMe from './aboutme.jsx';
import Portfolio from './portfolio.jsx';
import Contact from './contact.jsx';
import Skills from './skills.jsx';
import Debug from './debug.jsx';

const Body = ({ selectedComponent }) => {
    return (
        <div className='bg-dark-blue flex pt-20 flex-col justify-center items-center'>
            <div className='w-5/6 xl:w-4/6 xl:grid xl:grid-cols-2 xl:gap-4'>
                {selectedComponent === "Skills" && <Skills />}
                {selectedComponent === "Portfolio" && <Portfolio />}
                {selectedComponent === "Debug" && <Debug />}
                {selectedComponent === undefined && (
                    <>
                        <AboutMe />
                        <Portfolio />
                    </>
                )}
            </div>
            <div className='w-full lg:w-3/4'>
                {selectedComponent === "Contact" && <Contact />}
                {selectedComponent === undefined && <Contact />}
            </div>
        </div>
    );
};

export default Body;