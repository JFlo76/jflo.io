'use client'
import { robotoCondensed } from '@/app/fonts'
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
                    <img
                        className='mb-8 rounded-lg w-full object-contain aspect-auto'
                        srcSet='/images/ritucci-friedman-ortho/ritucci-friedman-home.webp, /images/ritucci-friedman-ortho/ritucci-friedman-home@2x.webp 2x'
                        src='/images/ritucci-friedman-ortho/ritucci-friedman-home.webp'
                        alt='Ritucci-Friedman Ortho website homepage'
                        loading="lazy"
                    />
                    <h3 className={`${robotoCondensed.className} text-4xl font-bold mb-2 uppercase`}>Sub Nav</h3>
                    <img
                        className='mb-8 rounded-lg w-full object-contain aspect-auto'
                        srcSet='/images/ritucci-friedman-ortho/ritucci-friedman-sub-nav.webp, /images/ritucci-friedman-ortho/ritucci-friedman-sub-nav@2x.webp 2x'
                        src='/images/ritucci-friedman-ortho/ritucci-friedman-sub-nav.webp'
                        alt='Ritucci-Friedman Ortho website homepage sub nav'
                        loading="lazy"
                    />
                    <h3 className={`${robotoCondensed.className} text-4xl font-bold mb-2 uppercase`}>Sub Page with text styles</h3>
                    <img
                        className='mb-8 rounded-lg w-full object-contain aspect-auto'
                        srcSet='/images/ritucci-friedman-ortho/ritucci-friedman-sub-page.webp, /images/ritucci-friedman-ortho/ritucci-friedman-sub-page@2x.webp 2x'
                        src='/images/ritucci-friedman-ortho/ritucci-friedman-sub-page.webp'
                        alt='Ritucci-Friedman Ortho website sub page'
                        loading="lazy"
                    />
                </section>
            </div>
        </div>
    )
}