'use client'
// @refresh reset
import { useRef, useState } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'motion/react';
import dynamic from 'next/dynamic'
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
import MouseScrollAnimation from './assets/MouseScrollAnimation.json';
import { robotoCondensed } from './fonts'
import SvgBackground from './components/svg-background/svgBg'
import styles from './page.module.scss'

import Indeed from './components/Indeed'
import HitachiStudio from './components/HitachiStudio'
import Modal from './components/modal';
import ScrollingBanner from './components/ScrollingBanner';
import HitachiSolutionsManager from './components/HitachiSolutionsManager';
import ProjectArchives from './components/ProjectArchives';
import ProductOfTheNorth from './components/ProductOfTheNorth';
import TheSkullShoppe from './components/TheSkullShoppe';
import Imprnt from './components/Imprnt';
import MorganColton from './components/MorganColton';
import Mixpo from './components/Mixpo';
import RichFamilyOrtho from './components/RichFamilyOrtho';
import RitucciFriedmanOrtho from './components/RitucciFriedmanOrtho';
import HillmanDentistry from './components/HillmanDentistry';
import AboutSection from './components/AboutSection';
import FeaturedProjects from './components/FeaturedProjects';
import VibePrototype from './components/VibePrototype';
import LinkButton from './components/LinkButton';

export default function Home() {
  const mainRef = useRef(null);
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  // Scrolling logic for header visibility
  const { scrollYProgress: headerScroll } = useScroll({
    container: mainRef,
    target: heroRef,
    offset: ['50% start', '90% start'],
  });

  // Header opacity based on scroll position
  const headerOpacity = useTransform(headerScroll, [0, 1], [0, 1]);

  // Scrolling logic for about section
  const { scrollYProgress: aboutScroll } = useScroll({
    container: mainRef,
    target: aboutRef,
    offset: ['start end', 'end end'],
  });

  const { scrollYProgress: workScroll } = useScroll({
    container: mainRef,
    target: workRef,
    offset: ['start end', 'end end'],
  });

  const [isModalOpen, setModalOpen] = useState<string | null>(null);
  const handleModalOpen = (item: string, event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setModalOpen(item);
  };

  const bannerItems = ['User Testing', 'Wireframes', 'Prototypes', 'Hi-Rez Comps', 'Web Animation', 'Greensock', 'Framer Motion', 'Design Systems', 'Software Development', 'Creative Development', 'Shopify Development', 'Wordpress Development', 'React JS', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'SCSS', 'SASS', 'Tailwind', 'Bootstrap', 'Material UI', 'Git', 'GitHub', 'GitLab', 'Storybook', 'Chromatic', 'Figma', 'Sketch', 'WCAG Accessibility']

  return (
    <div className={`fixed flex justify-center`}>
      <motion.header
        className={`top-[0] start-[20px] lg:top-[60px] lg:start-[80px] fixed z-10 mix-blend-difference ${styles.header}`}
        style={{ opacity: headerOpacity }}
      >
        <h1
          className={`text-[14vw] lg:text-[2vw] lg:leading-[0.8] tracking-[-0.2rem] flex flex-row text-[var(--foreground)]  ${robotoCondensed.className} `}
        >
          <span><span className={`text-[var(--primary-blue-200)]`}>J</span>ASON</span>
          <span><span className={`text-[var(--primary-blue-200)]`}>FLO</span>RENCE</span>
        </h1>
      </motion.header>
      {/* Start Main Section */}
      <motion.main className={`${styles.content} ${isModalOpen ? 'overflow-y-hidden' : 'overflow-y-scroll'} overflow-x-hidden bg-stone-900`}
        ref={mainRef}
      >
        {/* Start Hero Section */}
        <motion.section
          ref={heroRef}
          className={`flex flex-wrap justify-center content-center flex-col h-full w-full text-[var(--foreground)] px-6 lg:px-0`}
        >
          <motion.p
            className={`font-bold mb-2 text-[5vw] lg:text-[1.4vw] lg:ms-[0.4vw]`}
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.5,
              ease: 'easeInOut',
            }}
          >Hello! My name is Jason Florence (aka JFlo), and I specialize in</motion.p>
          <motion.h2
            className={`
              ${robotoCondensed.className} 
              text-[var(--foreground)] text-[14vw] lg:text-[11vw] tracking-[-0.3rem] leading-[0.9]
              
            `}
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 1,
              ease: 'easeInOut',
            }}
          >

            UX <span className={`text-[var(--complementary-orange-200)]`}>DESIGN</span> <span className={`${styles.hero_orange}`}>&</span>
          </motion.h2>
          <motion.h2
            className={`
              ${robotoCondensed.className}
              text-[var(--foreground)] text-[14vw] lg:text-[11vw] tracking-[-0.3rem] leading-[0.9] break-all
              
            `}
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 1.5,
              ease: 'easeInOut',
            }}
          >
            UX <span className={`text-[var(--primary-blue-200)]`}>DEVELOPMENT</span>
          </motion.h2>
          <motion.div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 100, opacity: 1 }}
            transition={{
              delay: 2.5,
              duration: 1,
              ease: 'easeInOut',
            }}
          >
            <Lottie animationData={MouseScrollAnimation} loop={true} autoPlay={true} />
          </motion.div>

        </motion.section>
        {/* Start About Section */}
        <AboutSection aboutScroll={aboutScroll} aboutRef={aboutRef} />

        {/* Start Work Section */}
        <motion.section id='work' className={`${styles.work} flex flex-col w-full min-h-full`} ref={workRef}>

          {/* Start Featured Projects */}
          <FeaturedProjects workScroll={workScroll} handleModalOpen={handleModalOpen} />

          {/* Start Archive Section */}
          {/* TEMP for hiding on mobile */}
          <div className="hidden lg:block">
            <ProjectArchives workScroll={workScroll} handleModalOpen={handleModalOpen} />
          </div>
        </motion.section>

        {/* Start Contact Section */}
        <motion.section id='contact' className={`${styles.contact} flex justify-center flex-col w-full h-full px-4 lg:px-12 relative`} ref={contactRef}>
          {/* TEMP for hiding on mobile */}
          <div className="hidden lg:block">
            <ScrollingBanner items={bannerItems} />
          </div>
          <h2 className={`${robotoCondensed.className} text-center uppercase text-[10vw] lg:text-[4vw] tracking-[-0.2rem] leading-[2rem] lg:leading-[4rem] text-stone-900`}>Get In Touch</h2>
          <p className='text-stone-900 text-[4vw] lg:text-[1.3vw] text-center'>Got a project in mind? Let&apos;s connect!</p>

          <div className="max-w-2xl mx-auto w-full flex justify-center">
            <LinkButton
              href="https://www.linkedin.com/in/jflo-ux-dev/"
              target="_blank"
              label="Reach out on LinkedIn"
              icon={
                // LinkedIn SVG icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 inline-block"
                >
                  <g transform="scale(1.5)">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                  </g>
                </svg>
              }
            />
          </div>
        </motion.section>

      </motion.main>
      <SvgBackground />
      {/* Start Modals */}
      <AnimatePresence>
        {isModalOpen && (
          <Modal isVisible={!!isModalOpen} onClose={() => setModalOpen(null)}>
            {isModalOpen === 'Indeed' && <Indeed />}
            {isModalOpen === 'HitachiStudio' && <HitachiStudio />}
            {isModalOpen === 'HitachiSolutionsManager' && <HitachiSolutionsManager />}
            {isModalOpen === 'Product Of The North' && <ProductOfTheNorth />}
            {isModalOpen === 'The Skull Shoppe' && <TheSkullShoppe />}
            {isModalOpen === 'Imprnt' && <Imprnt />}
            {isModalOpen === 'Morgan Colton' && <MorganColton />}
            {isModalOpen === 'Mixpo' && <Mixpo />}
            {isModalOpen === 'Rich Family Ortho' && <RichFamilyOrtho />}
            {isModalOpen === 'Ritucci Friedman Ortho' && <RitucciFriedmanOrtho />}
            {isModalOpen === 'Hillman Dentistry' && <HillmanDentistry />}
            {isModalOpen === 'Vibe Prototype' && <VibePrototype />}
            {/* Add more project components as needed */}
          </Modal>
        )}
      </AnimatePresence>
    </div >
  );
}
