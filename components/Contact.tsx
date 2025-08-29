
import React from 'react';
import SectionTitle from './SectionTitle';
import AnimatedWrapper from './AnimatedWrapper';

interface ContactDetailProps {
    icon: string;
    title: string;
    children: React.ReactNode;
}

const ContactDetail: React.FC<ContactDetailProps> = ({ icon, title, children }) => (
    <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl">
            <i className={icon}></i>
        </div>
        <div>
            <h3 className="text-lg font-bold text-dark">{title}</h3>
            <div className="text-gray-600">{children}</div>
        </div>
    </div>
);

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-16 md:py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6">
                <SectionTitle>Kontak Kami</SectionTitle>
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 lg:items-stretch">
                    <AnimatedWrapper animationType="slide-right" className="lg:w-1/2 flex flex-col">
                        <div className="bg-gray-50 p-6 sm:p-8 rounded-lg shadow-lg space-y-6 flex flex-col flex-grow w-full">
                            <ContactDetail icon="fas fa-map-marker-alt" title="Alamat">
                                <p>Jl. Desa Pamutih, RT. 1/ RW. 3, Pamutih, Ulujami, Pamutih, Kec. Ulujami, Kabupaten Pemalang, Jawa Tengah 52371</p>
                            </ContactDetail>
                            <ContactDetail icon="fas fa-phone" title="Telepon">
                                <p>(+62) 813-2462-0183</p>
                                <a 
                                    href="https://wa.me/6281324620183"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-2 inline-flex items-center gap-2 bg-green-500 text-white font-bold py-2 px-4 rounded-full text-sm hover:bg-green-600 transition-colors duration-300 shadow"
                                >
                                    <i className="fa-brands fa-whatsapp"></i>
                                    Chat di WhatsApp
                                </a>
                            </ContactDetail>
                            <ContactDetail icon="fas fa-envelope" title="Email">
                                <p>smpnegeriduaulujami@gmail.com</p>
                            </ContactDetail>
                            <ContactDetail icon="fas fa-clock" title="Jam Operasional">
                                <p>Senin - Sabtu: 07.00 - 14.00 WIB</p>
                            </ContactDetail>
                        </div>
                    </AnimatedWrapper>
                    <AnimatedWrapper animationType="slide-left" className="lg:w-1/2">
                        <div className="relative h-80 md:h-96 lg:h-full rounded-lg overflow-hidden shadow-lg">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3205.185732075218!2d109.54622109008638!3d-6.858051685110075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6fd818d4238e65%3A0x66c80c6e177082d4!2sSMP%20N%202%20ULUJAMI!5e0!3m2!1sen!2sid!4v1756384667209!5m2!1sen!2sid"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                title="School Location"
                            ></iframe>
                            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/80 via-black/70 to-transparent text-white">
                                <h4 className="font-bold text-lg">SMP Negeri 2 Ulujami</h4>
                                <p className="text-sm mb-3 max-w-md">Jl. Desa Pamutih, RT. 1/ RW. 3, Pamutih, Kec. Ulujami, Kabupaten Pemalang, Jawa Tengah 52371</p>
                                <a 
                                    href="https://www.google.com/maps/place/SMP+N+2+ULUJAMI/@-6.8580517,109.5462211,17z"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-accent text-white font-bold py-2 px-4 rounded-full text-sm hover:bg-yellow-600 transition-colors duration-300 shadow"
                                >
                                    <i className="fas fa-map-location-dot"></i>
                                    Buka di Google Maps
                                </a>
                            </div>
                        </div>
                    </AnimatedWrapper>
                </div>
            </div>
        </section>
    );
};

export default Contact;