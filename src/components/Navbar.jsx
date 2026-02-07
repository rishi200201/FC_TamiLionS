import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../assets/logo.jpg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdown, setDropdown] = useState(null);

    const toggleMenu = () => setIsOpen(!isOpen);
    const handleDropdown = (name) => {
        if (dropdown === name) {
            setDropdown(null);
        } else {
            setDropdown(name);
        }
    };

    const navLinks = [
        { name: 'Home', path: '/' },
        {
            name: 'About',
            subLinks: [
                { name: 'History', path: '/history' },
                { name: 'Mission', path: '/mission' },
                { name: 'Vision', path: '/vision' },
                { name: 'Commitment', path: '/commitment' },
                { name: 'Founder', path: '/founder' },
            ]
        },
        { name: 'Team', path: '/team' },
        {
            name: 'Programs',
            subLinks: [
                { name: 'Offerings', path: '/offerings' },
                { name: 'Leagues', path: '/leagues' },
            ]
        },
        { name: 'Achievements', path: '/achievements' },
        {
            name: 'Network',
            subLinks: [
                { name: 'Partnerships', path: '/partnerships' },
                { name: 'Sponsors', path: '/sponsors' },
            ]
        },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="bg-club-black text-white sticky top-0 z-50 shadow-md">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3">
                        <img src={logo} alt="FC TamiLionS Logo" className="h-12 w-auto object-contain rounded-full border-2 border-club-yellow" />
                        <span className="text-xl md:text-2xl font-bold text-club-yellow tracking-wider font-display">
                            FC TamiLionS
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {navLinks.map((link, index) => (
                            <div key={index} className="relative group">
                                {link.subLinks ? (
                                    <button
                                        className="flex items-center hover:text-club-yellow transition-colors font-medium focus:outline-none"
                                    >
                                        {link.name} <ChevronDown size={16} className="ml-1" />

                                        {/* Hover Dropdown */}
                                        <div className="absolute top-full left-0 w-48 bg-white text-gray-800 shadow-xl rounded-md overflow-hidden hidden group-hover:block pt-2">
                                            <div className="bg-white rounded-md border border-gray-100">
                                                {link.subLinks.map((sub, subIndex) => (
                                                    <Link
                                                        key={subIndex}
                                                        to={sub.path}
                                                        className="block px-4 py-2 hover:bg-gray-100 hover:text-club-black transition-colors"
                                                    >
                                                        {sub.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </button>
                                ) : (
                                    <Link
                                        to={link.path}
                                        className="hover:text-club-yellow transition-colors font-medium"
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={toggleMenu} className="text-white hover:text-club-yellow focus:outline-none">
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-gray-900 border-t border-gray-800">
                    <div className="px-4 pt-2 pb-6 space-y-1">
                        {navLinks.map((link, index) => (
                            <div key={index}>
                                {link.subLinks ? (
                                    <div className="py-2">
                                        <button
                                            onClick={() => handleDropdown(link.name)}
                                            className="flex justify-between items-center w-full text-left font-medium text-lg py-2 border-b border-gray-800"
                                        >
                                            {link.name}
                                            <ChevronDown size={16} className={`transform transition-transform ${dropdown === link.name ? 'rotate-180' : ''}`} />
                                        </button>
                                        {dropdown === link.name && (
                                            <div className="pl-4 mt-2 space-y-2 bg-gray-800 rounded p-2">
                                                {link.subLinks.map((sub, subIndex) => (
                                                    <Link
                                                        key={subIndex}
                                                        to={sub.path}
                                                        className="block text-gray-300 hover:text-club-yellow py-1"
                                                        onClick={toggleMenu}
                                                    >
                                                        {sub.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <Link
                                        to={link.path}
                                        className="block text-lg font-medium py-3 border-b border-gray-800 hover:text-club-yellow"
                                        onClick={toggleMenu}
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
