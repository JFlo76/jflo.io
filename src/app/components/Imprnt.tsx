'use client'
import Image from 'next/image';
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
                    <Image
                        className='mb-8 rounded-lg w-full object-contain aspect-auto'
                        src='/images/imprnt/imprnt-mobile@2x.webp'
                        alt='Imprnt website mobile homepage'
                        width={600}
                        height={800}
                        sizes="(max-width: 768px) 100vw, 600px"
                    />
                    <h3 className={`${robotoCondensed.className} text-4xl font-bold mb-2 uppercase`}>Desktop Homepage UI</h3>
                    <Image
                        className='mb-8 rounded-lg w-full object-contain aspect-auto'
                        src='/images/imprnt/imprnt-home@2x.webp'
                        alt='Imprnt website homepage'
                        width={1200}
                        height={800}
                        sizes="(max-width: 1200px) 100vw, 1200px"
                    />
                    <h3 className={`${robotoCondensed.className} text-4xl font-bold mb-2 uppercase`}>HomePage sketch</h3>
                    <Image
                        className='mb-8 rounded-lg w-full object-contain aspect-auto'
                        src='/images/imprnt/imprnt-sketch-home@2x.webp'
                        alt='Imprnt homepage sketch'
                        width={800}
                        height={600}
                        sizes="(max-width: 800px) 100vw, 800px"
                    />
                    <h3 className={`${robotoCondensed.className} text-4xl font-bold mb-2 uppercase`}>Original homepage layout</h3>
                    <Image
                        className='mb-8 rounded-lg w-full object-contain aspect-auto'
                        src='/images/imprnt/imprnt-current-site.gif'
                        alt='Imprnt original website'
                        width={800}
                        height={600}
                        sizes="(max-width: 800px) 100vw, 800px"
                    />
                </section>
            </div>
        </div>
    )
}