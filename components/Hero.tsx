
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setLoaded(true), 50); // Small delay to ensure render
        return () => clearTimeout(timer);
    }, []);


    const handleScrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="relative bg-cover bg-center text-white py-20 sm:py-24 md:py-32 overflow-hidden" style={{ backgroundImage: "url('https://files.catbox.moe/hykh8m.jpg')" }}>
            <div className="absolute inset-0 bg-black/60 [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
            <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
                <h2 
                    className={`text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight load-in-item ${loaded ? 'end' : 'start'}`} 
                    style={{ transitionDelay: '100ms', textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}
                >
                    Selamat Datang Di SMP Negeri 2 Ulujami
                </h2>
                <p 
                    className={`text-lg md:text-xl font-medium max-w-3xl mx-auto mb-8 load-in-item ${loaded ? 'end' : 'start'}`} 
                    style={{ transitionDelay: '300ms', textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}
                >
                    Mewujudkan Siswa Yang Mandiri, Berkarakter, Berkompetensi Literasi, Serta Berakhlak.
                </p>
                <div className={`flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 load-in-item ${loaded ? 'end' : 'start'}`} style={{ transitionDelay: '500ms' }}>
                    <button 
                        onClick={() => handleScrollTo('about')}
                        className="bg-accent text-white font-bold py-3 px-6 sm:py-3 sm:px-8 rounded-full text-base hover:bg-yellow-600 transition-transform transform hover:scale-105 duration-300 shadow-lg cursor-pointer"
                    >
                        Tentang Kami
                    </button>
                    <button
                        onClick={() => handleScrollTo('contact')}
                        className="bg-transparent border-2 border-white text-white font-bold py-3 px-6 sm:py-3 sm:px-8 rounded-full text-base hover:bg-white hover:text-primary transition-all duration-300 shadow-lg cursor-pointer"
                    >
                        Hubungi Kami
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;