
import React from 'react';
import SectionTitle from './SectionTitle';
import AnimatedWrapper from './AnimatedWrapper';

const About: React.FC = () => {
    return (
        <section id="about" className="py-16 md:py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6">
                <SectionTitle>Tentang Kami</SectionTitle>
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                    <AnimatedWrapper animationType="slide-right" className="lg:w-1/2">
                        <div className="text-gray-700 space-y-4 text-base sm:text-lg leading-relaxed max-w-prose">
                            <p>SMP Negeri 2 Ulujami adalah lembaga pendidikan menengah pertama yang berkomitmen untuk memberikan pendidikan terbaik bagi generasi muda. Kami telah beroperasi sejak tahun 1986 dan telah menghasilkan lulusan-lulusan berprestasi di berbagai bidang.</p>
                            <p className="font-semibold text-primary">Visi kami adalah "Terwujudnya Lulusan Yang Agamis, Berkarakter Pancasila, Berkompetensi Literasi Numerasi Dan Berprestasi Yang Berwawasan lingkungan".</p>
                            <p className="font-semibold text-primary">Misi kami adalah "Menciptakan Pelajar Berakhlak Mulia, Berkarakter, Mengembangkan Kecerdasan Intelektual Siswa, Mendorong Siswa Untuk Menjadi Mandiri".</p>
                            <p>Dengan adanya keberadaan SMP NEGERI 2 ULUJAMI, diharapkan dapat memberikan kontribusi dalam mencerdaskan anak bangsa di wilayah Kec. Ulujami, Kab. Pemalang..</p>
                        </div>
                    </AnimatedWrapper>
                    <AnimatedWrapper animationType="slide-left" className="lg:w-1/2">
                        <img src="https://files.catbox.moe/l1k87q.jpg" alt="Osis SMP Negeri 2 Ulujami" className="rounded-lg shadow-2xl w-full h-auto object-cover" />
                    </AnimatedWrapper>
                </div>
            </div>
        </section>
    );
};

export default About;