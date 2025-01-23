'use client'
// @refresh reset
import { AnimatePresence, motion, useInView, useScroll } from 'motion/react';
import dynamic from 'next/dynamic'
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
import MouseScrollAnimation from './assets/MouseScrollAnimation.json';
import { robotoCondensed } from './fonts'
import SvgBackground from './components/svg-background/svgBg'
import styles from './page.module.scss'
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const mainRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: mainRef,
    target: aboutRef,
    offset: ['start end', 'end end']
  });
  const isAboutInView = useInView(aboutRef);
  const isWorkInView = useInView(workRef);
  const isContactInView = useInView(contactRef);

  const [isIndeedVisible, setIsIndeedVisible] = useState(false);
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  useEffect(() => {
    // console.log('isAboutInView ', isAboutInView); 
    // console.log('isWorkInView ', isWorkInView);
    // console.log('isContactInView ', isContactInView);
  }, [isAboutInView, isWorkInView, isContactInView]);

  return (
    <div className={`relative justify-center ${styles.container} `}>
      <header className={`fixed z-10 ${styles.header} `}>
        <motion.h1
          className={`${styles.name} ${robotoCondensed.className} `}
          initial={{ x: '-120%' }}
          animate={{ x: 0 }}
          transition={{
            delay: 1,
          }}
        >
          <span className={`${styles.name_first}`}><span>J</span>ASON</span> <span className={`${styles.name_last}`}><span>F</span><span>L</span><span>O</span>RENCE</span>
        </motion.h1>
      </header>
      <motion.main className={`${styles.content} overflow-auto snap-y snap-mandatory scroll-smooth`}
        initial={{ scaleX: 0, scaleY: 0 }}
        animate={{ scaleX: 1, scaleY: 1 }}
        transition={{
          delay: 0.5,
          duration: 0.3,
        }}
        ref={mainRef}
      >
        <motion.section className='flex flex-wrap justify-center content-center flex-col h-full snap-center'>
          <motion.h2
            className={`
              ${robotoCondensed.className} 
              ${styles.hero} 
              
            `}
            initial={{ x: '-120%' }}
            animate={{ x: 0 }}
            transition={{
              delay: 1.5,
            }}
          >

            UX<span className={`${styles.hero_UX}`}>DESIGN /</span>
          </motion.h2>
          <motion.h2
            className={`
              ${robotoCondensed.className}
              ${styles.hero}
              ${styles.hero_DE}
            `}
            initial={{ x: '-130%' }}
            animate={{ x: 0 }}
            transition={{
              delay: 2,
            }}
          >
            DEVELOPMENT
          </motion.h2>
          <motion.div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 100, opacity: 1 }}
            transition={{
              delay: 4,
              duration: 1,
              ease: 'easeInOut',
            }}
          >
            <Lottie animationData={MouseScrollAnimation} loop={true} autoPlay={true} />
          </motion.div>

        </motion.section>
        <motion.section id='about' className={`${styles.about} flex justify-center flex-col w-full h-full px-12 mb-1 snap-center background`} style={{ opacity: scrollYProgress }} ref={aboutRef}>
          <h2 className="font-semibold mb-5">
            I specialize in <span className="text-primary-blue">UX Design</span> and <span className="text-primary-blue">UI Development</span> for the web.
          </h2>
          <p className="mb-4">
            I design with many different tools... favorites include Figma, Sketch and Adobe CS.
            I build websites using content management systems like Wordpress and Webflow,
            E-commerce sites using Shopify and Square Space, and enterprise applications
            using tools like ReactJS, Storybook, Chromatic and GitLab CI/CD.
          </p>
          <p className="mb-4">
            I utilize AI in my design and development workflows in order to increase my
            productivity. That means quicker turnaround times for everyone!
          </p>
          <p className="mb-4">
            With multiple years of experience in the tech industry, I can provide a wide range
            of services to bridge the gap between design and development. Some have called
            me a "unicorn" because the combination of these skills is somewhat unique and
            highly sought after. Even though this may be true, please don't call me that.
          </p>
          <p className="font-bold">
            I'm currently available to hire!
          </p>

        </motion.section>
        <motion.section id='work' className={`${styles.work} flex justify-center flex-col w-full h-full mb-1 snap-center`} ref={workRef}>
          <ul className={`${styles.work_list} overflow-x-auto`}>
            <li>
              {/* <Link href='/work/indeed'> */}

              <img src='https://picsum.photos/2400/1500' />
              <button onClick={() => setIsIndeedVisible(true)}>Open</button>
              <AnimatePresence>
                {isIndeedVisible && (
                  <motion.div
                    key='modal'
                    initial='hidden'
                    animate='visible'
                    exit='hidden'
                    variants={variants}
                    className={`absolute top-0 left-0 w-full h-full bg-black bg-opacity-90 flex items-center justify-center`}
                  >
                    This is a modal or something
                    <button onClick={() => setIsIndeedVisible(false)}>Close</button>
                  </motion.div>
                )}
              </AnimatePresence>
              {/* </Link> */}
            </li>
            <li>
              <Link href='/work/hitachi-studio'>
                <img src='https://picsum.photos/2400/1500' />
              </Link>
            </li>
            <li>
              <Link href='/work/hitachi-vantara'>
                <img src='https://picsum.photos/2400/1500' />
              </Link>
            </li>
          </ul>
        </motion.section>
        <motion.section id='contact' className={`${styles.contact} flex justify-center flex-col w-full h-full px-12 mb-1 snap-center`} ref={contactRef}>
          <h2 className="font-semibold mb-5">Contact Stuff Here</h2>
        </motion.section>
      </motion.main>
      <motion.footer
        className={`${styles.footer} fixed flex flex-col items-end text-align-end z-10`}
        initial={{ x: '120%' }}
        animate={{ x: 0 }}
        transition={{
          delay: 3,
        }}
      >
        <a href="#about" className={`${robotoCondensed.className} ${isAboutInView ? styles.active : ''}`}>ABOUT</a>
        <a href="#work" className={`${robotoCondensed.className} ${isWorkInView ? styles.active : ''}`}>WORK</a>
        <a href="#contact" className={`${robotoCondensed.className} ${isContactInView ? styles.active : ''}`}>CONTACT</a>
      </motion.footer>
      <SvgBackground />
    </div>
  );
}