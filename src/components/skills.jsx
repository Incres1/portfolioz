import React from 'react';
import SkillCard from './skillcard.jsx';

const Skills = () => {
    return (
        <div className="md:flex md:flex-row md:h-fit md:justify-center md:items-center mb-10">
            <div className='xl:grid xl:grid-cols-2 xl:gap-4'>
            <div>
                
            </div>
            <div className="md:grid lg:grid-cols-4 md:grid-cols-2 lg:gap-x-60 md:gap-y-10 flex overflow-x-auto md:overflow-visible hide-scrollbar">
                <SkillCard skillName={"Java"} skillDescription={["Software testing", "Unit testing", "Data processing and representation", "Multidimensional representations of data"]}/>
                <SkillCard skillName={"Python"} skillDescription={["Data processing and representation", "Multidimensional representations of data", "Machine learning", "Data mining and visualization"]}/>
                <SkillCard skillName={"JavaScript"} skillDescription={["Web development", "Frontend", "Backend", "Full-stack"]}/>
                <SkillCard skillName={"React"} skillDescription={["Web development", "Frontend", "Full-stack", "Single-page", "Usage of APIs", "Responsive design"]}/>
                <SkillCard skillName={"C#"} skillDescription={["RestAPIs", "LINQ", "Principles of software architecture", "Analysis and design", "Test-frameworks like Moq etc."]}/>
                <SkillCard skillName={"SQL"} skillDescription={["Database design, management and security", "PostgreSQL", "Query processing efficiency"]}/>
                <SkillCard skillName={"Algorithms"} skillDescription={["Design and analysis of algorithms", "Complexity analysis", "Graph algorithms", "Analysis of time and space usage", "Greedy algorithms"]}/>
                <SkillCard skillName={"GoLang"} skillDescription={["Concurrency", "Networks", "Physical and logical clocks", "Distributed systems", "Distributed algorithms"]}/>
            </div>

            </div>
            
        </div>
    );
};

export default Skills;


