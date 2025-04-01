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

import Unicorn from './components/Unicorn';
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
import FeaturedProjects2 from './components/FeaturedProjects2';

export default function Home() {
  const mainRef = useRef(null);
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  // Scrolling logic for header visibility
  const { scrollYProgress: headerScroll } = useScroll({
    container: mainRef,
    offset: ['10% start', '30% end'],
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

  const [isModalOpen, setModalOpen] = useState<string | null>(null);
  const handleModalOpen = (item: string, event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setModalOpen(item);
  };

  const bannerItems = ['User Testing', 'Wireframes', 'Prototypes', 'Hi-Rez Comps', 'Web Animation', 'Greensock', 'Framer Motion', 'Design Systems', 'Software Development', 'Creative Development', 'Shopify Development', 'Wordpress Development', 'React JS', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'SCSS', 'SASS', 'Tailwind', 'Bootstrap', 'Material UI', 'Git', 'GitHub', 'GitLab', 'Storybook', 'Chromatic', 'Figma', 'Sketch', 'WCAG Accessibility']

  return (
    <div className={`fixed flex justify-center`}>
      <motion.header
        className={`fixed z-10 ${styles.header}`}
        style={{ opacity: headerOpacity }}
      >
        <h1
          className={`${styles.name} ${robotoCondensed.className} `}
        >
          <span className={`${styles.name_first}`}><span>J</span>ASON</span>
          <span className={`${styles.name_last}`}><span>FLO</span>RENCE</span>
        </h1>
      </motion.header>
      {/* Start Main Section */}
      <motion.main className={`${styles.content} ${isModalOpen ? 'overflow-y-hidden' : 'overflow-y-scroll'} overflow-x-hidden bg-stone-900`}
        ref={mainRef}
      >
        {/* Start Hero Section */}
        <motion.section
          ref={heroRef}
          className={`flex flex-wrap justify-center content-center flex-col h-full w-full ${styles.hero}`}
        >
          <motion.p
            className={`font-bold mb-2 ${styles.hero_greeting}`}
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
              ${styles.hero_skills} 
              
            `}
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 1,
              ease: 'easeInOut',
            }}
          >

            UX <span className={`${styles.hero_design}`}>DESIGN</span> <span className={`${styles.hero_orange}`}>&</span>
          </motion.h2>
          <motion.h2
            className={`
              ${robotoCondensed.className}
              ${styles.hero_skills}
              
            `}
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 1.5,
              ease: 'easeInOut',
            }}
          >
            UX <span className={`${styles.hero_development}`}>DEVELOPMENT</span>
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
          <FeaturedProjects2 workScroll={workScroll} handleModalOpen={handleModalOpen} />

          {/* Start Archive Section */}
          <ProjectArchives workScroll={workScroll} handleModalOpen={handleModalOpen} />
        </motion.section>

        {/* Start Contact Section */}
        <motion.section id='contact' className={`${styles.contact} flex justify-center flex-col w-full h-full px-12 relative`} ref={contactRef}>
          <ScrollingBanner items={bannerItems} />
          <h2 className={`${robotoCondensed.className} text-center uppercase text-[4vw] tracking-[-0.2rem] leading-[4rem] text-stone-900`}>Get In Touch</h2>
          <p className='text-stone-900 text-[1.3vw] text-center'>Got a project in mind? Let's connect!</p>

          <div className="max-w-2xl mx-auto w-full">
            <form
              className="flex flex-col gap-4"
              action="https://formsubmit.co/909a540dac9f9c0b75b3cd265f33ea1f"
              method="POST"
            >
              {/* Honeypot to prevent spam */}
              <input type="text" name="_honey" style={{ display: 'none' }} />

              {/* Disable captcha */}
              <input type="hidden" name="_captcha" value="false" />

              {/* Success page - you can customize this later */}
              <input type="hidden" name="_next" value="https://jflo-portfolio-2025-s9pm5.ondigitalocean.app/" />

              <div className="flex flex-col">
                <label htmlFor="Name" className={`${robotoCondensed.className} uppercase mb-1 text-gray-800`}>
                  Name <span>*</span>
                </label>
                <input
                  type="text"
                  id="Name"
                  name="Name"
                  required
                  className="p-3 rounded-md bg-stone-900 focus:outline-none focus:ring-2 focus:ring-[--complementary-orange-100]"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="Email" className={`${robotoCondensed.className} uppercase mb-1 text-gray-800`}>
                  Email <span>*</span>
                </label>
                <input
                  type="email"
                  id="Email"
                  name="Email"
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  title="Please enter a valid email address"
                  className="p-3 rounded-md bg-stone-900 focus:outline-none focus:ring-2 focus:ring-[--complementary-orange-100]"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="Message" className={`${robotoCondensed.className} uppercase mb-1 text-gray-800`}>
                  Message <span>*</span>
                </label>
                <textarea
                  id="Message"
                  name="Message"
                  rows={5}
                  required
                  className="p-3 rounded-md bg-stone-900 focus:outline-none focus:ring-2 focus:ring-[--complementary-orange-100]"
                ></textarea>
              </div>

              <button
                type="submit"
                className={`${robotoCondensed.className} ${styles.linkTo_work} uppercase self-start`}
              >
                Send Message
              </button>
            </form>
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
            {/* Add more project components as needed */}
          </Modal>
        )}
      </AnimatePresence>
    </div >
  );
}
