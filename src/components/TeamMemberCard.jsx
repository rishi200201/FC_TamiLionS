import React from 'react';
import { User, Award, Briefcase, Star } from 'lucide-react';

const TeamMemberCard = ({ name, role, qualifications, experience, achievements, image }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col h-full">
            <div className="h-48 bg-gray-200 relative overflow-hidden group">
                {image ? (
                    <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-300">
                        <User size={64} />
                    </div>
                )}
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4">
                    <h3 className="text-xl font-bold text-white">{name}</h3>
                    <p className="text-club-yellow font-medium">{role}</p>
                </div>
            </div>

            <div className="p-5 flex-grow space-y-3">
                {qualifications && (
                    <div className="flex items-start">
                        <Award size={18} className="text-club-yellow mt-1 mr-2 flex-shrink-0" />
                        <div>
                            <p className="text-xs text-gray-500 uppercase font-semibold">Qualifications</p>
                            <p className="text-gray-700">{qualifications}</p>
                        </div>
                    </div>
                )}

                {experience && (
                    <div className="flex items-start">
                        <Briefcase size={18} className="text-club-yellow mt-1 mr-2 flex-shrink-0" />
                        <div>
                            <p className="text-xs text-gray-500 uppercase font-semibold">Experience</p>
                            <p className="text-gray-700">{experience}</p>
                        </div>
                    </div>
                )}

                {achievements && (
                    <div className="flex items-start">
                        <Star size={18} className="text-club-yellow mt-1 mr-2 flex-shrink-0" />
                        <div>
                            <p className="text-xs text-gray-500 uppercase font-semibold">Achievements</p>
                            <p className="text-gray-700 text-sm">{achievements}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TeamMemberCard;
