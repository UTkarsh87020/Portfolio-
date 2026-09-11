'use client';
import React, { useState, useEffect } from 'react';
import { GENERAL_INFO, SOCIAL_LINKS } from '@/lib/data';
import {
    X,
    Mail,
    Phone,
    Linkedin,
    Copy,
    Check,
    Send,
    MessageCircle,
    ExternalLink,
    Sparkles,
} from 'lucide-react';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
    const [copiedField, setCopiedField] = useState<string | null>(null);
    const [name, setName] = useState('');
    const [contactInfo, setContactInfo] = useState('');
    const [preferredMethod, setPreferredMethod] = useState<'email' | 'linkedin' | 'whatsapp'>('email');
    const [message, setMessage] = useState('');

    const linkedinLink =
        SOCIAL_LINKS.find((s) => s.name.toLowerCase() === 'linkedin')?.url ||
        'https://www.linkedin.com/in/utkarsh1999rai';
    const emailAddress = GENERAL_INFO.email;
    const phoneNumber = GENERAL_INFO.phone || '+91-9026034980';
    const cleanPhone = phoneNumber.replace(/[^0-9]/g, '');

    // Close modal on Escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose]);

    const handleCopy = (text: string, field: string) => {
        navigator.clipboard.writeText(text);
        setCopiedField(field);
        setTimeout(() => setCopiedField(null), 2000);
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const formattedSubject = encodeURIComponent(
            `Portfolio Inquiry from ${name || 'Prospective Partner'} (Preferred: ${preferredMethod})`
        );
        const formattedBody = encodeURIComponent(
            `Hi Utkarsh,\n\nName: ${name}\nContact: ${contactInfo}\nPreferred Channel: ${preferredMethod}\n\nMessage:\n${message}\n`
        );

        if (preferredMethod === 'whatsapp') {
            const waUrl = `https://wa.me/${cleanPhone}?text=${formattedBody}`;
            window.open(waUrl, '_blank');
        } else if (preferredMethod === 'linkedin') {
            window.open(linkedinLink, '_blank');
        } else {
            const mailtoUrl = `mailto:${emailAddress}?subject=${formattedSubject}&body=${formattedBody}`;
            window.location.href = mailtoUrl;
        }

        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[90] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
                onClick={onClose}
            />

            {/* Modal Dialog */}
            <div className="relative w-full max-w-2xl bg-neutral-900/95 border border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-primary/10 z-10 my-auto text-left overflow-hidden animate-in zoom-in-95 duration-200">
                {/* Decorative accent glow */}
                <div className="absolute -top-24 -right-24 size-48 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-24 -left-24 size-48 bg-secondary/15 rounded-full blur-3xl pointer-events-none" />

                {/* Header */}
                <div className="flex items-start justify-between gap-4 pb-6 border-b border-neutral-800">
                    <div>
                        <div className="flex items-center gap-2 mb-1.5">
                            <span className="inline-flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary">
                                <Sparkles size={14} />
                            </span>
                            <span className="text-xs uppercase font-medium tracking-wider text-primary">
                                Quick Reach Out
                            </span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-anton text-white tracking-wide">
                            LET&apos;S CONNECT & TALK
                        </h2>
                        <p className="text-sm text-neutral-400 mt-1">
                            Choose your preferred channel or send a direct message below.
                        </p>
                    </div>

                    <button
                        onClick={onClose}
                        className="size-10 rounded-full border border-neutral-800 bg-neutral-800/60 hover:bg-neutral-800 text-neutral-400 hover:text-white flex items-center justify-center transition-colors"
                        aria-label="Close modal"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Direct Channel Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6">
                    {/* LinkedIn */}
                    <div className="p-4 rounded-2xl border border-neutral-800/80 bg-neutral-950/40 hover:border-neutral-700 transition-all group flex flex-col justify-between">
                        <div className="flex items-center justify-between mb-3">
                            <div className="size-9 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
                                <Linkedin size={18} />
                            </div>
                            <a
                                href={linkedinLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-neutral-400 group-hover:text-white flex items-center gap-1 transition-colors"
                            >
                                Profile <ExternalLink size={12} />
                            </a>
                        </div>
                        <div>
                            <p className="text-xs text-neutral-400 font-medium">LinkedIn</p>
                            <p className="text-sm font-semibold text-white truncate">utkarsh1999rai</p>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="p-4 rounded-2xl border border-neutral-800/80 bg-neutral-950/40 hover:border-neutral-700 transition-all group flex flex-col justify-between">
                        <div className="flex items-center justify-between mb-3">
                            <div className="size-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                                <Mail size={18} />
                            </div>
                            <button
                                type="button"
                                onClick={() => handleCopy(emailAddress, 'email')}
                                className="text-xs text-neutral-400 hover:text-primary flex items-center gap-1 transition-colors"
                            >
                                {copiedField === 'email' ? (
                                    <>
                                        <Check size={12} className="text-primary" /> Copied
                                    </>
                                ) : (
                                    <>
                                        <Copy size={12} /> Copy
                                    </>
                                )}
                            </button>
                        </div>
                        <div>
                            <p className="text-xs text-neutral-400 font-medium">Email</p>
                            <a
                                href={`mailto:${emailAddress}`}
                                className="text-sm font-semibold text-white hover:underline truncate block"
                            >
                                {emailAddress}
                            </a>
                        </div>
                    </div>

                    {/* Phone / WhatsApp */}
                    <div className="p-4 rounded-2xl border border-neutral-800/80 bg-neutral-950/40 hover:border-neutral-700 transition-all group flex flex-col justify-between">
                        <div className="flex items-center justify-between mb-3">
                            <div className="size-9 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                                <Phone size={18} />
                            </div>
                            <a
                                href={`https://wa.me/${cleanPhone}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-emerald-400 hover:underline flex items-center gap-1 transition-colors"
                            >
                                <MessageCircle size={12} /> WhatsApp
                            </a>
                        </div>
                        <div>
                            <p className="text-xs text-neutral-400 font-medium">Mobile</p>
                            <a
                                href={`tel:${phoneNumber}`}
                                className="text-sm font-semibold text-white hover:underline truncate block"
                            >
                                {phoneNumber}
                            </a>
                        </div>
                    </div>
                </div>

                {/* Direct Message Form */}
                <form onSubmit={handleFormSubmit} className="space-y-4 pt-2">
                    <div className="flex items-center justify-between">
                        <label className="text-xs uppercase tracking-wider text-neutral-400 font-medium">
                            Send A Direct Message
                        </label>
                        <div className="flex items-center gap-2 text-xs">
                            <span className="text-neutral-500">Contact via:</span>
                            {(['email', 'whatsapp', 'linkedin'] as const).map((method) => (
                                <button
                                    key={method}
                                    type="button"
                                    onClick={() => setPreferredMethod(method)}
                                    className={`px-2.5 py-0.5 rounded-full capitalize font-medium transition-all ${
                                        preferredMethod === method
                                            ? 'bg-primary text-primary-foreground font-semibold shadow-sm'
                                            : 'bg-neutral-800 text-neutral-400 hover:text-white'
                                    }`}
                                >
                                    {method}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <input
                            type="text"
                            required
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-2.5 rounded-xl bg-neutral-950/60 border border-neutral-800 focus:border-primary text-white text-sm outline-none transition-colors"
                        />
                        <input
                            type="text"
                            required
                            placeholder="Your Email or Phone"
                            value={contactInfo}
                            onChange={(e) => setContactInfo(e.target.value)}
                            className="w-full px-4 py-2.5 rounded-xl bg-neutral-950/60 border border-neutral-800 focus:border-primary text-white text-sm outline-none transition-colors"
                        />
                    </div>

                    <textarea
                        required
                        rows={3}
                        placeholder="Tell me about your project, team opportunity, or inquiry..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-neutral-950/60 border border-neutral-800 focus:border-primary text-white text-sm outline-none transition-colors resize-none"
                    />

                    <div className="flex items-center justify-between pt-1">
                        <p className="text-xs text-neutral-500">
                            Based in {GENERAL_INFO.location || 'Varanasi, India'} • Open to full-time & freelance
                        </p>
                        <button
                            type="submit"
                            className="px-6 py-2.5 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm flex items-center gap-2 transition-all shadow-md shadow-primary/20 hover:scale-[1.02]"
                        >
                            <Send size={15} />
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactModal;
