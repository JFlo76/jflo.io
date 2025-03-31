import { motion, MotionValue, useScroll, useTransform } from 'motion/react';
import { robotoCondensed } from '../fonts';
import { useRef } from 'react';

interface FeaturedProjectsProps {
    // workScroll: MotionValue<number>;
    containerRef: React.RefObject<HTMLElement>;
    handleModalOpen: (item: string, event: React.MouseEvent<HTMLElement>) => void;
}

const FeaturedProjects2 = ({ containerRef, handleModalOpen }: FeaturedProjectsProps) => {

    const ref = useRef(null);
    const { scrollYProgress: workScroll } = useScroll({
        container: containerRef,
        target: ref,
        offset: ['start end', 'end end'],
    });

    return (
        <div className='pt-10'>
            <motion.h2
                className={`${robotoCondensed.className} uppercase text-center text-[4vw] md:text-[5vw]`}
                style={{
                    y: useTransform(workScroll, [0.25, 0.75], [80, 0]),
                    opacity: useTransform(workScroll, [0.4, 0.75], [0, 1]),
                }}
            >Featured projects</motion.h2>
            <div className='flex flex-row items-center justify-end mb-20' ref={ref}>
                <div className='flex flex-col items-end'>
                    <h3 className={`${robotoCondensed.className} uppercase text-[2vw] md:text-[3vw]`}>Indeed</h3>
                    <p>UX Developer</p>
                </div>

                <motion.img
                    src='/images/indeed/interview-scheduling-modal.webp'
                    srcSet='/images/indeed/interview-scheduling-modal.webp, /images/indeed/interview-scheduling-modal@2x.webp 2x'
                    alt='Indeed.com interface with the interview scheduling modal open'
                    loading="lazy"
                    // className="transform-[-translate-x-[-50%]"
                    style={{
                        x: useTransform(workScroll, [1, 1], [200, 200]),
                        y: useTransform(workScroll, [0.25, 0.75], [600, 100]),
                        // opacity: useTransform(workScroll, [0.4, 0.75], [0, 1]),
                    }}
                />
            </div>
            <div className='flex flex-row items-center justify-start' ref={ref}>
                <motion.img
                    src='/images/indeed/interview-scheduling-modal.webp'
                    srcSet='/images/indeed/interview-scheduling-modal.webp, /images/indeed/interview-scheduling-modal@2x.webp 2x'
                    alt='Indeed.com interface with the interview scheduling modal open'
                    loading="lazy"
                    // className="transform-[-translate-x-[-50%]"
                    style={{
                        x: useTransform(workScroll, [1, 1], [-200, -200]),
                        y: useTransform(workScroll, [0.25, 0.75], [600, 100]),
                        // opacity: useTransform(workScroll, [0.4, 0.75], [0, 1]),
                    }}
                />
                <div className='flex flex-col items-start'>
                    <h3 className={`${robotoCondensed.className} uppercase text-[2vw] md:text-[3vw]`}>Indeed</h3>
                    <p>UX Developer</p>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProjects2;
