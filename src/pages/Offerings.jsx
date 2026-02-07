import React from 'react';
import SectionCard from '../components/SectionCard';
import teamData from '../data/teamData.json';
import { CheckCircle } from 'lucide-react';

const Offerings = () => {
    const { offerings } = teamData;
    return (
        <div className="container mx-auto px-4 py-12">
            <SectionCard title="Our Offerings" className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {offerings.map((program, index) => (
                        <div key={index} className="flex items-center bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all">
                            <CheckCircle size={24} className="text-club-yellow mr-4 flex-shrink-0" />
                            <span className="text-lg font-medium text-gray-800">{program}</span>
                        </div>
                    ))}
                </div>
            </SectionCard>
        </div>
    );
};

export default Offerings;
