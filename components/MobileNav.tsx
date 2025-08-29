
import React from 'react';

interface MobileNavProps {
    isOpen: boolean;
    onClose: () => void;
}

const navLinks = [
    { href: '#home', text: 'Beranda' },
    { href: '#about', text: 'Tentang Kami' },
    { href: '#programs', text: 'Program' },
    { href: '#news', text: 'Berita' },
    { href: '#gallery', text: 'Galeri' },
    { href: '#contact', text: 'Kontak' }
];

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
    
    const handleScrollTo = (id: string) => {
        onClose();
        const element = document.getElementById(id);
        // Timeout to allow the menu to close before scrolling
        setTimeout(() => {
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 300);
    };

    return (
        <>
            <div 
                className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={onClose}
            ></div>
            <nav 
                className={`fixed top-0 right-0 w-4/5 max-w-sm h-full bg-primary text-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="p-5 flex justify-end">
                    <button onClick={onClose} aria-label="Close menu" className="text-3xl">
                        <i className="fas fa-times"></i>
                    </button>
                </div>
                <ul className="flex flex-col p-5 space-y-4">
                    {navLinks.map((link) => (
                         <li key={link.text}>
                            {link.href.startsWith('#') && link.href.length > 1 ? (
                                <button
                                    onClick={() => handleScrollTo(link.href.substring(1))}
                                    className="text-xl p-3 block rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors duration-300 w-full text-left bg-transparent border-none cursor-pointer"
                                >
                                    {link.text}
                                </button>
                            ) : (
                                <a href={link.href} onClick={onClose} className="text-xl p-3 block rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors duration-300">
                                    {link.text}
                                </a>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
};

export default MobileNav;
