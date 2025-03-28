'use client'
import { robotoCondensed } from '@/app/fonts'
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
                    <img
                        className='mb-8 rounded-lg w-full object-contain aspect-auto'
                        srcSet='/images/skullshoppe/skullshoppe-homepage.webp, /images/skullshoppe/skullshoppe-homepage@2x.webp 2x'
                        src='/images/skullshoppe/skullshoppe-homepage.webp'
                        alt='The Skull Shoppe website homepage'
                        loading="lazy"
                    />
                    <h3 className={`${robotoCondensed.className} text-4xl font-bold mb-2 uppercase`}>Products Page</h3>
                    <img
                        className='mb-8 rounded-lg w-full object-contain aspect-auto'
                        srcSet='/images/skullshoppe/skullshoppe-products-page.webp, /images/skullshoppe/skullshoppe-products-page@2x.webp 2x'
                        src='/images/skullshoppe/skullshoppe-products-page.webp'
                        alt='The Skull Shoppe products page'
                        loading="lazy"
                    />
                    <h3 className={`${robotoCondensed.className} text-4xl font-bold mb-2 uppercase`}>Product Details Page</h3>
                    <img
                        className='mb-8 rounded-lg w-full object-contain aspect-auto'
                        srcSet='/images/skullshoppe/skullshoppe-product-details-page.webp, /images/skullshoppe/skullshoppe-product-details-page@2x.webp 2x'
                        src='/images/skullshoppe/skullshoppe-product-details-page.webp'
                        alt='The Skull Shoppe product details page'
                        loading="lazy"
                    />
                </section>
            </div>
        </div>
    )
}