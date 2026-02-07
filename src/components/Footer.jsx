import React from 'react';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-club-black text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-3xl font-bold text-club-yellow mb-4">FC TamiLionS</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Creating Pathways to Success in Football. Join us in our journey to excellence.
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="text-xl font-bold mb-6 text-club-yellow">Contact Us</h4>
                        <div className="space-y-4 text-gray-300">
                            <div className="flex items-start group">
                                <MapPin size={20} className="mr-3 mt-1 text-club-yellow flex-shrink-0 group-hover:scale-110 transition-transform" />
                                <span className="leading-relaxed text-sm">No. 10/14, Second Floor, Thiruvalluvar Salai, J J Nagar, Mogappair East, Chennai - 600 037</span>
                            </div>
                            <div className="flex items-start group">
                                <Mail size={20} className="mr-3 mt-1 text-club-yellow flex-shrink-0 group-hover:scale-110 transition-transform" />
                                <a href="mailto:fctamilions@gmail.com" className="hover:text-club-yellow transition-colors text-sm">fctamilions@gmail.com</a>
                            </div>
                            <div className="flex items-start group">
                                <Phone size={20} className="mr-3 mt-1 text-club-yellow flex-shrink-0 group-hover:scale-110 transition-transform" />
                                <span className="text-sm">+91 760 3939 766</span>
                            </div>
                        </div>
                    </div>

                    {/* Social / Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-xl font-bold mb-6 text-club-yellow">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-club-yellow hover:text-black transition-all duration-300 hover:scale-110 hover:shadow-lg">
                                <Instagram size={22} />
                            </a>
                            {/* Add more icons as needed */}
                        </div>
                        <p className="text-gray-400 text-sm mt-6 leading-relaxed">
                            Stay connected with us on social media for the latest updates and news.
                        </p>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} FC TamiLionS. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
