import { motion, MotionValue, useTransform } from 'motion/react';
import { robotoCondensed } from '../fonts';

interface ProjectArchivesProps {
    workScroll: MotionValue<number>;
    handleModalOpen: (item: string, event: React.MouseEvent<HTMLElement>) => void;
}

interface ProjectItem {
    id: string;
    title: string;
    thumbSrc: string;
    thumbSrc2x: string;
    altText: string;
}

export default function ProjectArchives({ workScroll, handleModalOpen }: ProjectArchivesProps) {
    // Define project data array
    const projects: ProjectItem[] = [
        {
            id: 'mixpo',
            title: 'Mixpo',
            thumbSrc: '/images/mixpo/mixpo-home-thumb.webp',
            thumbSrc2x: '/images/mixpo/mixpo-home-thumb@2x.webp',
            altText: 'Homepage for Mixpo.com'
        },
        {
            id: 'potn',
            title: 'Product Of The North',
            thumbSrc: '/images/potn/potn-thumb.webp',
            thumbSrc2x: '/images/potn/potn-thumb@2x.webp',
            altText: 'Indeed.com interface with the interview scheduling modal open'
        },
        {
            id: 'skullshoppe',
            title: 'The Skull Shoppe',
            thumbSrc: '/images/skullshoppe/skullshoppe-thumb.webp',
            thumbSrc2x: '/images/skullshoppe/skullshoppe-thumb@2x.webp',
            altText: 'SkullShoppe.com logo with a skull and ornate frame'
        },
        {
            id: 'imprnt',
            title: 'Imprnt',
            thumbSrc: '/images/imprnt/imprnt-home-thumb.webp',
            thumbSrc2x: '/images/imprnt/imprnt-home-thumb@2x.webp',
            altText: 'Imprnt.com homepage with images of printed shirts'
        },
        // Duplicate the first three projects to maintain the original grid layout
        {
            id: 'morgan',
            title: 'Morgan Colton',
            thumbSrc: '/images/morgan/morgan-portfolio-thumb.webp',
            thumbSrc2x: '/images/morgan/morgan-portfolio-thumb@2x.webp',
            altText: 'Morgan Colton website homepage'
        },
        {
            id: 'rich-family',
            title: 'Rich Family Ortho',
            thumbSrc: '/images/rich-family-ortho/rich-family-ortho-thumb.webp',
            thumbSrc2x: '/images/rich-family-ortho/rich-family-ortho-thumb@2x.webp',
            altText: 'Homepage for Rich Family Orthodontics'
        },
        {
            id: 'ritucci',
            title: 'Ritucci Friedman Ortho',
            thumbSrc: '/images/ritucci-friedman-ortho/ritucci-friedman-ortho-thumb.webp',
            thumbSrc2x: '/images/ritucci-friedman-ortho/ritucci-friedman-ortho-thumb@2x.webp',
            altText: 'Homepage for Ritucci Friedman Orthodontics'
        },
        {
            id: 'oxford',
            title: 'Hillman Dentistry',
            thumbSrc: '/images/hillman-dentistry/hillman-dentistry-thumb.webp',
            thumbSrc2x: '/images/hillman-dentistry/hillman-dentistry-thumb@2x.webp',
            altText: 'Homepage for Hillman Dentistry'
        }
    ];

    return (
        <motion.div
            style={{
                y: useTransform(workScroll, [0.75, 1], [40, 0]),
                opacity: useTransform(workScroll, [0.75, 1], [0, 1]),
            }}
        >
            <motion.h2
                className={`${robotoCondensed.className} text-center text-2xl uppercase mb-4`}
            >
                Archived Projects
            </motion.h2>
            <div className="grid grid-cols-8 gap-4">
                {projects.map((project) => (
                    <div key={project.id} className={`text-center aspect-video`}>
                        <a href="" className='group relative block mb-2' onClick={(event) => handleModalOpen(project.title, event)}>
                            <img
                                srcSet={`${project.thumbSrc}, ${project.thumbSrc2x} 2x`}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                                alt={project.altText}
                                className="rounded-lg border border-gray-400 transition-transform duration-300 group-hover:grayscale aspect-video object-cover w-full h-full"
                            />
                            <div className="absolute inset-0 top-0 bottom-0 left-0 right-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className={`${robotoCondensed.className} text-white text-base m-0 uppercase`}>View Details</p>
                            </div>
                        </a>
                        <p className={`${robotoCondensed.className} text-white text-base m-0`}>{project.title}</p>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};
