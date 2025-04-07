'use client'

import { motion, MotionValue, useTransform } from 'motion/react';
import { robotoCondensed } from '../fonts';
import styles from '../page.module.scss';

interface AboutSectionProps {
    aboutScroll: MotionValue<number>;
    aboutRef: React.RefObject<HTMLElement>;
}

export default function AboutSection({ aboutScroll, aboutRef }: AboutSectionProps) {
    return (
        <motion.section
            className={`${styles.about} flex flex-col w-full h-full justify-center items-center p-20 relative overflow-hidden`}
            ref={aboutRef}
        >
            <div className={`flex flex-row items-center w-full md:w-[80vw] justify-between`}>
                <motion.article
                    style={{
                        y: useTransform(aboutScroll, [0.25, 0.8], [500, 0]),
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
                        With over a decade of experience in the tech industry, I specialize in bridging the gap between design and development, transforming concepts into functional, user-friendly interfaces. My unique blend of expertise in both disciplines enables me to create seamless digital experiences that are both visually compelling and technically sound. While some have referred to me as a &lsquo;unicorn&rsquo; due to this rare combination of skills, I prefer to think of it simply as a deep passion for crafting intuitive and high-performing products. Huzzah!
                    </p>
                    <a href='#work' className={`${styles.linkTo_work} ${robotoCondensed.className} uppercase`}>See my work</a>
                </motion.article>
                <motion.img
                    src='/images/JFloMug.webp'
                    alt='JFlo with a mug of coffee'
                    className='absolute bottom-0 right-0 w-1/2 md:w-1/3'
                    style={{
                        y: useTransform(aboutScroll, [0.5, 1], [900, 0]),
                    }}
                />
            </div>
        </motion.section>
    );
}
