import { ArrowDown } from 'lucide-react';

const ArrowAnimation = () => {
    return (
        <a
            href="#about-me"
            aria-label="Scroll down"
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
        >
            <ArrowDown size={30} strokeWidth={1.5} />
        </a>
    );
};

export default ArrowAnimation;
