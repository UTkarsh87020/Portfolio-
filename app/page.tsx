import AboutMe from './_components/AboutMe';
import Banner from './_components/Banner';
import Certificates from './_components/Certificates';
import Experiences from './_components/Experiences';
import Skills from './_components/Skills';
import ProjectList from './_components/ProjectList';

export default function Home() {
    return (
        <div className="page-home min-h-screen">
            <Banner />
            <AboutMe />
            <Skills />
            <Experiences />
            <Certificates />
            <ProjectList />
        </div>
    );
}

