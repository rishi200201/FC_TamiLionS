import React, { useState } from 'react';
import SectionCard from '../components/SectionCard';
import { X } from 'lucide-react';
import educationImg from '../assets/education.jpeg';
import kauveryImg from '../assets/Kauvery.jpeg';
import vectorXImg from '../assets/VectorX.jpeg';
import a2bImg from '../assets/A2B.jpeg';

const Sponsor = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    // Placeholder sponsors for demo
    const sponsors = [
        { name: "Nazareth College Of Arts & Science", type: "Education Sponsor", image: educationImg },
        { name: "Kauvey", type: "Medical Sponsor", image: kauveryImg },
        { name: "VectorX", type: "Kit & Equipment Sponsor", image: vectorXImg },
        { name: "A2B", type: "Hospitality Sponsor", image: a2bImg },
    ];

    return (
        <div className="container mx-auto px-4 py-12">
            <SectionCard title="Our Sponsors">
                <p className="text-center text-gray-500 mb-8">Proudly supported by top brands committed to sports excellence.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {sponsors.map((sponsor, index) => (
                        <div
                            key={index}
                            className="relative group overflow-hidden rounded-2xl shadow-lg border border-gray-200 h-80 bg-cover bg-center bg-no-repeat transition-all duration-500 hover:shadow-xl hover:-translate-y-1 cursor-pointer hover:bg-contain bg-white"
                            style={{ backgroundImage: `url(${sponsor.image})` }}
                            onClick={() => setSelectedImage(sponsor.image)}
                        >
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300"></div>
                            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 pt-20 flex flex-col justify-end transition-opacity duration-300 group-hover:opacity-0">
                                <h4 className="font-bold text-2xl text-white mb-1 shadow-sm">{sponsor.name}</h4>
                                <p className="text-sm text-club-yellow font-medium uppercase tracking-wide">{sponsor.type}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </SectionCard>

            {/* Full Screen Image Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm transition-opacity duration-300"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-5xl w-full h-full flex items-center justify-center">
                        <button
                            className="absolute top-4 right-4 text-white hover:text-club-yellow transition-colors duration-300 bg-black/50 rounded-full p-2"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X size={32} />
                        </button>
                        <img
                            src={selectedImage}
                            alt="Sponsor Full Screen"
                            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Sponsor;
