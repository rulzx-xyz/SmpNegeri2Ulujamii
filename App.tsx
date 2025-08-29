
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import MobileNav from './components/MobileNav';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import News from './components/News';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isMenuOpen]);

    return (
        <div className="relative">
            <Header onMenuToggle={toggleMenu} />
            <MobileNav isOpen={isMenuOpen} onClose={toggleMenu} />
            <main>
                <Hero />
                <About />
                <Programs />
                <News />
                <Gallery />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default App;
