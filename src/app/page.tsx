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
import Indeed from './components/Indeed/Indeed'
import HitachiStudio from './components/HitachiStudio'
import Modal from './components/modal';
import ScrollingBanner from './components/ScrollingBanner';
import HitachiSolutionsManager from './components/HitachiSolutionsManager';

export default function Home() {
  const mainRef = useRef(null);
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  // Scrolling logic for hero section
  const { scrollYProgress: heroScroll } = useScroll({
    container: mainRef,
    target: heroRef,
    offset: ['end end', 'end start'],
  });
  const scale = useTransform(heroScroll, [0, 0.75], [1, 0]);
  const opacity = useTransform(heroScroll, [0, 0.5], [1, 0]);
  const z = useTransform(heroScroll, [0, 0.75], [0, -1000]);
  const rotateX = useTransform(heroScroll, [0, 0.75], [0, 40]);

  // Scrolling logic for header visibility
  const { scrollYProgress: headerScroll } = useScroll({
    container: mainRef,
    offset: ['5% start', '15% start'],
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
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.5,
          duration: 0.3,
        }}
        ref={mainRef}
      >
        {/* Start Hero Section */}
        <motion.section
          ref={heroRef}
          className={`flex flex-wrap justify-center content-center flex-col h-full ${styles.hero}`}
          style={
            {
              scale,
              opacity,
              translateZ: z,
              rotateX: rotateX,
              transformOrigin: "center bottom",
              transformStyle: "preserve-3d",
            }
          }
        >
          <motion.p
            className={`font-bold mb-2 ${styles.hero_greeting}`}
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 1.5,
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
              delay: 2,
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
              delay: 2.5,
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
              delay: 3.5,
              duration: 1,
              ease: 'easeInOut',
            }}
          >
            <Lottie animationData={MouseScrollAnimation} loop={true} autoPlay={true} />
          </motion.div>

        </motion.section>
        {/* Start About Section */}
        <motion.section
          className={`${styles.about} flex flex-col w-full items-center p-20 al relative`} ref={aboutRef}
          style={{
            y: useTransform(aboutScroll, [0, 1], [100, 0]),
            skewY: useTransform(aboutScroll, [0, 1], [-15, -5]),
            opacity: useTransform(aboutScroll, [0, 0.5], [0, 1]),
          }}
        >
          <div className={`${styles.about_content} flex flex-row items-center`}>
            <motion.article
              style={{
                y: useTransform(aboutScroll, [0.25, 0.75], [500, 0]),
                opacity: useTransform(aboutScroll, [0.5, 1], [0, 1]),
              }}
            >
              <motion.h2
                className={`${robotoCondensed.className} uppercase`}
                style={{
                  x: useTransform(aboutScroll, [0.6, 0.75], [-500, 0])
                }}
              >
                A little about me...
              </motion.h2>

              <p className={`${styles.about_text}`}

              >
                With over a decade of experience in the tech industry, I offer a comprehensive skill set that bridges the gap between design and development. My expertise allows me to seamlessly translate design concepts into functional and user-friendly interfaces.
              </p>
              <p className={`${styles.about_text}`}

              >
                With multiple years of experience in the tech industry, I can provide a wide range
                of services to bridge the gap between design and development. Some have called
                me a "unicorn" because the combination of these skills is somewhat unique and
                highly sought after. Even though this may be true, please don't call me that.
              </p>
              <p className={`${styles.about_text}`}

              >
                In my spare time, I enjoy exploring new places, playing music (drums), snowboarding, a bit of rallycross racing, spending time with my family and friends, and wearing hats!
              </p>
              <a href='#work' className={`${styles.linkTo_work} ${robotoCondensed.className} uppercase`}>See my work</a>

            </motion.article>
            <Unicorn scrollRef={aboutScroll} />
          </div>

          <ScrollingBanner items={bannerItems} />

        </motion.section>
        {/* Start Work Section */}
        <motion.section id='work' className={`${styles.work} flex justify-center flex-col w-full h-full px-4`} ref={workRef}>
          <motion.h2
            className={`${robotoCondensed.className} text-center uppercase`}
            style={{
              y: useTransform(workScroll, [0.25, 0.75], [40, 0]),
              opacity: useTransform(workScroll, [0.4, 0.75], [0, 1]),
            }}
          >Recent projects</motion.h2>
          <motion.div
            className={`${styles.projectsRow} flex flex-row justify-center`}
            style={{
              y: useTransform(workScroll, [0.5, 0.75], [40, 0]),
              opacity: useTransform(workScroll, [0.5, 0.75], [0, 1]),
            }}
          >
            {/* Row 1 */}
            <div className={`${styles.projectsRowLeft} flex flex-col items-center`}>
              <a href="" onClick={(event) => handleModalOpen('HitachiStudio', event)}
                className={`block rounded-lg overflow-hidden relative group border border-gray-400 mb-4`}>
                <img
                  srcSet="/images/hitachi/lumada-studio-thumb.webp, /images/hitachi/lumada-studio-thumb@2x.webp 2x"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px" alt="Hitachi Lumada Studio dashboard"
                  className="transition-transform duration-300 group-hover:scale-105 group-hover:grayscale aspect-video object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className={`${styles.caseStudy} ${robotoCondensed.className} text-white text-4xl uppercase text-[--primary-blue-200] [text-shadow:_0_1px_3px_rgba(0,0,0,0.8)]`}>View case study</h3>
                </div>
              </a>
              <p className={`${robotoCondensed.className} text-white text-2xl uppercase`}>Hitachi - UI/UX Designer</p>
            </div>

            <div className={`${styles.projectsRowCenter} flex flex-col items-center z-10`}>
              <a href="" onClick={(event) => handleModalOpen('Indeed', event)}
                className={` border border-gray-400 rounded-lg overflow-hidden block relative group mb-4`}>
                <img
                  srcSet="/images/indeed/interview-scheduling-modal-thumb.webp, /images/indeed/interview-scheduling-modal-thumb@2x.webp 2x"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                  alt="Indeed.com interface with the interview scheduling modal open"
                  className="transition-transform duration-300 group-hover:scale-105 group-hover:grayscale aspect-video object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className={`${styles.caseStudy} ${robotoCondensed.className} text-white text-4xl uppercase text-[--primary-blue-200]`}>View case study</h3>
                </div>
              </a>
              <p className={`${robotoCondensed.className} text-white text-2xl uppercase`}>Indeed - UX Developer</p>
            </div>

            <div className={`${styles.projectsRowRight} flex flex-col items-center`}>
              <a href="" onClick={(event) => handleModalOpen('HitachiSolutionsManager', event)}
                className={`block rounded-lg overflow-hidden relative group border border-gray-400 mb-4`}>
                <img
                  srcSet="/images/hitachi/lumada-solutions-manager-thumb.webp, /images/hitachi/lumada-solutions-manager-thumb@2x.webp 2x"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px" alt="Hitachi Solutions Manager dashboard"
                  className="transition-transform duration-300 group-hover:scale-105 group-hover:grayscale aspect-video object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className={`${styles.caseStudy} ${robotoCondensed.className} text-white text-4xl uppercase text-[--primary-blue-200] [text-shadow:_0_1px_3px_rgba(0,0,0,0.8)]`}>View case study</h3>
                </div>
              </a>
              <p className={`${robotoCondensed.className} text-white text-2xl uppercase`}>Hitachi - UI/UX Designer</p>
            </div>
          </motion.div>

          {/* <motion.h2
            className={`${robotoCondensed.className} text-center uppercase`}
            style={{
              y: useTransform(workScroll, [0.25, 0.75], [40, 0]),
              opacity: useTransform(workScroll, [0.4, 0.75], [0, 1]),
            }}
          >Past projects</motion.h2>
          <motion.div
            className="grid grid-cols-3 gap-4"
            style={{
              y: useTransform(workScroll, [0.5, 0.75], [40, 0]),
              opacity: useTransform(workScroll, [0.5, 0.75], [0, 1]),
            }}
          >
            <div className={`rounded-lg overflow-hidden relative group border border-gray-400`}>
              <a href="" onClick={(event) => handleModalOpen('Product of the North', event)}>
                <img
                  srcSet="/images/potn/potn-thumb.webp, /images/potn/potn-thumb@2x.webp 2x"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px" alt="Indeed.com interface with the interview scheduling modal open"
                  className="transition-transform duration-300 group-hover:scale-105 group-hover:grayscale aspect-video object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className={`${robotoCondensed.className} text-white text-4xl uppercase`}>Product of the North</h3>
                  <p className={`${robotoCondensed.className} text-white text-lg`}>Shopify Developer</p>
                </div>
              </a>
            </div><div className={`rounded-lg overflow-hidden relative group border border-gray-400`}>
              <a href="" onClick={(event) => handleModalOpen('Skull Shoppe', event)}>
                <img
                  srcSet="/images/skullshoppe/skullshoppe-thumb.webp, /images/skullshoppe/skullshoppe-thumb@2x.webp 2x"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px" alt="SkullShoppe.com logo with a skull and ornate frame"
                  className="transition-transform duration-300 group-hover:scale-105 group-hover:grayscale aspect-video object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className={`${robotoCondensed.className} text-white text-4xl uppercase`}>The Skull Shoppe</h3>
                  <p className={`${robotoCondensed.className} text-white text-lg`}>Shopify Developer</p>
                </div>
              </a>
            </div><div className={`rounded-lg overflow-hidden relative group border border-gray-400`}>
              <a href="" onClick={(event) => handleModalOpen('Imprnt', event)}>
                <img
                  srcSet="/images/imprnt/imprnt-home-thumb.webp, /images/imprnt/imprnt-home-thumb@2x.webp 2x"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px" alt="Imprnt.com homepage with images of printed shirts"
                  className="transition-transform duration-300 group-hover:scale-105 group-hover:grayscale aspect-video object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className={`${robotoCondensed.className} text-white text-4xl uppercase`}>Imprnt</h3>
                  <p className={`${robotoCondensed.className} text-white text-lg`}>UI Designer</p>
                </div>
              </a>
            </div>
          </motion.div> */}
        </motion.section>
        {/* Start Contact Section */}
        <motion.section id='contact' className={`${styles.contact} flex justify-center flex-col w-full h-full px-12 mb-1 `} ref={contactRef}>
          <h2 className="font-semibold mb-5">Contact Stuff Here</h2>
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
            {/* Add more project components as needed */}
          </Modal>
        )}
      </AnimatePresence>
    </div >
  );
}
