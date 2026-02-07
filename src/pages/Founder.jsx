import React from 'react';
import SectionCard from '../components/SectionCard';
import teamData from '../data/teamData.json';
import { User, Award, BookOpen, Trophy } from 'lucide-react';
import founderTC from '../assets/founderTC.jpeg';


const Founder = () => {
    const { founder } = teamData;
    return (
        <div className="container mx-auto px-4 py-12">
            <SectionCard title="Our Founder" className="max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row gap-10">
                    <div className="w-full md:w-1/3">
                        <div className="bg-gray-200 rounded-lg overflow-hidden h-96 shadow-lg mb-6">
                            <div className="flex items-center justify-center h-full bg-club-black text-club-yellow">
                                <User size={120} />
                                <img src={founderTC} alt={founder.name} className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h3 className="text-xl font-bold mb-2 text-center text-club-black">Credentials</h3>
                            <ul className="space-y-2">
                                {founder.qualifications.map((qual, index) => (
                                    <li key={index} className="flex items-center text-sm text-gray-700">
                                        <Award size={16} className="mr-2 text-club-yellow" />
                                        {qual}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="w-full md:w-2/3 space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold text-club-black mb-2">{founder.name}</h2>
                            <p className="text-xl text-gray-600 font-medium mb-4">{founder.background}</p>
                            <hr className="border-gray-200" />
                        </div>

                        <div className="grid grid-cols-1 gap-6">
                            <div className="bg-white border-l-4 border-club-yellow pl-4 py-2">
                                <h4 className="font-bold flex items-center mb-2 text-lg">
                                    <BookOpen size={20} className="mr-2 text-club-black" />
                                    {founder.sections.expertise}
                                </h4>
                                <p className="text-gray-700">Drawing from extensive experience in both sports management and technical coaching to build a world-class academy structure.</p>
                            </div>

                            <div className="bg-white border-l-4 border-club-black pl-4 py-2">
                                <h4 className="font-bold flex items-center mb-2 text-lg">
                                    <Trophy size={20} className="mr-2 text-club-yellow" />
                                    Career Highlights
                                </h4>
                                <p className="text-gray-700">{founder.sections.highlights}</p>
                            </div>

                            <div className="bg-white border-l-4 border-club-yellow pl-4 py-2">
                                <h4 className="font-bold flex items-center mb-2 text-lg">
                                    <User size={20} className="mr-2 text-club-black" />
                                    Player Development Philosophy
                                </h4>
                                <p className="text-gray-700">{founder.sections.development}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionCard>
        </div>
    );
};

export default Founder;
