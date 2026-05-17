'use client';
import React, { useEffect, useRef, useCallback } from 'react';
import { Particle } from './Particle';

interface BackgroundProps {
    mouseEffectEnabled?: boolean;
}

const Background: React.FC<BackgroundProps> = ({ mouseEffectEnabled=false}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const mouseRef = useRef<{ x: number | null, y: number | null }>({ x: null, y: null });
    const animationFrameId = useRef<number | null>(null);

    const handleMouseMove = useCallback((event: MouseEvent) => {
        mouseRef.current.x = event.x;
        mouseRef.current.y = event.y;
    }, []);

    const handleMouseOut = useCallback(() => {
        mouseRef.current.x = null;
        mouseRef.current.y = null;
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');

        if (!canvas || !ctx) {
            console.error("Canvas or 2D context not available.");
            return; // Exit if canvas or context is not ready
        }

        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const initParticles = () => {
            particlesRef.current = [];
            const numberOfParticles = (canvas.height * canvas.width) / 15000;
            for (let i = 0; i < numberOfParticles; i++) {
                const size = (Math.random() * 2) + 1;
                const x = (Math.random() * ((window.innerWidth - size * 2) - (size * 2)) + size * 2);
                const y = (Math.random() * ((window.innerHeight - size * 2) - (size * 2)) + size * 2);
                const directionX = (Math.random() * .4) - .2;
                const directionY = (Math.random() * .4) - .2;
                const color = 'rgba(160, 147, 255, 0.3)'; // Original color
                particlesRef.current.push(new Particle({ x, y, directionX, directionY, size, color, ctx, canvas }));
            }
        };

        const connectParticles = () => {
            let opacityValue = 1;
            for (let a = 0; a < particlesRef.current.length; a++) {
                for (let b = a; b < particlesRef.current.length; b++) {
                    const particleA = particlesRef.current[a];
                    const particleB = particlesRef.current[b];

                    const distance = Math.pow(particleA.x - particleB.x, 2) + Math.pow(particleA.y - particleB.y, 2);

                    if (distance < Math.pow(Math.min(canvas.width, canvas.height) / 7, 2)) { // Adjusted comparison
                        opacityValue = 1 - (distance / (Math.pow(Math.min(canvas.width, canvas.height) / 7, 2) * 1.5)); // Scale opacity based on max distance

                        if (mouseRef.current.x !== null && mouseRef.current.y !== null) {
                            const dx = mouseRef.current.x - particleA.x;
                            const dy = mouseRef.current.y - particleA.y;
                            const mouseDistance = Math.sqrt(dx * dx + dy * dy);
                            if (mouseDistance < 150) {
                                opacityValue = Math.max(0, 1 - (mouseDistance / 150)); // Ensure opacity doesn't go negative
                            }
                        }
                        ctx.strokeStyle = `rgba(88, 166, 255, ${opacityValue})`; // Connection color
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particleA.x, particleA.y);
                        ctx.lineTo(particleB.x, particleB.y);
                        ctx.stroke();
                    }
                }
            }
        };

        const animateParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear with canvas dimensions
            for (let i = 0; i < particlesRef.current.length; i++) {
                particlesRef.current[i].update();
            }
            connectParticles();
            animationFrameId.current = requestAnimationFrame(animateParticles);
        };

        const handleResize = () => {
            setCanvasSize();
            initParticles(); // Re-initialize particles on resize
        };

        // Initial setup
        setCanvasSize();
        initParticles();
        animateParticles();

        // Event listeners
        window.addEventListener('resize', handleResize);
        if (mouseEffectEnabled) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseout', handleMouseOut);
        }

        // Cleanup function
        return () => {
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseout', handleMouseOut);
        };
    }, [handleMouseMove, handleMouseOut, mouseEffectEnabled]); // Dependency array includes memoized handlers
    return (
        <>
            <canvas id="particle-canvas" ref={canvasRef}></canvas>
            <div id="canvas-overlay"></div>
        </>
    );
};

export default Background;