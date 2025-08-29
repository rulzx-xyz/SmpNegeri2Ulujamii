
import React from 'react';
import AnimatedWrapper from './AnimatedWrapper';

const SocialLink: React.FC<{ href: string; icon: string }> = ({ href, icon }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-accent transition-colors duration-300">
        <i className={icon}></i>
    </a>
);

const Footer: React.FC = () => {
    return (
        <footer className="bg-primary text-white pt-12 pb-8">
            <AnimatedWrapper animationType="fade-in">
                <div className="container mx-auto px-4 sm:px-6 text-center">
                    <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6 md:mb-8">
                        <img src="https://files.catbox.moe/bpm0z2.jpg" alt="Logo SMP Negeri 2 Ulujami" className="h-16 w-auto bg-white rounded-full p-1" />
                        <div>
                            <h1 className="text-xl font-bold">SMP NEGERI 2 ULUJAMI</h1>
                            <span className="text-sm opacity-90">Berkualitas, Berkarakter, dan Berprestasi</span>
                        </div>
                    </div>

                    <div className="flex justify-center space-x-6 mb-6 md:mb-8">
                        <SocialLink href="#" icon="fa-brands fa-tiktok" />
                        <SocialLink href="#" icon="fab fa-instagram" />
                        <SocialLink href="#" icon="fab fa-youtube" />
                    </div>

                    <div className="border-t border-white border-opacity-20 pt-6">
                        <p>&copy; {new Date().getFullYear()} SMP Negeri 2 Ulujami. Copyright By Maulana Developer.</p>
                    </div>
                </div>
            </AnimatedWrapper>
        </footer>
    );
};

export default Footer;