import React from 'react';
import SectionCard from '../components/SectionCard';
import TeamMemberCard from '../components/TeamMemberCard';
import teamData from '../data/teamData.json';
import muthuImg from '../assets/muthu.jpeg';
import baluImg from '../assets/balu.jpeg';
import pandiyanImg from '../assets/pandiyan.jpeg';

const coachImages = {
    "muthu.jpeg": muthuImg,
    "balu.jpeg": baluImg,
    "pandiyan.jpeg": pandiyanImg
};

const CoachingTeam = () => {
    const { coaches } = teamData;
    return (
        <div className="container mx-auto px-4 py-12">
            <SectionCard title="Core Coaching Team">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {coaches.map((coach) => (
                        <div key={coach.id} className="h-full">
                            <TeamMemberCard
                                image={coachImages[coach.image]}
                                name={coach.name}
                                role={coach.role}
                                qualifications={coach.qualifications}
                                experience={coach.experience}
                                achievements={coach.achievements}
                            />
                        </div>
                    ))}
                </div>
            </SectionCard>
        </div>
    );
};

export default CoachingTeam;
