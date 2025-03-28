'use client'
import { robotoCondensed } from '@/app/fonts'
export default function ProductOfTheNorth() {

    return (
        <div className={`w-full flex flex-col items-center`}>
            <div className={`flex flex-col px-20 text-lg container`}>
                <header className={`flex flex-col w-full mt-16 mb-16`}>
                    <h2 className={`${robotoCondensed.className} text-6xl font-bold mb-2 uppercase`}>Product of the North</h2>
                    <p>
                        <span className="me-4"><b>Role</b>: Shopify Developer</span><b>Toolkit</b>: Shopify Platform
                    </p>
                    <p>Helped client get their Shopify store set up, advising them on template choice and making minor customizations to fit their needs. Implemented payment gateway, shipping plugins and ensured site works across all devices.</p>
                    <p><a href="https://productofthenorth.com" target="_blank" rel="noopener noreferrer" className="underline text-[--forground] hover:text-[--primary-blue-200]">View live website</a></p>
                </header>
                <section className={`flex flex-col items-start w-full mb-16`}>
                    <h3 className={`${robotoCondensed.className} text-4xl font-bold mb-2 uppercase`}>Homepage Hero</h3>
                    <img
                        className='mb-8 rounded-lg w-full object-contain aspect-auto'
                        srcSet='/images/potn/potn-hero.webp, /images/potn/potn-hero@2x.webp 2x'
                        src='/images/potn/potn-hero.webp'
                        alt='Product of the North website homepage hero banner'
                        loading="lazy"
                    />
                    <h3 className={`${robotoCondensed.className} text-4xl font-bold mb-2 uppercase`}>Products Page</h3>
                    <img
                        className='mb-8 rounded-lg w-full object-contain aspect-auto'
                        srcSet='/images/potn/potn-bags.webp, /images/potn/potn-bags@2x.webp 2x'
                        src='/images/potn/potn-bags.webp'
                        alt='Product of the North bags product page'
                        loading="lazy"
                    />
                    <h3 className={`${robotoCondensed.className} text-4xl font-bold mb-2 uppercase`}>Product Details Page</h3>
                    <img
                        className='mb-8 rounded-lg w-full object-contain aspect-auto'
                        srcSet='/images/potn/potn-bag-details.webp, /images/potn/potn-bag-details@2x.webp 2x'
                        src='/images/potn/potn-bag-details.webp'
                        alt='Product of the North bag product details page'
                        loading="lazy"
                    />
                </section>
            </div>
        </div>
    )
}