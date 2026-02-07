import React from 'react';
import SectionCard from '../components/SectionCard';
import teamData from '../data/teamData.json';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const { contact } = teamData;

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(e.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Format WhatsApp message
        const whatsappMessage = `*New Contact Message*\n\n*Name:* ${name}\n*Email:* ${email}\n*Subject:* ${subject}\n*Message:* ${message}`;
        
        // WhatsApp number (remove spaces and format)
        const whatsappNumber = '7603939766';
        
        // Create WhatsApp URL
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
        
        // Open WhatsApp
        window.open(whatsappURL, '_blank');
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 mb-8 lg:mb-12">
                {/* Contact Info */}
                <div className="lg:w-1/3 space-y-6 lg:space-y-8">
                    <SectionCard title="Get In Touch">
                        <div className="space-y-4 sm:space-y-6">
                            <div className="flex items-start group">
                                <MapPin className="text-club-yellow mt-1 mr-3 sm:mr-4 flex-shrink-0 group-hover:scale-110 transition-transform" size={20} />
                                <div className="flex-1">
                                    <h4 className="font-bold text-club-black mb-1 sm:mb-2 text-sm sm:text-base">Address</h4>
                                    <p className="text-gray-600 leading-relaxed text-xs sm:text-sm break-words">{contact.address}</p>
                                </div>
                            </div>
                            <div className="flex items-start group">
                                <Mail className="text-club-yellow mt-1 mr-3 sm:mr-4 flex-shrink-0 group-hover:scale-110 transition-transform" size={20} />
                                <div className="flex-1">
                                    <h4 className="font-bold text-club-black mb-1 sm:mb-2 text-sm sm:text-base">Email</h4>
                                    <a href={`mailto:${contact.email}`} className="text-gray-600 hover:text-club-yellow transition-colors text-xs sm:text-sm break-all">{contact.email}</a>
                                </div>
                            </div>
                            <div className="flex items-start group">
                                <Phone className="text-club-yellow mt-1 mr-3 sm:mr-4 flex-shrink-0 group-hover:scale-110 transition-transform" size={20} />
                                <div className="flex-1">
                                    <h4 className="font-bold text-club-black mb-1 sm:mb-2 text-sm sm:text-base">Phone</h4>
                                    {contact.phone.map((p, i) => (
                                        <p key={i} className="text-gray-600 text-xs sm:text-sm">{p}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </SectionCard>
                </div>

                {/* Contact Form */}
                <div className="lg:w-2/3">
                    <SectionCard title="Send us a Message">
                        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                <div>
                                    <label className="block text-xs sm:text-sm font-bold mb-2 text-club-black">Name</label>
                                    <input 
                                        type="text" 
                                        name="name" 
                                        className="w-full p-2.5 sm:p-3 text-sm border border-gray-300 rounded-lg focus:border-club-yellow focus:ring-2 focus:ring-club-yellow/20 outline-none transition-all" 
                                        placeholder="Your Name" 
                                        required 
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs sm:text-sm font-bold mb-2 text-club-black">Email</label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        className="w-full p-2.5 sm:p-3 text-sm border border-gray-300 rounded-lg focus:border-club-yellow focus:ring-2 focus:ring-club-yellow/20 outline-none transition-all" 
                                        placeholder="Your Email" 
                                        required 
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs sm:text-sm font-bold mb-2 text-club-black">Subject</label>
                                <input 
                                    type="text" 
                                    name="subject" 
                                    className="w-full p-2.5 sm:p-3 text-sm border border-gray-300 rounded-lg focus:border-club-yellow focus:ring-2 focus:ring-club-yellow/20 outline-none transition-all" 
                                    placeholder="Subject" 
                                    required 
                                />
                            </div>
                            <div>
                                <label className="block text-xs sm:text-sm font-bold mb-2 text-club-black">Message</label>
                                <textarea 
                                    name="message" 
                                    className="w-full p-2.5 sm:p-3 text-sm border border-gray-300 rounded-lg focus:border-club-yellow focus:ring-2 focus:ring-club-yellow/20 outline-none transition-all h-28 sm:h-32 resize-none" 
                                    placeholder="How can we help you?" 
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="btn-primary w-full sm:w-auto flex items-center justify-center hover:shadow-lg transition-all text-sm sm:text-base px-6 py-2.5 sm:py-3">
                                Send Message <Send size={16} className="ml-2" />
                            </button>
                        </form>
                    </SectionCard>
                </div>
            </div>

            {/* Map Section */}
            <div className="mt-8 lg:mt-12">
                <SectionCard title="Find Us on Map">
                    <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.079837458961!2d80.18172431482134!3d13.095825990767825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265e0e6e4e6e1%3A0x1c1c1c1c1c1c1c1c!2sThiruvalluvar%20Salai%2C%20J%20J%20Nagar%2C%20Mogappair%20East%2C%20Chennai%2C%20Tamil%20Nadu%20600037!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="FC TamiLionS Location"
                        ></iframe>
                    </div>
                    <div className="mt-3 sm:mt-4 p-3 sm:p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <p className="text-xs sm:text-sm text-gray-600 flex items-start sm:items-center flex-col sm:flex-row">
                            <span className="flex items-center mb-1 sm:mb-0">
                                <MapPin size={14} className="text-club-yellow mr-2 flex-shrink-0" />
                                <span className="font-semibold text-club-black">Address:</span>
                            </span>
                            <span className="sm:ml-2 break-words leading-relaxed">{contact.address}</span>
                        </p>
                    </div>
                </SectionCard>
            </div>
        </div>
    );
};

export default Contact;
