import React from 'react';
import scooterSharingImage from '../img/scootersharing.png';
import webxImage from '../img/webx.png';
import danmarkskortImage from '../img/danmarkskort.JPG';

const Portfolio = () => {
    return (
        <div className="flex flex-wrap justify-center ">
            <div className="md:w-1/3 p-4">
                <div className="rounded-lg overflow-hidden flex flex-col justify-center items-center text-opposite">
                    <img
                        className="2xl:w-48 2xl:h-96 md:w-48 md:h-96 object-cover rounded-lg"
                        src={scooterSharingImage}
                        alt=""
                    />
                    <div className="p-4">
                        <h3 className="text-xl font-medium">Scooter App</h3>
                        <p className="text-gray-600 mt-2">
                            Kotlin native, Google APIs, Firebase, CameraX.
                        </p>
                        <div className='flex justify-center items-center'>
                            <a
                            href="#"
                            className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 transition duration-200 text-white font-semibold py-2 px-4 rounded"
                        >
                            View Project
                        </a>
                            </div>
                    </div>
                </div>
            </div>
            <div className="md:w-1/3 p-4">
                <div className="rounded-lg overflow-hidden flex flex-col justify-center items-center text-opposite">
                    
                    <img
                        className="2xl:w-48 2xl:h-96 md:w-48 md:h-96 lg:w-48 object-cover rounded-lg"
                        src={webxImage}
                        alt=""
                    />
                    <div className="p-4">
                        <h3 className="text-xl font-medium">Car Rental App</h3>
                        <p className="text-gray-600 mt-2">
                            React, TailwindCSS, Google APIs, Mobile First Principles.
                        </p>
                            <div className='flex justify-center items-center'>
                            <a
                            href="#"
                            className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 transition duration-200 text-white font-semibold py-2 px-4 rounded"
                        >
                            View Project
                        </a>
                            </div>
                        
                        
                    </div>
                </div>
            </div>
            <div className="md:w-1/3 p-4">
                <div className="rounded-lg overflow-hidden flex flex-col justify-center items-center text-opposite">
                    <img
                        className="2xl:w-48 2xl:h-96 md:w-48 md:h-96 lg:w-48 object-cover rounded-lg"
                        src={danmarkskortImage}
                        alt=""
                    />
                    <div className="p-4">
                        <h3 className="text-xl font-medium">Map of Denmark</h3>
                        <p className="text-gray-600 mt-2">
                            Java, Algorithms: Dijkstra's, A*, KDTree, Trie Tree.
                        </p>
                        <div className='flex justify-center items-center'>
                            <a
                            href="#"
                            className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 transition duration-200 text-white font-semibold py-2 px-4 rounded"
                        >
                            View Project
                        </a>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
