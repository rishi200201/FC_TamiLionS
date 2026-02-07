import React from 'react';
import SectionCard from '../components/SectionCard';
import teamData from '../data/teamData.json';
import { Medal } from 'lucide-react';

const Achievements = () => {
    const { achievements } = teamData;
    return (
        <div className="container mx-auto px-4 py-12">
            <SectionCard title="Our Achievements" className="max-w-4xl mx-auto">
                <div className="space-y-4">
                    {achievements.map((achievement, index) => (
                        <div key={index} className="flex items-center bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                            <Medal size={28} className="text-yellow-600 mr-4 flex-shrink-0" />
                            <span className="text-lg font-medium text-gray-800">{achievement}</span>
                        </div>
                    ))}
                </div>
            </SectionCard>
        </div>
    );
};

export default Achievements;
