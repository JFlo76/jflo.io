'use client'

import { motion, MotionValue, useTransform } from 'motion/react';
import { robotoCondensed } from '../fonts';
import styles from '../page.module.scss';
import Unicorn from './Unicorn';

interface AboutSectionProps {
    aboutScroll: MotionValue<number>;
    aboutRef: React.RefObject<HTMLElement>;
}

export default function AboutSection({ aboutScroll, aboutRef }: AboutSectionProps) {
    return (
        <motion.section
            className={`${styles.about} flex flex-col w-full h-full justify-center items-center p-20 relative`}
            ref={aboutRef}
        // style={{
        //     y: useTransform(aboutScroll, [0, 1], [100, 0]),
        //     opacity: useTransform(aboutScroll, [0, 0.5], [0, 1]),
        // }}
        >
            <div className={`flex flex-row items-center w-full md:w-[80vw] justify-between`}>
                <motion.article
                    style={{
                        y: useTransform(aboutScroll, [0.25, 0.8], [500, 0]),
                        opacity: useTransform(aboutScroll, [0.5, 1], [0, 1]),
                    }}
                    className={`w-full md:w-2/3`}
                >
                    <motion.h2
                        className={`${robotoCondensed.className} uppercase text-[4vw] md:text-[5vw]`}
                        style={{
                            x: useTransform(aboutScroll, [0.6, 0.8], [-500, 0])
                        }}
                    >
                        A little about me...
                    </motion.h2>
                    <p className={`${styles.about_text}`}>
                        With over a decade of experience in the tech industry, I can provide a wide range
                        of services to bridge the gap between design and development. My expertise allows me to seamlessly translate design concepts into functional and user-friendly interfaces. Some have called
                        me a "unicorn" because the combination of these skills is somewhat unique and
                        highly sought after. Even though this may be true, please don't call me that.
                    </p>
                    <a href='#work' className={`${styles.linkTo_work} ${robotoCondensed.className} uppercase`}>See my work</a>
                </motion.article>
                <Unicorn scrollRef={aboutScroll} />
            </div>
        </motion.section>
    );
}
