
import React, { useEffect } from 'react';

interface LightboxProps {
    src: string;
    title: string;
    onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ src, title, onClose }) => {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden'; // Prevent background scrolling

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'auto'; // Restore scrolling
        };
    }, [onClose]);

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            style={{ animation: 'fadeIn 0.3s ease-out forwards' }}
            onClick={onClose}
            aria-modal="true"
            role="dialog"
        >
            <div
                className="relative bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col p-4"
                style={{ animation: 'scaleIn 0.3s ease-out forwards' }}
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the content
            >
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 sm:-top-3 sm:-right-3 w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-full text-primary text-2xl flex items-center justify-center shadow-lg hover:bg-gray-200 transition-colors z-10"
                    aria-label="Close image viewer"
                >
                    &times;
                </button>
                <div className="flex-grow overflow-hidden flex items-center justify-center">
                     <img src={src} alt={title} className="max-w-full max-h-full h-auto w-auto object-contain" />
                </div>
                <div className="flex-shrink-0 pt-4 text-center">
                    <h3 className="text-xl font-bold text-primary">{title}</h3>
                </div>
            </div>
        </div>
    );
};

export default Lightbox;