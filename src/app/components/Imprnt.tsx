'use client'
import { robotoCondensed } from '@/app/fonts'
export default function Imprnt() {

    return (
        <div className={`w-full flex flex-col items-center`}>
            <div className={`flex flex-col px-20 text-lg container`}>
                <header className={`flex flex-col w-full mt-16 mb-16`}>
                    <h2 className={`${robotoCondensed.className} text-6xl font-bold mb-2 uppercase`}>Imprnt</h2>
                    <p>
                        <span className="me-4"><b>Role</b>: UI Designer</span><b>Toolkit</b>: Pen & Paper, Adobe Illustrator, Adobe Photoshop
                    </p>
                    <p>Mobile-first redesign of the home page for a screen printing company with the goal to increase conversions and improve SEO. Previous site was a simple photo showcase with the navigation partially hidden (see animated gif).</p>
                </header>
                <section className={`flex flex-col items-start w-full mb-16`}>
                    <h3 className={`${robotoCondensed.className} text-4xl font-bold mb-2 uppercase`}>Mobile homepage UI</h3>
                    <img
                        className='mb-8 rounded-lg w-full object-contain aspect-auto'
                        srcSet='/images/imprnt/imprnt-mobile.webp, /images/imprnt/imprnt-mobile@2x.webp 2x'
                        src='/images/imprnt/imprnt-mobile.webp'
                        alt='Imprnt website mobile homepage'
                        loading="lazy"
                    />
                    <h3 className={`${robotoCondensed.className} text-4xl font-bold mb-2 uppercase`}>Desktop Homepage UI</h3>
                    <img
                        className='mb-8 rounded-lg w-full object-contain aspect-auto'
                        srcSet='/images/imprnt/imprnt-home.webp, /images/imprnt/imprnt-home@2x.webp 2x'
                        src='/images/imprnt/imprnt-home.webp'
                        alt='Imprnt website homepage'
                        loading="lazy"
                    />
                    <h3 className={`${robotoCondensed.className} text-4xl font-bold mb-2 uppercase`}>HomePage sketch</h3>
                    <img
                        className='mb-8 rounded-lg w-full object-contain aspect-auto'
                        srcSet='/images/imprnt/imprnt-sketch-home.webp, /images/imprnt/imprnt-sketch-home@2x.webp 2x'
                        src='/images/imprnt/imprnt-sketch-home.webp'
                        alt='Imprnt homepage sketch'
                        loading="lazy"
                    />
                    <h3 className={`${robotoCondensed.className} text-4xl font-bold mb-2 uppercase`}>Original homepage layout</h3>
                    <img
                        className='mb-8 rounded-lg w-full object-contain aspect-auto'
                        src='/images/imprnt/imprnt-current-site.gif'
                        alt='Imprnt original website'
                        loading="lazy"
                    />
                </section>
            </div>
        </div>
    )
}