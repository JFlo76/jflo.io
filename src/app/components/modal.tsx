'use client'
import { useEffect, useRef, useState } from 'react'
import { useScroll, motion } from 'motion/react'
import styles from '../modal.module.scss'
import { robotoCondensed } from '@/app/fonts'


interface ModalProps {
    children: React.ReactNode
    isVisible: boolean
    onClose: () => void
}

export default function Modal({ children, isVisible, onClose }: ModalProps) {
    const containerRef = useRef(null)
    const [scrollProgress, setScrollProgress] = useState(0)
    const { scrollYProgress } = useScroll({
        container: containerRef,
    })
    const [showBackToTop, setShowBackToTop] = useState(false)

    // Update scrollProgress state when scrollYProgress changes
    useEffect(() => {
        if (isVisible) {
            setScrollProgress(0);
            const unsubscribe = scrollYProgress.on("change", value => {
                setScrollProgress(value);
                // Show back to top button when scrolled down a bit
                setShowBackToTop(value > 0.1);
            });
            return unsubscribe;
        }
    }, [isVisible, scrollYProgress]);


    // Reset scroll position when modal opens
    useEffect(() => {
        if (isVisible) {
            setScrollProgress(0);
            if (containerRef.current) {
                (containerRef.current as HTMLElement).scrollTop = 0;
            }
        }
    }, [isVisible]);

    const variants = {
        hidden: { y: '100vh', transition: { duration: 0.75, ease: 'easeInOut' } },
        visible: { y: 0, transition: { duration: 0.75, ease: 'easeInOut' } },
    }

    // Add event listener for escape key
    useEffect(() => {
        const handleEscapeKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && isVisible) {
                onClose();
            }
        };

        // Add event listener when the modal is visible
        if (isVisible) {
            document.addEventListener('keydown', handleEscapeKey);
        }

        // Clean up the event listener when component unmounts or modal becomes invisible
        return () => {
            document.removeEventListener('keydown', handleEscapeKey);
        };
    }, [isVisible, onClose]);

    // Function to scroll back to top
    const scrollToTop = () => {
        if (containerRef.current) {
            (containerRef.current as HTMLElement).scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    };

    return (
        <motion.div
            key='modal'
            initial='hidden'
            animate='visible'
            exit='hidden'
            variants={variants}
            className={`fixed z-20 top-0 left-0 w-full h-full flex flex-col items-center overflow-y-auto ${styles.modal} bg-stone-900`}
            role='dialog'
            aria-label='Modal container'
            ref={containerRef}
        >
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-[--primary-blue-200] z-50 origin-left"
                style={{ scaleX: scrollProgress }}
                initial={{ scaleX: 0 }}
            />
            <button
                onClick={onClose}
                className={`${robotoCondensed.className} fixed top-[4rem] right-[4rem] text-white text-lg px-4 py-2 rounded bg-[var(--background-light)] hover:bg-[var(--primary-blue-200)] uppercase transition-all duration-300`}
            >
                x
            </button>
            {children}

            {/* Back to top button */}
            <motion.button
                onClick={scrollToTop}
                className={`${robotoCondensed.className} fixed bottom-[4rem] right-[2rem] text-white text-sm px-4 py-2 rounded bg-[var(--background-light)] hover:bg-[var(--primary-blue-200)] uppercase transition-all duration-300`}
                initial={{ opacity: 0 }}
                animate={{ opacity: showBackToTop ? 1 : 0 }}
                aria-label="Back to top"
            >
                Back to Top
            </motion.button>
        </motion.div>
    )
}
