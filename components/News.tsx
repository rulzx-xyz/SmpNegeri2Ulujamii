
import React from 'react';
import SectionTitle from './SectionTitle';
import AnimatedWrapper from './AnimatedWrapper';

interface NewsCardProps {
    imgSrc: string;
    date: string;
    title: string;
    excerpt: string;
}

const newsData = [
    {
        imgSrc: "https://files.catbox.moe/dcl4sr.jpg",
        date: "Tahun  2024",
        title: "Meraih Kemenangan Yang Sangat Luar Biasa Juara 1 Piala Bupati Pemalang, Marching Band Tahun 2024",
        excerpt: "SMP Negeri 2 Ulujami  Berhasil Meraih Kemenangan Yang Sangat Luar Biasa Juara 1 Piala Bupati Pemalang Tahun 2024."
    },
    {
        imgSrc: "https://files.catbox.moe/k3v27c.jpg",
        date: "23 Agustus 2025",
        title: "Siswa SMP Negeri 2 Ulujami Raih Juara 1 Dance Smaphore Dan Kolone Tongkat",
        excerpt: "Prestasi membanggakan diraih SMP Negeri 2 Ulujami, Tim Candra Birawa Sakti Raih Juara 1 Dance Smaphore Dan Kolone Tongkat."
    },
    {
        imgSrc: "https://files.catbox.moe/e6x35e.jpg",
        date: "22 Juni 2025",
        title: "Siswa SMP Negeri 2 Ulujami Raih Juara 1 Bina",
        excerpt: "SMP Negeri 2 Ulujami Sukses Meraih Juara 1 Bina."
    },
    {
        imgSrc: "https://files.catbox.moe/zn2er8.jpg",
        date: "22 Juni 2025",
        title: "Siswa SMP Negeri 2 Ulujami Raih Juara 2 Supporter Terbaik Dan Juara 3 Best Costume",
        excerpt: "Prestasi Sangat membanggakan diraih SMP Negeri 2 Ulujami, Meraih Juara 2 Supporter Terbaik Dan Juara 3 Best Costume."
    }
];

const NewsCard: React.FC<NewsCardProps> = ({ imgSrc, date, title, excerpt }) => (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col h-full group transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] transform hover:-translate-y-2 hover:shadow-2xl">
        <div className="overflow-hidden">
            <img src={imgSrc} alt={title} className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
        </div>
        <div className="p-6 flex flex-col flex-grow">
            <div className="text-secondary font-semibold text-sm mb-2">{date}</div>
            <h3 className="text-lg md:text-xl font-bold text-dark mb-2">{title}</h3>
            <p className="text-gray-600 mb-4 flex-grow">{excerpt}</p>
            <a href="#" className="text-primary font-bold hover:text-accent transition-colors duration-300 self-start mt-auto">
            </a>
        </div>
    </div>
);

const News: React.FC = () => {
    return (
        <section id="news" className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
                <SectionTitle>Berita Terbaru</SectionTitle>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                    {newsData.map((newsItem, index) => (
                        <AnimatedWrapper key={index} delay={index * 150} animationType="zoom-in">
                            <NewsCard {...newsItem} />
                        </AnimatedWrapper>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default News;