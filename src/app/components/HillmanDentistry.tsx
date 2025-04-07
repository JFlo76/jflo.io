'use client'
import { robotoCondensed } from '@/app/fonts'
import Image from 'next/image'
export default function HillmanDentistry() {

    return (
        <div className={`w-full flex flex-col items-center`}>
            <div className={`flex flex-col px-20 text-lg container`}>
                <header className={`flex flex-col w-full mt-16 mb-16`}>
                    <h2 className={`${robotoCondensed.className} text-6xl font-bold mb-2 uppercase`}>Hillman Dentistry</h2>
                    <p>
                        <span className="me-4"><b>Role</b>: Website Designer & Developer</span><b>Toolkit</b>: Adobe Photoshop, HTML, CSS, JavaScript, Flash
                    </p>
                    <p>Worked with client to determine general guidelines for design based on existing logo & branding. Provided a handful of design comps for review and revisions. Built image slideshows using Flash. Final design was developed using a proprietary content management system owned by Sesame Communications.</p>
                </header>
                <section className={`flex flex-col items-start w-full mb-16`}>
                    <Image
                        className='mb-8 rounded-lg w-full object-contain aspect-auto'
                        src='/images/hillman-dentistry/hillman-homepage@2x.webp'
                        sizes="100vw"
                        alt='Hillman Dentistry website homepage'
                        width={1200}
                        height={800}
                        priority={false}
                    />
                    <Image
                        className='mb-8 rounded-lg w-full object-contain aspect-auto'
                        src='/images/hillman-dentistry/hillman-about@2x.webp'
                        sizes="100vw"
                        alt='Hillman Dentistry website about page'
                        width={1200}
                        height={800}
                        priority={false}
                    />
                </section>
            </div>
        </div>
    )
}