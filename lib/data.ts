import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'utk87020@gmail.com',
    phone: '+91-9026034980',
    location: 'Varanasi, UP',
    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Utkarsh, I am reaching out to you because...',
    oldPortfolio: '',
    upworkProfile: '',
    resume: '/Utkarsh_Rai_Resume.pdf',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/UTkarsh87020' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/utkarsh1999rai' },
];

export const MY_STACK = {
    frontend: [
        { name: 'JavaScript', icon: '/logo/js.png' },
        { name: 'React.js', icon: '/logo/react.png' },
        { name: 'HTML5', icon: '/logo/html.png' },
        { name: 'CSS3', icon: '/logo/css.png' },
    ],
    backend: [
        { name: 'Node.js', icon: '/logo/node.png' },
        { name: 'Express.js', icon: '/logo/express.png' },
        { name: 'REST API Development', icon: '/logo/node.png' },
    ],
    database: [
        { name: 'MySQL', icon: '/logo/mysql.svg' },
        { name: 'Schema Design', icon: '/logo/mysql.svg' },
        { name: 'SQL Optimization', icon: '/logo/mysql.svg' },
    ],
    tools: [
        { name: 'Git', icon: '/logo/git.png' },
        { name: 'GitHub', icon: '/logo/github.png' },
        { name: 'AWS', icon: '/logo/aws.png' },
        { name: 'Microsoft Excel', icon: '/logo/excel.png' },
        { name: 'Power BI', icon: '/logo/powerbi.png' },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'FastTrack Delivery',
        slug: 'fasttrack-delivery',
        year: 2026,
        techStack: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Express.js'],
        thumbnail: '/projects/thumbnail/fasttrack-delivery.jpg',
        longThumbnail: '/projects/long/fasttrack-delivery.jpg',
        images: ['/projects/images/fasttrack-delivery-1.jpg'],
        sourceCode: 'https://github.com/UTkarsh87020',
        liveUrl: 'https://github.com/UTkarsh87020',
        description: 'AI-powered smart logistics system with customer profiles, order lifecycle, driver assignment, real-time tracking, route optimization, and a live order-status dashboard.',
        role: 'Architected and delivered the full-stack platform solo within 6 weeks. Engineered route optimization using Nearest Neighbor Heuristic, Time-Window Constraint Scheduling, and a custom Hybrid Model.',
    },
    {
        title: 'Dynamic Music Player Web App',
        slug: 'dynamic-music-player',
        year: 2025,
        techStack: ['HTML5', 'CSS3', 'Vanilla JavaScript'],
        thumbnail: '/projects/thumbnail/dynamic-music-player.jpg',
        longThumbnail: '/projects/long/dynamic-music-player.jpg',
        images: ['/projects/images/dynamic-music-player-1.jpg'],
        sourceCode: 'https://github.com/UTkarsh87020',
        liveUrl: 'https://github.com/UTkarsh87020',
        description: 'Browser-native music player with play, pause, skip, seek, and progress controls, built with pure JavaScript DOM manipulation.',
        role: 'Designed a mobile-first responsive interface across mobile, tablet, and desktop breakpoints, with optimized event handling and smooth transitions.',
    },
];

export const MY_EXPERIENCE = [
    { title: 'Web Development Intern', company: 'Mecatredz Technology', duration: 'Dec 2021 - Apr 2022' },
    { title: 'Database Management Intern', company: 'Reckon Software', duration: 'Sep 2022 - Feb 2023' },
];
