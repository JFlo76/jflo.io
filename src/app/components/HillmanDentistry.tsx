'use client'
import { robotoCondensed } from '@/app/fonts'
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
                    <h3 className={`${robotoCondensed.className} text-4xl font-bold mb-2 uppercase`}>Homepage</h3>
                    <img
                        className='mb-8 rounded-lg w-full object-contain aspect-auto'
                        srcSet='/images/hillman-dentistry/hillman-homepage.webp, /images/hillman-dentistry/hillman-homepage@2x.webp 2x'
                        src='/images/hillman-dentistry/hillman-homepage.webp'
                        alt='Hillman Dentistry website homepage'
                        loading="lazy"
                    />
                    <h3 className={`${robotoCondensed.className} text-4xl font-bold mb-2 uppercase`}>Meet Dr. Page</h3>
                    <img
                        className='mb-8 rounded-lg w-full object-contain aspect-auto'
                        srcSet='/images/hillman-dentistry/hillman-about.webp, /images/hillman-dentistry/hillman-about@2x.webp 2x'
                        src='/images/hillman-dentistry/hillman-about.webp'
                        alt='Hillman Dentistry website about page'
                        loading="lazy"
                    />
                </section>
            </div>
        </div>
    )
}