'use client'
import { robotoCondensed } from '@/app/fonts'
export default function MorganColton() {

    return (
        <div className={`w-full flex flex-col items-center`}>
            <div className={`flex flex-col px-20 text-lg container`}>
                <header className={`flex flex-col w-full mt-16 mb-16`}>
                    <h2 className={`${robotoCondensed.className} text-6xl font-bold mb-2 uppercase`}>Morgan Colton</h2>
                    <p>
                        <span className="me-4"><b>Role</b>: Web Developer</span><b>Toolkit</b>: HTML, CSS, JavaScript
                    </p>
                    <p>A single page portfolio website developed for a UI/UX designer colleague. I collaborated with him to take his design concepts to code, incorporating some interactive elements such as window & paralax scrolling, a modal for project details, image carousels, contact form, and micro animations for bar graphs to convey his level of experience with certain tools and technologies.</p>
                </header>
                <section className={`flex flex-col items-start w-full mb-16`}>
                    <h3 className={`${robotoCondensed.className} text-4xl font-bold mb-2 uppercase`}>Homepage</h3>
                    <img
                        className='mb-8 rounded-lg w-full object-contain aspect-auto'
                        src='/images/morgan/morgan-animated.gif'
                        alt='Morgan Colton website homepage animated gif'
                        loading="lazy"
                    />
                    <h3 className={`${robotoCondensed.className} text-4xl font-bold mb-2 uppercase`}>projects section</h3>
                    <img
                        className='mb-8 rounded-lg w-full object-contain aspect-auto'
                        srcSet='/images/morgan/morgan-work.webp, /images/morgan/morgan-work@2x.webp 2x'
                        src='/images/morgan/morgan-work.webp'
                        alt='Morgan Colton website projects'
                        loading="lazy"
                    />
                    <h3 className={`${robotoCondensed.className} text-4xl font-bold mb-2 uppercase`}>Project details modal</h3>
                    <img
                        className='mb-8 rounded-lg w-full object-contain aspect-auto'
                        srcSet='/images/morgan/morgan-work-details.webp, /images/morgan/morgan-work-details@2x.webp 2x'
                        src='/images/morgan/morgan-work-details.webp'
                        alt='Morgan Colton website projects details'
                        loading="lazy"
                    />
                    <h3 className={`${robotoCondensed.className} text-4xl font-bold mb-2 uppercase`}>Full homepage UI</h3>
                    <img
                        className='mb-8 rounded-lg w-full object-contain aspect-auto'
                        srcSet='/images/morgan/morgan-fullpage.webp, /images/morgan/morgan-fullpage@2x.webp 2x'
                        src='/images/morgan/morgan-fullpage.webp'
                        alt='Morgan Colton website full homepage'
                        loading="lazy"
                    />
                </section>
            </div>
        </div>
    )
}