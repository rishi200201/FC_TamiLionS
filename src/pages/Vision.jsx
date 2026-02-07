import React from 'react';
import SectionCard from '../components/SectionCard';
import teamData from '../data/teamData.json';
import { Eye } from 'lucide-react';

const Vision = () => {
    const { vision } = teamData;
    return (
        <div className="container mx-auto px-4 py-12">
            <SectionCard title="Our Vision" className="max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="w-full md:w-1/3 flex justify-center">
                        <Eye size={120} className="text-club-yellow" />
                    </div>
                    <div className="w-full md:w-2/3">
                        <ul className="space-y-4">
                            {vision.points.map((point, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="bg-club-yellow text-club-black text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                                        {index + 1}
                                    </span>
                                    <span className="text-lg text-gray-700">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </SectionCard>
        </div>
    );
};

export default Vision;
