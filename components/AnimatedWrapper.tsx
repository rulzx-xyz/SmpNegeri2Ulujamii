
import React, { useState, useRef, useEffect } from 'react';

interface AnimatedWrapperProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    animationType?: 'fade-in' | 'slide-up' | 'slide-left' | 'slide-right' | 'zoom-in';
}

const AnimatedWrapper: React.FC<AnimatedWrapperProps> = ({ children, className = '', delay = 0, animationType = 'slide-up' }) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // The observer is disconnected once the element is visible
                    if(domRef.current) {
                        observer.unobserve(domRef.current);
                    }
                }
            });
        }, { threshold: 0.1 });

        const { current } = domRef;
        if (current) {
            observer.observe(current);
        }

        return () => {
            if (current) {
                observer.unobserve(current);
            }
        };
    }, []);

    return (
        <div
            ref={domRef}
            className={`animate-on-scroll ${animationType} ${isVisible ? 'is-visible' : ''} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

export default AnimatedWrapper;