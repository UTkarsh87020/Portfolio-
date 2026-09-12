import { notFound } from 'next/navigation';
import ProjectDetails from './_components/ProjectDetails';
import { PROJECTS } from '@/lib/data';
import { Metadata } from 'next';

export const generateStaticParams = async () => {
    return PROJECTS.map((project) => ({ slug: project.slug }));
};

export const generateMetadata = async ({
    params,
}: {
    params: Promise<{ slug: string }>;
}) => {
    const { slug } = await params;
    const project = PROJECTS.find((project) => project.slug === slug);

    if (!project) return {} as Metadata;

    const pageTitle = `${project.title} - ${project.techStack.slice(0, 3).join(', ')}`;

    return {
        title: pageTitle,
        description: project.description,
        openGraph: {
            title: `${project.title} | Utkarsh Rai`,
            description: project.description,
            type: 'article',
            url: `https://utkarshrai.devpro/projects/${project.slug}`,
            images: [
                {
                    url: project.thumbnail,
                    width: 1200,
                    height: 630,
                    alt: project.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${project.title} | Utkarsh Rai`,
            description: project.description,
            images: [project.thumbnail],
        },
    } as Metadata;
};

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;

    const project = PROJECTS.find((project) => project.slug === slug);

    if (!project) {
        return notFound();
    }

    return <ProjectDetails project={project} />;
};

export default Page;
