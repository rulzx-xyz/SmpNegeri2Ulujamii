
import React from 'react';

interface HeaderProps {
    onMenuToggle: () => void;
}

const navLinks = [
    { href: '#home', text: 'Beranda' },
    { href: '#about', text: 'Tentang Kami' },
    { href: '#programs', text: 'Program' },
    { href: '#news', text: 'Berita' },
    { href: '#gallery', text: 'Galeri' },
    { href: '#contact', text: 'Kontak' }
];

const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
    
    const handleScrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="bg-gradient-to-r from-primary to-blue-700 text-white p-3 sm:p-4 sticky top-0 z-40 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-2 sm:space-x-4">
                    <img src="https://files.catbox.moe/bpm0z2.jpg" alt="Logo SMP Negeri 2 Ulujami" className="h-10 sm:h-12 md:h-14 w-auto" />
                    <div>
                        <h1 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold leading-tight">SMP NEGERI 2 ULUJAMI</h1>
                        <span className="text-[10px] sm:text-xs md:text-sm opacity-90">Pemalang, Ulujami Jawa Tengah</span>
                    </div>
                </div>

                <nav className="hidden lg:flex items-center space-x-2">
                    {navLinks.map((link) => {
                        const commonClasses = "font-medium hover:text-accent transition-all duration-300 transform hover:scale-105 inline-block px-4 py-2";
                        if (link.text === 'Beranda') {
                            return (
                                <button
                                    key={link.text}
                                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                    className={`${commonClasses} bg-transparent border-none cursor-pointer p-0`}
                                    aria-label="Kembali ke atas halaman"
                                >
                                    {link.text}
                                </button>
                            );
                        }
                        if (link.href.startsWith('#') && link.href.length > 1) {
                            return (
                                <button
                                    key={link.text}
                                    onClick={() => handleScrollTo(link.href.substring(1))}
                                    className={`${commonClasses} bg-transparent border-none cursor-pointer p-0`}
                                >
                                    {link.text}
                                </button>
                            );
                        }
                        return (
                            <a key={link.href} href={link.href} className={commonClasses}>
                                {link.text}
                            </a>
                        );
                    })}
                </nav>

                <div className="lg:hidden">
                    <button onClick={onMenuToggle} aria-label="Open menu" className="text-2xl">
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;