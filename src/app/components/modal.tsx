'use client'
import { useEffect, useRef, useState } from 'react'
import { useScroll, motion } from 'motion/react'
import styles from '../modal.module.scss'
import { robotoCondensed } from '@/app/fonts'
import CloseIcon from '../components/CloseIcon'


interface ModalProps {
    children: React.ReactNode
    isVisible: boolean
    onClose: () => void
}

export default function Modal({ children, isVisible, onClose }: ModalProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const closeButtonRef = useRef<HTMLButtonElement>(null)
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
                containerRef.current.scrollTop = 0;
            }
        }
    }, [isVisible]);

    // Focus management for the modal
    useEffect(() => {
        if (isVisible && closeButtonRef.current) {
            // Store the element that had focus before the modal opened
            const previouslyFocusedElement = document.activeElement as HTMLElement;

            // Focus the close button when modal opens
            closeButtonRef.current.focus();

            // Create a function to restore focus when modal closes
            const restoreFocus = () => {
                if (previouslyFocusedElement) {
                    previouslyFocusedElement.focus();
                }
            };

            // Return cleanup function to restore focus when modal closes
            return restoreFocus;
        }
    }, [isVisible]);

    // Trap focus within the modal when it's open
    useEffect(() => {
        if (!isVisible || !containerRef.current) return;

        const modal = containerRef.current;

        const handleTabKey = (e: KeyboardEvent) => {
            if (e.key !== 'Tab') return;

            // Get all focusable elements in the modal
            const focusableElements = modal.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );

            const firstElement = focusableElements[0] as HTMLElement;
            const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

            // If shift + tab and focus is on first element, move to last element
            if (e.shiftKey && document.activeElement === firstElement) {
                e.preventDefault();
                lastElement.focus();
            }
            // If tab and focus is on last element, move to first element
            else if (!e.shiftKey && document.activeElement === lastElement) {
                e.preventDefault();
                firstElement.focus();
            }
        };

        document.addEventListener('keydown', handleTabKey);
        return () => {
            document.removeEventListener('keydown', handleTabKey);
        };
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
            containerRef.current.scrollTo({
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
            aria-modal="true"
            aria-label='Modal container'
            ref={containerRef}
            tabIndex={-1}
        >
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-[--primary-blue-200] z-50 origin-left"
                style={{ scaleX: scrollProgress }}
                initial={{ scaleX: 0 }}
            />
            <button
                ref={closeButtonRef}
                onClick={onClose}
                className={`${robotoCondensed.className} fixed top-[4rem] right-[4rem] text-white text-lg px-4 py-2 rounded bg-[var(--background-light)] hover:bg-[var(--primary-blue-200)] uppercase transition-all duration-300`}
                aria-label='Close modal'
            >
                <CloseIcon strokeColor="#fff" className="w-6 h-6 inline-block" />
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
