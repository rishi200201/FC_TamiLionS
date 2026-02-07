import React from 'react';
import SectionCard from '../components/SectionCard';
import teamData from '../data/teamData.json';
import { Handshake } from 'lucide-react';

const Commitment = () => {
    const { commitment } = teamData;
    return (
        <div className="container mx-auto px-4 py-12">
            <SectionCard title="Our Commitment" className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                    <Handshake size={80} className="text-club-yellow mx-auto mb-4" />
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        We are dedicated to the holistic development of our players and the sport.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {commitment.points.map((point, index) => (
                        <div key={index} className="bg-gray-50 p-6 rounded-lg border-t-4 border-club-yellow shadow-sm hover:shadow-md transition-shadow">
                            <p className="text-gray-800 font-medium text-center">{point}</p>
                        </div>
                    ))}
                </div>
            </SectionCard>
        </div>
    );
};

export default Commitment;
