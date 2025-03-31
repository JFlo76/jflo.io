import { motion, MotionValue, useTransform } from 'motion/react';
import { robotoCondensed } from '../fonts';
import styles from '../page.module.scss';

interface FeaturedProjectsProps {
    workScroll: MotionValue<number>;
    handleModalOpen: (item: string, event: React.MouseEvent<HTMLElement>) => void;
}

const FeaturedProjects = ({ workScroll, handleModalOpen }: FeaturedProjectsProps) => {
    const projectsRowLeftRotate = useTransform(
        workScroll,
        [0.5, 0.9],
        ['perspective(50px) rotate3d(0, 1, 0, 0deg) translateX(-50px)', 'perspective(50px) rotate3d(0, 1, 0, 1.5deg) translateX(50px)']
    );

    const projectsRowRightRotate = useTransform(
        workScroll,
        [0.5, 0.9],
        ['perspective(50px) rotate3d(0, 1, 0, 0deg) translateX(50px)', 'perspective(50px) rotate3d(0, 1, 0, -1.5deg) translateX(-50px)']
    );

    return (
        <div className='mb-20'>
            <motion.h2
                className={`${robotoCondensed.className} text-center uppercase text-5xl mb-8`}
                style={{
                    y: useTransform(workScroll, [0.25, 0.75], [40, 0]),
                    opacity: useTransform(workScroll, [0.4, 0.75], [0, 1]),
                }}
            >Featured projects</motion.h2>
            <motion.div
                className={`${styles.projectsRow} flex flex-row justify-center`}
                style={{
                    y: useTransform(workScroll, [0.5, 0.75], [40, 0]),
                    opacity: useTransform(workScroll, [0.5, 0.75], [0, 1]),
                }}
            >
                <motion.div className={`flex flex-col items-center origin-center`}
                    style={{
                        transform: projectsRowLeftRotate
                    }}
                >
                    <a href="" onClick={(event) => handleModalOpen('HitachiStudio', event)}
                        className={`block rounded-lg overflow-hidden relative group border border-gray-400 mb-4`}>
                        <img
                            srcSet="/images/hitachi/lumada-studio-thumb.webp, /images/hitachi/lumada-studio-thumb@2x.webp 2x"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px" alt="Hitachi Lumada Studio dashboard"
                            className="transition-transform duration-300 group-hover:scale-105 group-hover:grayscale aspect-video object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h3 className={`${styles.caseStudy} ${robotoCondensed.className} text-white text-4xl uppercase text-[--primary-blue-200] [text-shadow:_0_1px_3px_rgba(0,0,0,0.8)]`}>View case study</h3>
                        </div>
                    </a>
                    <p className={`${robotoCondensed.className} text-white text-2xl uppercase`}>Hitachi - UI/UX Designer</p>
                </motion.div>

                <div className={`${styles.projectsRowCenter} flex flex-col items-center z-10`}>
                    <a href="" onClick={(event) => handleModalOpen('Indeed', event)}
                        className={` border border-gray-400 rounded-lg overflow-hidden block relative group mb-4`}>
                        <img
                            srcSet="/images/indeed/interview-scheduling-modal-thumb.webp, /images/indeed/interview-scheduling-modal-thumb@2x.webp 2x"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                            alt="Indeed.com interface with the interview scheduling modal open"
                            className="transition-transform duration-300 group-hover:scale-105 group-hover:grayscale aspect-video object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <h3 className={`${styles.caseStudy} ${robotoCondensed.className} text-white text-4xl uppercase text-[--primary-blue-200]`}>View case study</h3>
                        </div>
                    </a>
                    <p className={`${robotoCondensed.className} text-white text-2xl uppercase`}>Indeed - UX Developer</p>
                </div>

                <motion.div className={`flex flex-col items-center origin-center`}
                    style={{
                        transform: projectsRowRightRotate
                    }}
                >
                    <a href="" onClick={(event) => handleModalOpen('HitachiSolutionsManager', event)}
                        className={`block rounded-lg overflow-hidden relative group border border-gray-400 mb-4`}>
                        <img
                            srcSet="/images/hitachi/lumada-solutions-manager-thumb.webp, /images/hitachi/lumada-solutions-manager-thumb@2x.webp 2x"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px" alt="Hitachi Solutions Manager dashboard"
                            className="transition-transform duration-300 group-hover:scale-105 group-hover:grayscale aspect-video object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h3 className={`${styles.caseStudy} ${robotoCondensed.className} text-white text-4xl uppercase text-[--primary-blue-200] [text-shadow:_0_1px_3px_rgba(0,0,0,0.8)]`}>View case study</h3>
                        </div>
                    </a>
                    <p className={`${robotoCondensed.className} text-white text-2xl uppercase`}>Hitachi - UI/UX Designer</p>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default FeaturedProjects;
