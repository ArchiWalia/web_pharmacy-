import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-transparent fixed left-0 right-0 p-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center">
                    <div className="flex-shrink-0 text-white">
                        <a href="/" className="font-bold text-xl">Pharmacy</a>
                    </div>
                    <div className="hidden md:block">
                        <ul className="flex space-x-4">
                            <li><a href="#" className="text-white hover:text-gray-300">Home</a></li>
                            <li><a href="#" className="text-white hover:text-gray-300">About us</a></li>
                            <li><a href="#" className="text-white hover:text-gray-300">How It Works</a></li>
                            <li><a href="#" className="text-white hover:text-gray-300">Contact Us</a></li>
                            <li><a href="#" className="text-white hover:text-gray-300">Buy</a></li>
                            <li><a href="#" className="text-white hover:text-gray-300">Sell</a></li>
                            <Link to={"/login"}><li><a href="#" className="text-white hover:text-gray-300">Log In</a></li></Link>
                            <Link to={"/signup"}><li><a href="#" className="text-white hover:text-gray-300">Sign Up</a></li></Link>


                        </ul>
                    </div>
                    <div className="md:hidden">
                        <button className="text-white focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M2 4a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zM2 9a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zM9 14a1 1 0 100 2h8a1 1 0 100-2H9z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
