'use client';
import SectionTitle from '@/components/SectionTitle';
import { ACHIEVEMENTS, CERTIFICATES } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { FileText } from 'lucide-react';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Certificates = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 70%',
                    end: 'bottom 60%',
                    toggleActions: 'restart none none reverse',
                    scrub: 1,
                },
            });

            tl.from('.cert-item', {
                y: 50,
                opacity: 0,
                stagger: 0.2,
            });
        },
        { scope: containerRef },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 50%',
                    end: 'bottom 20%',
                    scrub: 1,
                },
            });

            tl.to(containerRef.current, {
                y: -100,
                opacity: 0,
            });
        },
        { scope: containerRef },
    );

    const getPdfUrl = (pdf?: string) => {
        if (!pdf) return '#';
        return pdf.startsWith('/') ? pdf : `/${pdf}`;
    };

    return (
        <section className="py-section" id="certificates">
            <div className="container" ref={containerRef}>
                <SectionTitle title="Certificates & Achievements" />

                <div className="grid gap-14">
                    {CERTIFICATES.map((item) => (
                        <div key={item.title} className="cert-item">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div>
                                    <h4 className="text-4xl md:text-5xl font-anton tracking-wide uppercase leading-none">
                                        {item.title}
                                    </h4>
                                    {item.duration && (
                                        <p className="text-lg text-muted-foreground mt-2">
                                            {item.duration}
                                        </p>
                                    )}
                                </div>

                                <div className="flex flex-wrap items-center gap-3">
                                    {item.pdf && (
                                        <a
                                            href={getPdfUrl(item.pdf)}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-background hover:bg-foreground hover:text-background text-sm font-medium transition-colors"
                                        >
                                            <FileText className="w-4 h-4" />
                                            View PDF
                                        </a>
                                    )}
                                </div>
                            </div>

                            {item.points && item.points.length > 0 && (
                                <ul className="mt-4 space-y-2 list-disc list-outside ml-5 text-muted-foreground max-w-3xl">
                                    {item.points.map((point, index) => (
                                        <li
                                            key={index}
                                            className="text-base md:text-lg leading-relaxed"
                                        >
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}

                    {ACHIEVEMENTS.map((item) => (
                        <div key={item.title} className="cert-item">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div>
                                    <h4 className="text-4xl md:text-5xl font-anton tracking-wide uppercase leading-none">
                                        {item.title}
                                    </h4>
                                    {item.year && (
                                        <p className="text-lg text-muted-foreground mt-2">
                                            Year: {item.year}
                                        </p>
                                    )}
                                </div>

                                <div className="flex flex-wrap items-center gap-3">
                                    {item.pdf && (
                                        <a
                                            href={getPdfUrl(item.pdf)}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-background hover:bg-foreground hover:text-background text-sm font-medium transition-colors"
                                        >
                                            <FileText className="w-4 h-4" />
                                            View PDF
                                        </a>
                                    )}
                                </div>
                            </div>

                            {item.points && item.points.length > 0 && (
                                <ul className="mt-4 space-y-2 list-disc list-outside ml-5 text-muted-foreground max-w-3xl">
                                    {item.points.map((point, index) => (
                                        <li
                                            key={index}
                                            className="text-base md:text-lg leading-relaxed"
                                        >
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
