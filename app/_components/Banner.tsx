'use client';
import ArrowAnimation from '@/components/ArrowAnimation';
import ContactModal from '@/components/ContactModal';
import { GENERAL_INFO } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { FileText } from 'lucide-react';
import React, { useState } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Banner = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const [isContactOpen, setIsContactOpen] = useState(false);

    // move the content a little up on scroll
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 70%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.fromTo(
                '.slide-up-and-fade',
                { y: 0 },
                { y: -150, opacity: 0, stagger: 0.02 },
            );
        },
        { scope: containerRef },
    );

    return (
        <section className="relative overflow-hidden" id="banner">
            <ArrowAnimation />
            <div
                className="container h-[100svh] min-h-[530px] max-md:pb-10 flex justify-between items-center max-md:flex-col"
                ref={containerRef}
            >
                <div className="max-md:grow max-md:flex flex-col justify-center items-start max-w-[544px]">
                    <h1 className="banner-title slide-up-and-fade leading-[.95] text-6xl sm:text-[80px] font-anton">
                        <span className="text-primary">FRONTEND</span>
                        <br /> <span className="ml-4">DEVELOPER</span>
                    </h1>
                    <p className="banner-description slide-up-and-fade mt-6 text-lg text-muted-foreground">
                        I&apos;m{' '}
                        <span className="font-medium text-foreground">
                            Utkarsh Rai
                        </span>
                        . A Computer Science undergraduate who enjoys building responsive, user-focused web applications and solving real-world problems through modern full-stack technologies.
                    </p>

                    <div className="flex flex-wrap items-center gap-4 mt-8 slide-up-and-fade">
                        <button
                            type="button"
                            onClick={() => setIsContactOpen(true)}
                            className="px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary-hover transition-all inline-flex items-center gap-2 cursor-pointer shadow-lg shadow-primary/20 hover:scale-[1.02]"
                        >
                            Let&apos;s Talk
                        </button>
                        <a
                            href={GENERAL_INFO.resume || '/Utkarsh_Rai_Resume.pdf'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-7 py-3.5 rounded-full border border-neutral-700 bg-neutral-900/80 hover:bg-neutral-800 text-white font-medium transition-all inline-flex items-center gap-2 group backdrop-blur-sm hover:scale-[1.02]"
                        >
                            <FileText size={18} className="text-primary group-hover:scale-110 transition-transform" />
                            Resume
                        </a>
                    </div>

                    <div className="flex items-center gap-2 mt-4 slide-up-and-fade">
                        <span className="size-3 rounded-full bg-primary animate-pulse"></span>
                        <span className="text-sm text-muted-foreground">
                            Available for full-time opportunities
                        </span>
                    </div>
                </div>

                <div className="md:absolute bottom-[10%] right-[5%] max-md:mt-8 slide-up-and-fade">
                    <div className="flex flex-col gap-6 sm:gap-7">
                        <div>
                            <h3 className="text-4xl sm:text-5xl font-anton tracking-wide text-white leading-none">
                                2+
                            </h3>
                            <p className="text-xs uppercase tracking-widest text-neutral-400 mt-1">
                                Years Experience
                            </p>
                        </div>
                        <div>
                            <h3 className="text-4xl sm:text-5xl font-anton tracking-wide text-white leading-none">
                                10+
                            </h3>
                            <p className="text-xs uppercase tracking-widest text-neutral-400 mt-1">
                                Completed Projects
                            </p>
                        </div>
                        <div>
                            <h3 className="text-4xl sm:text-5xl font-anton tracking-wide text-white leading-none">
                                300+
                            </h3>
                            <p className="text-xs uppercase tracking-widest text-neutral-400 mt-1">
                                Git Commits
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <ContactModal
                isOpen={isContactOpen}
                onClose={() => setIsContactOpen(false)}
            />
        </section>
    );
};

export default Banner;
