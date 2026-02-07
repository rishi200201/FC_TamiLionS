import React from 'react';

const SectionCard = ({ title, children, className = "" }) => {
    return (
        <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
            {title && (
                <div className="bg-club-black px-6 py-4 border-b-4 border-club-yellow">
                    <h2 className="text-2xl font-bold text-white uppercase tracking-wider">{title}</h2>
                </div>
            )}
            <div className="p-6 md:p-8">
                {children}
            </div>
        </div>
    );
};

export default SectionCard;
