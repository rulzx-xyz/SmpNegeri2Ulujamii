
import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import AnimatedWrapper from './AnimatedWrapper';
import Lightbox from './Lightbox';

const galleryImages = [
    { src: "https://files.catbox.moe/ns1tmh.jpg", title: "Kegiatan Lomba 17 Agustus" },
    { src: "https://files.catbox.moe/y0udjj.jpg", title: "Lomba Collor Guard" },
    { src: "https://files.catbox.moe/yr4b7k.jpg", title: "Lomba Paskibra" },
    { src: "https://files.catbox.moe/r31yv8.jpg", title: "Marching Band" },
    { src: "https://files.catbox.moe/1hqgqp.jpg", title: "Latihan LKBB" },
    { src: "https://files.catbox.moe/cdludx.jpg", title: "Pramuka Candra Birawa Sakti" },
    { src: "https://files.catbox.moe/c5fula.jpg", title: "Lomba LKPP" },
    { src: "https://files.catbox.moe/1cb2r1.jpg", title: "lomba LKPP Team Pionering" }
];

interface GalleryItemProps {
    src: string;
    title: string;
    onClick: () => void;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ src, title, onClick }) => (
    <button
        onClick={onClick}
        className="bg-white rounded-lg shadow-lg group overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] hover:shadow-2xl w-full text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
        aria-label={`View image: ${title}`}
    >
        <div className="overflow-hidden aspect-square">
             <img src={src} alt={title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
        </div>
        <div className="p-3 text-center bg-white">
            <h3 className="text-sm font-semibold text-primary truncate" title={title}>{title}</h3>
        </div>
    </button>
);

const Gallery: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);

    const handleImageClick = (image: { src: string; title: string }) => {
        setSelectedImage(image);
    };

    const handleCloseLightbox = () => {
        setSelectedImage(null);
    };
    
    return (
        <>
            <section id="gallery" className="py-16 md:py-24 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6">
                    <SectionTitle>Galeri Kegiatan</SectionTitle>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                        {galleryImages.map((image, index) => (
                            <AnimatedWrapper key={index} delay={index * 100} animationType="zoom-in">
                                <GalleryItem 
                                    src={image.src} 
                                    title={image.title} 
                                    onClick={() => handleImageClick(image)} 
                                />
                            </AnimatedWrapper>
                        ))}
                    </div>
                </div>
            </section>
            {selectedImage && (
                <Lightbox 
                    src={selectedImage.src}
                    title={selectedImage.title}
                    onClose={handleCloseLightbox}
                />
            )}
        </>
    );
};

export default Gallery;