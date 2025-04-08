'use client'
import { robotoCondensed } from '@/app/fonts'
import Image from 'next/image';

export default function RitucciFriedmanOrtho() {

    return (
        <div className={`w-full flex flex-col items-center`}>
            <div className={`flex flex-col px-20 text-lg container`}>
                <header className={`flex flex-col w-full mt-16 mb-16`}>
                    <h2 className={`${robotoCondensed.className} text-6xl font-bold mb-2 uppercase`}>Ritucci Friedman Ortho</h2>
                    <p>
                        <span className="me-4"><b>Role</b>: Website Designer & Developer</span><b>Toolkit</b>: Adobe Photoshop, HTML, CSS, JavaScript, Flash
                    </p>
                    <p>Worked with client to determine general guidelines for design based on existing logo & branding. Provided a handful of design comps for review and revisions. Built image slideshows using Flash. Final design was developed using a proprietary content management system owned by Sesame Communications.</p>
                </header>
                <section className={`flex flex-col items-start w-full mb-16`}>
                    <h3 className={`${robotoCondensed.className} text-4xl font-bold mb-2 uppercase`}>Homepage</h3>
                    <Image
                        className='mb-8 rounded-lg w-full object-contain aspect-auto'
                        src='/images/ritucci-friedman-ortho/ritucci-friedman-home@2x.webp'
                        alt='Ritucci-Friedman Ortho website homepage'
                        sizes="(max-width: 768px) 100vw, 50vw"
                        width={1200}
                        height={800}
                    />
                    <h3 className={`${robotoCondensed.className} text-4xl font-bold mb-2 uppercase`}>Sub Nav</h3>
                    <Image
                        className='mb-8 rounded-lg w-full object-contain aspect-auto'
                        src='/images/ritucci-friedman-ortho/ritucci-friedman-sub-nav@2x.webp'
                        alt='Ritucci-Friedman Ortho website homepage sub nav'
                        sizes="(max-width: 768px) 100vw, 50vw"
                        width={1200}
                        height={800}
                    />
                    <h3 className={`${robotoCondensed.className} text-4xl font-bold mb-2 uppercase`}>Sub Page with text styles</h3>
                    <Image
                        className='mb-8 rounded-lg w-full object-contain aspect-auto'
                        src='/images/ritucci-friedman-ortho/ritucci-friedman-sub-page@2x.webp'
                        alt='Ritucci-Friedman Ortho website sub page'
                        sizes="(max-width: 768px) 100vw, 50vw"
                        width={1200}
                        height={800}
                    />
                </section>
            </div>
        </div>
    )
}