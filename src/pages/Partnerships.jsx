import React from 'react';
import SectionCard from '../components/SectionCard';
import teamData from '../data/teamData.json';
import { Building2 } from 'lucide-react';

const Partnerships = () => {
    const { partnerships } = teamData;
    return (
        <div className="container mx-auto px-4 py-12">
            <SectionCard title="Our Partnerships">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {partnerships.map((partner, index) => (
                        <div key={index} className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center mb-3">
                                <Building2 size={24} className="text-club-yellow mr-3" />
                                <h4 className="text-xl font-bold text-gray-900">{partner.name}</h4>
                            </div>
                            <p className="text-gray-600 pl-9">{partner.description}</p>
                        </div>
                    ))}
                </div>
            </SectionCard>
        </div>
    );
};

export default Partnerships;
