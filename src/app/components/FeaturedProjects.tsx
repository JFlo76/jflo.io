
import Image from 'next/image';
import { motion, MotionValue, useTransform } from 'motion/react';
import { robotoCondensed } from '../fonts';

interface FeaturedProjectsProps {
    workScroll: MotionValue<number>;
    handleModalOpen: (item: string, event: React.MouseEvent<HTMLElement>) => void;
}

const FeaturedProjects = ({ workScroll, handleModalOpen }: FeaturedProjectsProps) => {

    return (
        <div className='pt-10'>
            <motion.h2
                className={`${robotoCondensed.className} uppercase text-right text-[4vw] md:text-[5vw] mb-10`}
                style={{
                    x: useTransform(workScroll, [0, 0.25], [100, -60]),
                }}
            >Featured projects</motion.h2>
            {/* Indeed */}
            <div className='flex flex-row items-center justify-end mb-20'>
                <div className='flex flex-col items-end me-8'>
                    <h3 className={`${robotoCondensed.className} uppercase leading-[3vw] text-[2vw] md:text-[3vw]`}>Indeed</h3>
                    <p>UX Developer</p>
                </div>

                <motion.a href="" onClick={(event) => handleModalOpen('Indeed', event)}
                    className={`rounded-lg overflow-hidden block relative group mb-4`}
                    style={{
                        x: useTransform(workScroll, [0, 0.35], [900, 60]),
                    }}>
                    <Image
                        src='/images/indeed/interview-scheduling-modal.webp'
                        alt='Indeed.com interface with the interview scheduling modal open'
                        className="transition-transform duration-1000 group-hover:scale-105 group-hover:grayscale aspect-video object-cover w-[60vw] h-full"
                        sizes="(max-width: 768px) 50vw, 100vw"
                        width={1200}
                        height={800}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h3 className={`${robotoCondensed.className} text-white text-4xl uppercase text-[--primary-blue-200]`}>View case study</h3>
                    </div>
                </motion.a>
            </div>
            {/* Hitachi Studio */}
            <div className='flex flex-row items-center justify-start mb-20'>
                <motion.a href="" onClick={(event) => handleModalOpen('HitachiStudio', event)}
                    className={`rounded-lg overflow-hidden block relative group mb-4`}
                    style={{
                        x: useTransform(workScroll, [0.35, 0.6], [-900, -60]),
                    }}>

                    <Image
                        src='/images/hitachi/LumadaStudio-RegionMapActive.webp'
                        alt='Hitachi Studio interface with the region map active'
                        className="transition-transform duration-1000 group-hover:scale-105 group-hover:grayscale aspect-video object-cover w-[60vw] h-full"
                        sizes="(max-width: 768px) 50vw, 100vw"
                        width={1200}
                        height={800}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h3 className={`${robotoCondensed.className} text-white text-4xl uppercase text-[--primary-blue-200]`}>View case study</h3>
                    </div>
                </motion.a>
                <div className='flex flex-col items-start ms-8'>
                    <h3 className={`${robotoCondensed.className} uppercase leading-[3vw] text-[2vw] md:text-[3vw]`}>Hitachi Studio</h3>
                    <p>UI/UX Designer</p>
                </div>
            </div>
            {/* Hitachi Solutions Manager */}
            <div className='flex flex-row items-center justify-end mb-20'>
                <div className='flex flex-col items-end me-8'>
                    <h3 className={`${robotoCondensed.className} uppercase text-right leading-[3vw] text-[2vw] md:text-[3vw]`}>Hitachi<br />Solutions Manager</h3>
                    <p>UI/UX Designer</p>
                </div>
                <motion.a href="" onClick={(event) => handleModalOpen('HitachiSolutionsManager', event)}
                    className={`rounded-lg overflow-hidden block relative group mb-4`}
                    style={{
                        x: useTransform(workScroll, [0.5, 0.85], [900, 60]),
                    }}>

                    <Image
                        src='/images/hitachi/solutions-manager-new-templates-card.webp'
                        alt='Hitachi Solutions Manager interface with the new templates card'
                        className="transition-transform duration-1000 group-hover:scale-105 group-hover:grayscale aspect-video object-cover w-[60vw] h-full"
                        sizes="(max-width: 768px) 50vw, 100vw"
                        width={1200}
                        height={800}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h3 className={`${robotoCondensed.className} text-white text-4xl uppercase text-[--primary-blue-200]`}>View case study</h3>
                    </div>
                </motion.a>
            </div>
        </div>
    );

}; export default FeaturedProjects;