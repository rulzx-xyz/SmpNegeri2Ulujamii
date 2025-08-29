
import React from 'react';
import SectionTitle from './SectionTitle';
import AnimatedWrapper from './AnimatedWrapper';

interface ProgramCardProps {
    imgSrc: string;
    title: string;
    description: string;
}

const programsData = [
    {
        imgSrc: "https://files.catbox.moe/r31yv8.jpg",
        title: "Marching Band",
        description: "Program pembelajaran yang dirancang untuk mempelajari alat musik."
    },
    {
        imgSrc: "https://files.catbox.moe/risgzh.jpg",
        title: "Paskibra Baraduja",
        description: "Mengembangkan Dalam Bidang Disiplin Dan Rapih Serta kekompakan."
    },
    {
        imgSrc: "https://files.catbox.moe/961bvu.jpg",
        title: "Pramuka Candra Birawa Sakti",
        description: "Program Membentuk Kepribadian Yang Tangguh, Disiplin dan Berwawasan Luas."
    }
];

const ProgramCard: React.FC<ProgramCardProps> = ({ imgSrc, title, description }) => (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] transform hover:-translate-y-2 group h-full">
        <div className="overflow-hidden aspect-[4/3]">
            <img src={imgSrc} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
        </div>
        <div className="p-6">
            <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    </div>
);

const Programs: React.FC = () => {
    return (
        <section id="programs" className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6">
                <SectionTitle>Program Unggulan</SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {programsData.map((program, index) => (
                        <AnimatedWrapper key={index} delay={index * 150} animationType="zoom-in">
                            <ProgramCard {...program} />
                        </AnimatedWrapper>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Programs;