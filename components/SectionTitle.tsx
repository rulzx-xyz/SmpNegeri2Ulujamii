
import React from 'react';
import AnimatedWrapper from './AnimatedWrapper';

interface SectionTitleProps {
    children: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
    return (
        <div className="text-center mb-8 md:mb-12">
            <AnimatedWrapper animationType="slide-up">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3 relative inline-block">
                    {children}
                    <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2/3 h-1 bg-accent rounded-full"></span>
                </h2>
            </AnimatedWrapper>
        </div>
    );
};

export default SectionTitle;