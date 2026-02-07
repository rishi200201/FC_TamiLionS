import React from 'react';
import SectionCard from '../components/SectionCard';
import teamData from '../data/teamData.json';
import { Trophy, Users } from 'lucide-react';

const Leagues = () => {
    const { leagues } = teamData;
    return (
        <div className="container mx-auto px-4 py-12">
            <SectionCard title="AIFF & State Youth League">
                <div className="mb-8 text-center">
                    <h3 className="text-2xl font-bold mb-4">{leagues.name}</h3>
                    <p className="text-lg text-gray-600">{leagues.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-club-black text-white p-6 rounded-lg">
                        <div className="flex items-center mb-4">
                            <Users size={24} className="text-club-yellow mr-3" />
                            <h4 className="text-xl font-bold">Age Groups</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {leagues.ageGroups.map((age, index) => (
                                <span key={index} className="px-3 py-1 bg-gray-800 rounded-full text-club-yellow font-bold text-sm">
                                    {age}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gray-100 p-6 rounded-lg">
                        <div className="flex items-center mb-4">
                            <Trophy size={24} className="text-club-black mr-3" />
                            <h4 className="text-xl font-bold text-club-black">Highlights</h4>
                        </div>
                        <ul className="space-y-2">
                            {leagues.details.map((detail, index) => (
                                <li key={index} className="flex items-start text-gray-700">
                                    <span className="mr-2">•</span> {detail}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </SectionCard>
        </div>
    );
};

export default Leagues;
