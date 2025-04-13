'use client'

import { motion, MotionValue, useTransform } from 'motion/react';
import { robotoCondensed } from '../fonts';
import styles from '../page.module.scss';
import LinkButton from './LinkButton';

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
                        With over a decade of experience in the tech industry, I specialize in bridging the gap between design and development, transforming concepts into functional, user-friendly interfaces. My unique blend of expertise in both disciplines enables me to create seamless digital experiences that are both visually compelling and technically sound. While some have referred to me as a &ldquo;unicorn&rdquo; due to this rare combination of skills, I prefer to think of it simply as a deep passion for crafting intuitive and high-performing products. Huzzah!
                    </p>
                    <LinkButton href="#work" label="View projects" className='me-4' icon={
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 inline-block">
                            <circle cx="16" cy="16" r="16" fill="white" />
                            <path d="M15.3505 25.875C15.6392 26.375 16.3608 26.375 16.6495 25.875L25.7428 10.125C26.0315 9.625 25.6706 9 25.0933 9H6.90673C6.32938 9 5.96854 9.625 6.25721 10.125L15.3505 25.875Z" fill="#BE230B" />
                        </svg>
                    } />
                    <LinkButton
                        href="https://github.com/JFlo76/jflo.io"
                        target="_blank"
                        label="View my GitHub"
                        icon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-8 h-8 inline-block"
                            >
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.263.793-.587 0-.287-.012-1.243-.018-2.257-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.204.087 1.837 1.237 1.837 1.237 1.07 1.833 2.807 1.303 3.492.997.108-.775.42-1.303.763-1.603-2.665-.303-5.467-1.333-5.467-5.93 0-1.31.468-2.383 1.237-3.223-.123-.303-.537-1.523.117-3.177 0 0 1.01-.323 3.3 1.23a11.52 11.52 0 013.003-.403c1.02.005 2.047.137 3.003.403 2.29-1.553 3.3-1.23 3.3-1.23.654 1.654.24 2.874.117 3.177.768.84 1.237 1.913 1.237 3.223 0 4.61-2.807 5.623-5.48 5.92.432.373.816 1.11.816 2.237 0 1.617-.015 2.92-.015 3.317 0 .327.192.707.798.587C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                        }
                    />
                </motion.article>
                <motion.img
                    src='/images/JFloMug.webp'
                    srcSet='/images/JFlo.webp 1x, /images/JFlo@2x.webp 2x'
                    alt='Photo of Jason Florence looking up to the left'
                    className='absolute bottom-0 right-0 w-1/2 md:w-1/3'
                    style={{
                        y: useTransform(aboutScroll, [0.5, 1], [900, 0]),
                    }}
                />
            </div>
        </motion.section>
    );
}
