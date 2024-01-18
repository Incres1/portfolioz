import React from 'react';

const SkillCard = ({ skillName, skillDescription }) => {
    return (
        <div className="bg-gradient-to-r from-purple-500 to-violet-700 md:h-80 sm:h-96 xl:w-52 shadow-lg rounded-lg text-opposite p-6 m-2">
            <div className='flex justify-center'>
                <h2 className="text-xl font-bold mb-4">{skillName}</h2>
            </div>

            <ul className="list-disc list-inside">
                {skillDescription.map((desc, index) => (
                    <li key={index}>{desc}</li>
                ))}
            </ul>
        </div>
    );
};

export default SkillCard;
