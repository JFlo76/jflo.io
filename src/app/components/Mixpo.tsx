'use client'
import Image from 'next/image';
import { robotoCondensed } from '@/app/fonts'

export default function Mixpo() {

    return (
        <div className={`w-full flex flex-col items-center`}>
            <div className={`flex flex-col px-20 text-lg container`}>
                <header className={`flex flex-col w-full mt-16 mb-16`}>
                    <h2 className={`${robotoCondensed.className} text-6xl font-bold mb-2 uppercase`}>Mixpo</h2>
                    <p>
                        <span className="me-4"><b>Role</b>: Front-End Developer</span><b>Toolkit</b>: AngularJS, HTML, SCSS, JavaScript
                    </p>
                    <p>While working full time at Mixpo, the software team was tasked with updating the dated desktop app from Flash to AngularJS. I collaborated with the UX designers, project managers and other developers to build the UI of the new web app as well as portions of the pattern library / design system for others to use.</p>
                </header>
                <section className={`flex flex-col items-start w-full mb-16`}>
                    <h3 className={`${robotoCondensed.className} text-4xl font-bold mb-2 uppercase`}>New Creative Modal</h3>
                    <Image
                        className='mb-8 rounded-lg w-full object-contain aspect-auto'
                        src='/images/mixpo/mixpo-creatives-animated.gif'
                        alt='Mixpo website creatives animated gif'
                        sizes="(max-width: 768px) 100vw, 50vw"
                        width={800}
                        height={600}
                    />
                    <h3 className={`${robotoCondensed.className} text-4xl font-bold mb-2 uppercase`}>Placements page</h3>
                    <Image
                        className='mb-8 rounded-lg w-full object-contain aspect-auto'
                        src='/images/mixpo/mixpo-placements-animated.gif'
                        alt='Mixpo website placements animated gif'
                        sizes="(max-width: 768px) 100vw, 50vw"
                        width={800}
                        height={600}
                    />
                    <h3 className={`${robotoCondensed.className} text-4xl font-bold mb-2 uppercase`}>Placements tooltip</h3>
                    <Image
                        className='mb-8 rounded-lg w-full object-contain aspect-auto'
                        src='/images/mixpo/mixpo-placements-modal@2x.webp'
                        alt='Mixpo website placements modal'
                        sizes="(max-width: 768px) 100vw, 50vw"
                        width={800}
                        height={600}
                    />
                    <h3 className={`${robotoCondensed.className} text-4xl font-bold mb-2 uppercase`}>Analytics modal</h3>
                    <Image
                        className='mb-8 rounded-lg w-full object-contain aspect-auto'
                        src='/images/mixpo/mixpo-analytics-modal@2x.webp'
                        alt='Mixpo website analytics modal'
                        sizes="(max-width: 768px) 100vw, 50vw"
                        width={800}
                        height={600}
                    />
                    <h3 className={`${robotoCondensed.className} text-4xl font-bold mb-2 uppercase`}>Analytics page</h3>
                    <Image
                        className='mb-8 rounded-lg w-full object-contain aspect-auto'
                        src='/images/mixpo/mixpo-analytics-page@2x.webp'
                        alt='Mixpo website analytics page'
                        sizes="(max-width: 768px) 100vw, 50vw"
                        width={800}
                        height={600}
                    />
                    <h3 className={`${robotoCondensed.className} text-4xl font-bold mb-2 uppercase`}>Publisher modal</h3>
                    <Image
                        className='mb-8 rounded-lg w-full object-contain aspect-auto'
                        src='/images/mixpo/mixpo-publisher-modal@2x.webp'
                        alt='Mixpo website publiisher modal'
                        sizes="(max-width: 768px) 100vw, 50vw"
                        width={800}
                        height={600}
                    />
                    <h3 className={`${robotoCondensed.className} text-4xl font-bold mb-2 uppercase`}>Styleguide icons</h3>
                    <Image
                        className='mb-8 rounded-lg w-full object-contain aspect-auto'
                        src='/images/mixpo/mixpo-styleguide-icons@2x.webp'
                        alt='Mixpo styleguide icons'
                        sizes="(max-width: 768px) 100vw, 50vw"
                        width={800}
                        height={600}
                    />
                    <h3 className={`${robotoCondensed.className} text-4xl font-bold mb-2 uppercase`}>Styleguide controls</h3>
                    <Image
                        className='mb-8 rounded-lg w-full object-contain aspect-auto'
                        src='/images/mixpo/mixpo-styleguide-controls@2x.webp'
                        alt='Mixpo styleguide controls'
                        sizes="(max-width: 768px) 100vw, 50vw"
                        width={800}
                        height={600}
                    />
                </section>
            </div>
        </div>
    )
}