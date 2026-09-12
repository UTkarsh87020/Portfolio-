import { IAchievement, ICertificate, IExperience, IProject } from '@/types';

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
        title: 'Bharat Express (भारत एक्सप्रेस)',
        slug: 'bharat-express',
        year: 2026,
        techStack: ['Node.js', 'Express.js', 'Leaflet.js', 'ESRI Dark Canvas', 'JavaScript', 'HTML5/CSS3'],
        thumbnail: '/projects/thumbnail/bharat-express.png',
        longThumbnail: '/projects/long/bharat-express.png',
        images: [
            '/projects/images/bharat-express-1.png',
            '/projects/images/bharat-express-2.png',
            '/projects/images/bharat-express-3.png',
        ],
        sourceCode: 'https://github.com/UTkarsh87020/Bharat_Express',
        liveUrl: 'https://github.com/UTkarsh87020/Bharat_Express',
        description: 'Smart logistics control room and multi-city spatial telemetry hub featuring ESRI dark canvas cartography, multi-objective AI route optimization, customer safe-route locks, and 1-click Delhi Police SOS emergency dispatch.',
        role: 'Architected and engineered the logistics control room. Implemented multi-objective AI route optimization (Nearest-Neighbor, EDF Time-Window, Monsoon Hazard K-Means), custom HTML5 Canvas hardware telemetry gauges, and responsive multi-device dispatch workflows.',
    },
    {
        title: 'MoodTunes — Music App',
        slug: 'moodtunes',
        year: 2025,
        techStack: ['React 18', 'Vite', 'Node.js', 'Express.js', 'Context API', 'iTunes API'],
        thumbnail: '/projects/thumbnail/moodtunes.png',
        longThumbnail: '/projects/long/moodtunes.png',
        images: [
            '/projects/images/moodtunes-1.png',
            '/projects/images/moodtunes-2.png',
            '/projects/images/moodtunes-3.png',
            '/projects/images/moodtunes-4.png',
        ],
        sourceCode: 'https://github.com/UTkarsh87020/MoodTunes',
        liveUrl: 'https://moodtunes-lipx.onrender.com/',
        description: 'Full-stack music streaming platform that analyzes user mood and sentiment from plain text using a localized NLP scoring engine to deliver dynamically matched soundtracks and real-time audio previews.',
        role: 'Built responsive glassmorphism UI with 3 themes, interactive persistent player with draggable queue, and localized sentiment scoring engine.',
    },
    {
        title: 'Interactive GitHub Profile & Heatmap',
        slug: 'github-interactive-profile',
        year: 2026,
        techStack: ['Node.js', 'SVG Animations', 'GitHub Actions', 'JavaScript', 'CSS'],
        thumbnail: '/projects/thumbnail/github-profile.svg',
        longThumbnail: '/projects/long/github-profile.svg',
        images: ['/projects/images/github-profile-1.svg'],
        sourceCode: 'https://github.com/UTkarsh87020/UTkarsh87020',
        liveUrl: 'https://github.com/UTkarsh87020',
        description: 'Automated, interactive GitHub profile featuring an animated jet contribution heatmap and a retro terminal ASCII dashboard.<br/><br/><strong>Key Highlights:</strong><ul><li><strong>🚀 Animated Jet Heatmap:</strong> Space-jet animation navigating and illuminating live GitHub contribution cells.</li><li><strong>💻 Retro Terminal UI:</strong> Cyber-style ASCII portrait and live developer stats with dark/light mode.</li><li><strong>⚡ Automated CI/CD:</strong> GitHub Actions workflow that automatically updates the heatmap SVG every few hours.</li><li><strong>🎨 Pure Vector Scripts:</strong> Lightweight SVG engine built with JavaScript (generate.mjs) and CSS keyframe animations.</li></ul>',
        role: 'Designed the custom SVGs and built the automated CI/CD pipeline to dynamically update live GitHub metrics.',
    },
];

export const MY_EXPERIENCE: IExperience[] = [
    {
        title: 'Web Development Intern',
        company: 'Mecatredz Technology',
        duration: 'Dec 2021 - Apr 2022',
        points: [
            'Developed interactive, fully responsive frontend components for live client facing websites using HTML5, CSS3, and JavaScript, directly improving cross device user experience.',
            'Collaborated with senior engineers in Agile sprints to review, refactor, and modernize legacy codebases applying Git branching and pull request workflows throughout.',
            'Gained practical SDLC exposure from requirements and design through code review, testing, and client aligned delivery in a professional agency environment.',
        ],
    },
    {
        title: 'Database Management Intern',
        company: 'Reckon Software',
        duration: 'Sep 2022 - Feb 2023',
        points: [
            'Designed and maintained production MySQL databases for core business applications, enforcing referential integrity across complex schemas.',
            'Authored and tuned advanced SQL queries multi - table JOINs, correlated subqueries, and indexed lookups measurably reducing retrieval latency and improving application response times.',
            'Documented schema structures and query patterns to support team knowledge transfer and streamline onboarding.',
        ],
    },
];

export const CERTIFICATES: ICertificate[] = [
    {
        title: 'AWS Academy',
        duration: 'January 2026 - March 2026',
        pdf: 'cloud.pdf',
        link: 'https://drive.google.com/file/d/1bbrga1yYiIMorYRIswnAyhsG3t04KIs5/view?usp=sharing',
        points: [
            'Developed an understanding of cloud infrastructure, deployment concepts, and AWS-based technologies through structured learning.',
            'Strengthened technical problem-solving skills by exploring cloud-based application development and modern computing environments.',
        ],
    },
    {
        title: 'Java Full Stack Developer',
        duration: 'October 2025 - December 2025',
        pdf: 'java.pdf',
        link: 'https://drive.google.com/file/d/1kp4yYtJrk03k5M1a_3DXJvGRFgZMHsWW/view?usp=sharing',
        points: [
            'Completed a 10-week Java Full Stack Developer internship, gaining practical exposure to full-stack application development.',
            'Strengthened understanding of Java-based development and full-stack engineering workflows through structured technical training.',
        ],
    },
];

export const ACHIEVEMENTS: IAchievement[] = [
    {
        title: 'Innocodeathon',
        year: 2024,
        pdf: 'Innocodeathon.pdf',
        link: 'https://drive.google.com/file/d/1Ck5uTgVJtgPHci9ZEHlt-NFNsVqthWof/view?usp=sharing',
        points: [
            'Worked as a Frontend Developer, building fully responsive web pages with a focus on clean UI, usability, and cross-device compatibility.',
            'Collaborated with the team to integrate frontend components and deliver the project within the competition requirements.',
            'Recognized for Outstanding Performance in the final round of InnoCodeathon 2024.',
        ],
    },
];

export const MY_CERTIFICATES = CERTIFICATES;
export const MY_ACHIEVEMENTS = ACHIEVEMENTS;


