'use client'
import { robotoCondensed } from '@/app/fonts'
import Image from 'next/image';

export default function RichFamilyOrtho() {

    return (
        <div className={`w-full flex flex-col items-center`}>
            <div className={`flex flex-col px-20 text-lg container`}>
                <header className={`flex flex-col w-full mt-16 mb-16`}>
                    <h2 className={`${robotoCondensed.className} text-6xl font-bold mb-2 uppercase`}>Rich Family Ortho</h2>
                    <p>
                        <span className="me-4"><b>Role</b>: Website Designer & Developer</span><b>Toolkit</b>: Adobe Photoshop, HTML, CSS, JavaScript, Flash
                    </p>
                    <p>Worked with client to determine general guidelines for design based on existing logo & branding. Provided a handful of design comps for review and revisions. Built image slideshows using Flash. Final design was developed using a proprietary content management system owned by Sesame Communications.</p>
                </header>
                <section className={`flex flex-col items-start w-full mb-16`}>
                    <h3 className={`${robotoCondensed.className} text-4xl font-bold mb-2 uppercase`}>Homepage</h3>
                    <Image
                        className='mb-8 rounded-lg w-full object-contain aspect-auto'
                        src='/images/rich-family-ortho/rich-family-homepage@2x.webp'
                        alt='Rich Family Ortho website homepage'
                        width={1920}
                        height={1080}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <h3 className={`${robotoCondensed.className} text-4xl font-bold mb-2 uppercase`}>Contact page</h3>
                    <Image
                        className='rounded-lg w-full object-contain aspect-auto'
                        src='/images/rich-family-ortho/rich-family-contact@2x.webp'
                        alt='Rich Family Ortho website contact page'
                        width={1920}
                        height={1080}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </section>
            </div>
        </div>
    )
}