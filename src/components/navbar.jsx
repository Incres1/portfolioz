import React from 'react';

const Navbar = ({ onNavClick }) => {
    const handleNavClick = (section) => {
        // Reset scroll position to top
        window.scrollTo(0, 0);
        onNavClick(section);
    };

    return (
        <nav className="flex justify-end p-6 pr-16 fixed top-0 w-full bg-dark-blue">
            <ul className="flex space-x-4 text-xl font-semibold text-opposite">
                <li className='transition ease-in-out delay-200 hover:scale-110 cursor-pointer' onClick={() => handleNavClick(undefined)}>Home</li>
                <li className='transition ease-in-out delay-200 hover:scale-110 cursor-pointer' onClick={() => handleNavClick('Skills')}>Skills</li>
                <li className='transition ease-in-out delay-200 hover:scale-110 cursor-pointer' onClick={() => handleNavClick('Contact')}>Contact</li>
                <li className='transition ease-in-out delay-200 hover:scale-110 cursor-pointer' onClick={() => handleNavClick('Debug')}>Debug</li>
            </ul>
        </nav>
    );
};

export default Navbar;