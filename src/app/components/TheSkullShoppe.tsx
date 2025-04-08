'use client'
import { robotoCondensed } from '@/app/fonts'
import Image from 'next/image';

export default function TheSkullShoppe() {

    return (
        <div className={`w-full flex flex-col items-center`}>
            <div className={`flex flex-col px-20 text-lg container`}>
                <header className={`flex flex-col w-full mt-16 mb-16`}>
                    <h2 className={`${robotoCondensed.className} text-6xl font-bold mb-2 uppercase`}>The Skull Shoppe</h2>
                    <p>
                        <span className="me-4"><b>Role</b>: Shopify Developer</span><b>Toolkit</b>: Shopify Platform
                    </p>
                    <p>Set up Shopify store for client, including theme, minor theme customizations, payment gateway, shipping integrations, and social media plugin. Client populated the store content themselves.</p>
                    <p><a href="https://skullshoppe.com/" target="_blank" rel="noopener noreferrer" className="underline text-[--forground] hover:text-[--primary-blue-200]">View live website</a></p>
                </header>
                <section className={`flex flex-col items-start w-full mb-16`}>
                    <h3 className={`${robotoCondensed.className} text-4xl font-bold mb-2 uppercase`}>Homepage</h3>
                    <Image
                        className='mb-8 rounded-lg w-full object-contain aspect-auto'
                        src='/images/skullshoppe/skullshoppe-homepage@2x.webp'
                        alt='The Skull Shoppe website homepage'
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <h3 className={`${robotoCondensed.className} text-4xl font-bold mb-2 uppercase`}>Products Page</h3>
                    <Image
                        className='mb-8 rounded-lg w-full object-contain aspect-auto'
                        src='/images/skullshoppe/skullshoppe-products-page@2x.webp'
                        alt='The Skull Shoppe products page'
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <h3 className={`${robotoCondensed.className} text-4xl font-bold mb-2 uppercase`}>Product Details Page</h3>
                    <Image
                        className='mb-8 rounded-lg w-full object-contain aspect-auto'
                        src='/images/skullshoppe/skullshoppe-product-details-page@2x.webp'
                        alt='The Skull Shoppe product details page'
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </section>
            </div>
        </div>
    )
}