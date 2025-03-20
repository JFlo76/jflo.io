'use client'
// @refresh reset
import { animate, motion, useMotionValue } from 'motion/react'
import styles from './ScrollingBanner.module.scss'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { robotoCondensed } from '../fonts'

interface ScrollingBannerProps {
    items: string[]
    speed?: number
    direction?: 'left' | 'right'
}

export default function ScrollingBanner(props: ScrollingBannerProps) {

    const items = props.items;
    const speed = props.speed || 100;
    const bannerRef = useRef(null);
    const xTranslation = useMotionValue(0);
    const animationRef = useRef<{ stop: () => void } | null>(null);

    const bannerStyles = {
        top: '100%',
        background: 'linear-gradient(var(--primary-blue-600), var(--primary-blue-800))',
    };

    const startAnimation = () => {
        // Stop any existing animation
        if (animationRef.current) {
            animationRef.current.stop();
        }

        const bannerElement = document.getElementById(`banner`);
        const bannerWidth = bannerElement?.clientWidth || 0;
        let finalPosition = -bannerWidth / 2;

        // Reset position before starting new animation
        xTranslation.set(0);

        const controls = animate(xTranslation, [0, finalPosition], {
            duration: speed,
            delay: 0,
            ease: "linear",
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 0
        });

        // Store the animation controls for cleanup
        animationRef.current = controls;
    };

    useLayoutEffect(() => {
        startAnimation();

        return () => {
            if (animationRef.current) {
                animationRef.current.stop();
            }
        };
    }, [xTranslation, speed]);

    // Add window resize event listener
    useEffect(() => {
        const handleResize = () => {
            startAnimation();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [speed]);

    return (
        <div className={`${styles.bannerContainer}`} style={bannerStyles}>
            <motion.div
                id={`banner`}
                ref={bannerRef}
                className={`${styles.banner} ${robotoCondensed.className} flex`}
                style={{ x: xTranslation }}
            >
                {[...items, ...items].map((item, index) => (
                    <div key={index} className={`${styles.bannerItem} w-1/5`}>
                        {item}
                    </div>
                ))}
            </motion.div>
        </div >
    )
}
