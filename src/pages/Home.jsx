import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import teamData from '../data/teamData.json';
import heroImage from '../assets/hero_football.png';
import homeGB from '../assets/homeGB.jpeg';

const Home = () => {
    const { clubInfo } = teamData;
    const [adImage, setAdImage] = useState(null);

    useEffect(() => {
        // Load advertisement from localStorage
        const savedAd = localStorage.getItem('fcTamilionsAd');
        if (savedAd) {
            setAdImage(savedAd);
        }
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-club-black text-white py-24 md:py-32 flex items-center">
                <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-90 z-10"></div>
                {/* Placeholder for Hero Image */}
                <div className="absolute inset-0 z-0">
                    <img src={homeGB} alt="FC TamiLionS Hero" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black opacity-60"></div>
                </div>

                <div className="container mx-auto px-4 relative z-20">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
                            {clubInfo.name}
                        </h1>
                        <p className="text-xl md:text-2xl text-club-yellow mb-8 font-medium">
                            {clubInfo.tagline}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/team" className="btn-primary flex items-center">
                                View Team Details <ArrowRight size={20} className="ml-2" />
                            </Link>
                            <Link to="/contact" className="btn-secondary border-2 border-club-yellow">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Advertisement Banner */}
            {adImage && (
                <section className="bg-white py-8 border-t border-b border-gray-200">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            {/* Sponsored label */}
                            <div className="flex justify-between items-center mb-3">
                                <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Upcomming Event</span>
                                <span className="text-xs text-gray-400">Advertisement</span>
                            </div>
                            
                            {/* Ad Image */}
                            <div className="relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                                <img 
                                    src={adImage} 
                                    alt="Partner Advertisement" 
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Quick Intro / Stats maybe? */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-12">Building the Future of Football</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 bg-gray-50 rounded-lg">
                            <h3 className="text-4xl font-bold text-club-yellow mb-2">120+</h3>
                            <p className="font-semibold text-gray-700">Elite Players Annually</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-lg">
                            <h3 className="text-4xl font-bold text-club-yellow mb-2">AIFF</h3>
                            <p className="font-semibold text-gray-700">Youth League Participants</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-lg">
                            <h3 className="text-4xl font-bold text-club-yellow mb-2">100%</h3>
                            <p className="font-semibold text-gray-700">Commitment to Excellence</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
