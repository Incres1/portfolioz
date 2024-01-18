import React from 'react';

const Contact = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-dark-blue pb-5">
            <h1 className="text-3xl font-bold mb-4 text-opposite">Contact Me</h1>
            <form className="w-1/2">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2 text-opposite" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2 text-opposite" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2 text-opposite" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="message"
                        rows="4"
                        placeholder="Enter your message"
                    ></textarea>
                </div>
                <div className='flex justify-center items-center'>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold transition duration-200 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Submit
                </button>
                </div>
                
            </form>
        </div>
    );
};

export default Contact;
