import React from 'react';
import SectionCard from '../components/SectionCard';
import teamData from '../data/teamData.json';
import { Calendar, User } from 'lucide-react';

const History = () => {
    const { history } = teamData;
    return (
        <div className="container mx-auto px-4 py-12">
            <SectionCard title="Our History" className="max-w-4xl mx-auto">
                <div className="space-y-6 text-lg text-gray-700">
                    <p>{history.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="bg-gray-50 p-6 rounded-lg flex items-center">
                            <Calendar size={32} className="text-club-yellow mr-4" />
                            <div>
                                <h4 className="font-bold text-gray-900">Established</h4>
                                <p>{history.established}</p>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg flex items-center">
                            <User size={32} className="text-club-yellow mr-4" />
                            <div>
                                <h4 className="font-bold text-gray-900">Founded By</h4>
                                <p>{history.founder}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionCard>
        </div>
    );
};

export default History;
