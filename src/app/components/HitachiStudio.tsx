'use client'
import { robotoCondensed } from '@/app/fonts'
import { useState } from 'react'

export default function HitachiStudio() {
    // Function to generate a random number between 1 and 100
    const getRandomNumber = (): number => {
        return Math.floor(Math.random() * 100) + 1
    }

    // State to store random numbers for each persona
    const [randomNumbers, setRandomNumbers] = useState({
        admin: getRandomNumber(),
        manager: getRandomNumber(),
        operator: getRandomNumber()
    })

    return (
        <main className="w-full flex flex-col items-center">
            <div className="flex flex-col px-4 md:px-20 text-lg container">
                <header className="flex flex-col w-full mt-16 mb-16">
                    <h1 className={`${robotoCondensed.className} text-4xl md:text-6xl font-bold mb-2 uppercase`}>Hitachi Vantara's Lumada Studio</h1>
                    <p>
                        <span className="me-4"><b>Role</b>: UX/UI Designer</span><b>Toolkit</b>: Sketch, InVision
                    </p>
                </header>

                <section className="flex flex-col items-start w-full mb-4">
                    <div className='w-full mb-16'>
                        <h2 className={`${robotoCondensed.className} text-3xl md:text-4xl font-bold mb-2 uppercase`}>Overview</h2>
                        <p className="md:text-base lg:text-xl mb-4">
                            Hitachi's Lumada Studio is the user interface for the data collected and analyzed on the Lumada Core
                            platform, and is primarily used by people in the manufacturing industry to monitor production machinery for
                            predictive maintenance.
                        </p>
                        <p className="md:text-base lg:text-xl">
                            The goals for this application included an intuitive interface, data visualization through
                            customizable dashboards, a library of widgets for the charts/graphs, and the ability to generate
                            reports.
                        </p>
                    </div>

                    <div className='w-full mb-4'>
                        <h2 className={`${robotoCondensed.className} text-3xl md:text-4xl font-bold mb-2 uppercase`}>UX Personas</h2>
                        <p className="md:text-base lg:text-xl mb-6">Before starting any designs, I needed to fully understand the user profiles for a manufacturing plant. I sought out a few Hitachi OT specialists to gain insight on who would be using this application and what they typically do in their day. After a couple of meetings and sleuthing through Confluence documentation, I discovered there were essentially 3 types of user roles:</p>
                    </div>

                    <div className='w-full mb-16'>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-stone-900'>
                            {/* Card 1 - Admin Adam */}
                            <article className='bg-white shadow-lg rounded-lg p-6 border border-gray-200'>
                                <div className="flex items-center mb-4">
                                    <img
                                        src={`https://randomuser.me/api/portraits/men/${randomNumbers.admin}.jpg`}
                                        alt="Admin Adam"
                                        className="w-16 h-16 rounded-full mr-4 object-cover"
                                        loading="lazy"
                                    />
                                    <h3 className={`${robotoCondensed.className} text-2xl font-bold`}>Admin Adam</h3>
                                </div>
                                <p className='text-base mb-4'>A technically-inclined power-user who most likely is a lead architect at Hitachi Consulting. He works closely with customers to deploy and configure Studio according to their requirements. He needs to have full access to all aspects of Studio to fulfill his job.</p>
                                <p className='text-base mb-4'>Adam has the technical acumen to understand the intricacies of the technologies behind Studio and how to customize it. He also has a strong understanding of all the different Lumada products.</p>
                            </article>

                            {/* Card 2 - OT Manager Mary */}
                            <article className='bg-white shadow-lg rounded-lg p-6 border border-gray-200'>
                                <div className="flex items-center mb-4">
                                    <img
                                        src={`https://randomuser.me/api/portraits/women/${randomNumbers.manager}.jpg`}
                                        alt="OT Manager Mary"
                                        className="w-16 h-16 rounded-full mr-4 object-cover"
                                        loading="lazy"
                                    />
                                    <h3 className={`${robotoCondensed.className} text-2xl font-bold`}>OT Manager Mary</h3>
                                </div>
                                <p className='text-base mb-4'>Mary is an operations manager at Big Shipping Co. Mary manages a large number of people and multiple production lines. She needs to have full visibility of all the operators and needs to be able to manage what her employees have access to on Studio. Mary is not knowledgeable on the technical aspects of Studio but is trained in how to use Studio for her purposes.</p>
                                <ul className='list-disc pl-5 text-base'>
                                    <li>Checks work orders per asset</li>
                                    <li>Checks news/alert feed</li>
                                    <li>Concerned with efficiency & degradation</li>
                                    <li>Is proactive to prevent problems</li>
                                    <li>Also performs personnel admin management</li>
                                </ul>
                            </article>

                            {/* Card 3 - OT Operator Eric */}
                            <article className='bg-white shadow-lg rounded-lg p-6 border border-gray-200'>
                                <div className="flex items-center mb-4">
                                    <img
                                        src={`https://randomuser.me/api/portraits/men/${randomNumbers.operator}.jpg`}
                                        alt="OT Operator Eric"
                                        className="w-16 h-16 rounded-full mr-4 object-cover"
                                        loading="lazy"
                                    />
                                    <h3 className={`${robotoCondensed.className} text-2xl font-bold`}>OT Operator Eric</h3>
                                </div>
                                <p className='text-base mb-4'>Eric is an operator for Huge Automotive Ltd. He works in the car assembly process, where he is responsible for assembling the seats on the car. As he does his job, he uses Studio to keep an eye on the KPI's for his process. He has very basic training in using Studio and limited knowledge regarding its more advanced features.</p>
                                <ul className='list-disc pl-5 text-base'>
                                    <li>Mostly concerned with checking for alerts, then following a process for a course of
                                        action regarding repair/maintenance</li>
                                    <li>Would possibly be alerted by some type of mobile device</li>
                                </ul>
                            </article>
                        </div>
                    </div>

                    <div className='w-full mb-16'>
                        <h2 className={`${robotoCondensed.className} text-3xl md:text-4xl font-bold mb-2 uppercase`}>Customizing the Experience</h2>
                        <p className="md:text-base lg:text-xl mb-10">
                            In order to help the user get started, I wanted to provide a few dashboard templates that he could use to help the user do their job. Basing each view off the main job duties for each user, I proposed 3 levels: Regional, Factory, and Asset level views.
                        </p>
                        <div className="flex flex-col md:flex-row items-start w-full mb-8">
                            <img
                                className='mb-4 md:mb-0 md:mr-8 rounded-lg w-full md:max-w-[50%] object-contain aspect-auto'
                                srcSet='/images/hitachi/studio-sketch-region.png, /images/hitachi/studio-sketch-region-2x.png 2x'
                                src='/images/hitachi/studio-sketch-region.png'
                                alt='Sketch art of UI for region view'
                                loading="lazy"
                            />
                            <article>
                                <h3 className={`${robotoCondensed.className} text-2xl md:text-4xl font-bold mb-2 uppercase`}>Regional View</h3>
                                <p className="md:text-base lg:text-xl">This view serves as the starting point for a user that needs to see a number of locations, such as a regional manager. It has high level stats and a geo-location map.
                                </p>
                            </article>
                        </div>
                        <div className="flex flex-col md:flex-row items-start w-full mb-8">
                            <img
                                className='mb-4 md:mb-0 md:mr-8 rounded-lg w-full md:max-w-[50%] object-contain aspect-auto'
                                srcSet='/images/hitachi/studio-sketch-plant.png, /images/hitachi/studio-sketch-plant-2x.png 2x'
                                src='/images/hitachi/studio-sketch-plant.png'
                                alt='Sketch art of UI for plant view'
                                loading="lazy"
                            />
                            <article>
                                <h3 className={`${robotoCondensed.className} text-2xl md:text-4xl font-bold mb-2 uppercase`}>Factory View</h3>
                                <p className="md:text-base lg:text-xl">This view provides a factory level overview, which is optimized for a plant manager. It has factory stats plus groups of assets listed in a table or card view.
                                </p>
                            </article>
                        </div>
                        <div className="flex flex-col md:flex-row items-start w-full">
                            <img
                                className='mb-4 md:mb-0 md:mr-8 rounded-lg w-full md:max-w-[50%] object-contain aspect-auto'
                                srcSet='/images/hitachi/studio-sketch-asset.png, /images/hitachi/studio-sketch-asset-2x.png 2x'
                                src='/images/hitachi/studio-sketch-asset.png'
                                alt='Sketch art of UI for asset view'
                                loading="lazy"
                            />
                            <article>
                                <h3 className={`${robotoCondensed.className} text-2xl md:text-4xl font-bold mb-2 uppercase`}>Asset View</h3>
                                <p className="md:text-base lg:text-xl">At the asset level, this is as far down as a user can drill. This view is created for the OT Operator role, who needs more granular details about specific machines, and alerts for predictive maintenance.
                                </p>
                            </article>
                        </div>

                    </div>
                    <div className='w-full mb-16'>
                        <h2 className={`${robotoCondensed.className} text-3xl md:text-4xl font-bold mb-2 uppercase`}>A Flexible Navigation System</h2>
                        <p className="md:text-base lg:text-xl mb-10">
                            Since the Studio could potentially be used by any industry that wants to collect and visualize data coming from machine sensors, the dashboards needed to be customizable for each client. Our team of engineers chose the open-source project Superset, by Airbnb, to enable a Hitachi consultant (Admin Adam) to configure any arrangement of business intelligence widgets, scoped to an individual user if needed. This level of customization meant that the navigation would be dead simple.
                        </p>
                        <div className="flex flex-col md:flex-row items-start w-full mb-8">
                            <div className='mb-4 md:mb-0 md:mr-8 w-full md:max-w-[50%]'>
                                <img
                                    className='mb-4 rounded-lg w-full object-contain aspect-auto'
                                    srcSet='/images/hitachi/nav-level-1.webp, /images/hitachi/nav-level-1@2x.webp 2x'
                                    src='/images/hitachi/nav-level-1.webp'
                                    alt='Low fidelity wireframe of navigation'
                                    loading="lazy"
                                />
                                <img
                                    className='mb-4 rounded-lg w-full object-contain aspect-auto'
                                    srcSet='/images/hitachi/nav-level-2.webp, /images/hitachi/nav-level-2@2x.webp 2x'
                                    src='/images/hitachi/nav-level-2.webp'
                                    alt='Low fidelity wireframe of navigation'
                                    loading="lazy"
                                />
                                <img
                                    className='mb-4 rounded-lg w-full object-contain aspect-auto'
                                    srcSet='/images/hitachi/nav-level-3.webp, /images/hitachi/nav-level-3@2x.webp 2x'
                                    src='/images/hitachi/nav-level-3.webp'
                                    alt='Low fidelity wireframe of navigation'
                                    loading="lazy"
                                />
                            </div>
                            <p className='mb-4 md:mb-0 md:mr-8 w-full md:max-w-[50%]'>
                                The navigation pattern I envisioned for this application followed a mobile-first approach, where the user simply drills down by interacting with elements in the dashboard. To move back, the user can click/tap the “back arrow”, which takes the user back up one level, or the “home” icon which jumps them back to the top level. When the user is drilled to a child level that has siblings, the level name would also be a dropdown that allows the user to move laterally between siblings.
                            </p>
                        </div>
                        <div className="flex flex-col md:flex-row items-start w-full mb-8">
                            <div className='mb-4 md:mb-0 md:mr-8 w-full md:max-w-[50%]'>
                                <img
                                    className='mb-4 rounded-lg w-full object-contain aspect-auto'
                                    srcSet='/images/hitachi/nav-breadcrumbs-1.webp, /images/hitachi/nav-breadcrumbs-1@2x.webp 2x'
                                    src='/images/hitachi/nav-breadcrumbs-1.webp'
                                    alt='Low fidelity wireframe of navigation'
                                    loading="lazy"
                                />
                                <img
                                    className='mb-4 rounded-lg w-full object-contain aspect-auto'
                                    srcSet='/images/hitachi/nav-breadcrumbs-2.webp, /images/hitachi/nav-breadcrumbs-2@2x.webp 2x'
                                    src='/images/hitachi/nav-breadcrumbs-2.webp'
                                    alt='Low fidelity wireframe of navigation'
                                    loading="lazy"
                                />
                            </div>
                            <p className='mb-4 md:mb-0 md:mr-8 w-full md:max-w-[50%]'>
                                Based on feedback from design reviews and a usability test, I brought in a little more navigation redundancy in the form of multiple breadcrumbs, instead of a single parent breadcrumb.
                            </p>
                        </div>
                    </div>
                    <div className='w-full mb-16'>
                        <h2 className={`${robotoCondensed.className} text-3xl md:text-4xl font-bold mb-2 uppercase`}>Finalized Dashboard Designs</h2>
                        <img
                            className='mb-4 rounded-lg w-full object-contain aspect-auto'
                            srcSet='/images/hitachi/LumadaStudio-RegionMapActive.webp, /images/hitachi/LumadaStudio-RegionMapActive@2x.webp 2x'
                            src='/images/hitachi/LumadaStudio-RegionMapActive.webp'
                            alt='Low fidelity wireframe of navigation'
                            loading="lazy"
                        />
                        <p className='text-center mb-16'>Regional Level View</p>
                        <img
                            className='mb-4 rounded-lg w-full object-contain aspect-auto'
                            srcSet='/images/hitachi/LumadaStudio-LineLevel.webp, /images/hitachi/LumadaStudio-LineLevel@2x.webp 2x'
                            src='/images/hitachi/LumadaStudio-LineLevel.webp'
                            alt='Low fidelity wireframe of navigation'
                            loading="lazy"
                        />
                        <p className='text-center mb-16'>Line Level View</p>
                        <img
                            className='mb-4 rounded-lg w-full object-contain aspect-auto'
                            srcSet='/images/hitachi/LumadaStudio-AssetLevel.webp, /images/hitachi/LumadaStudio-AssetLevel@2x.webp 2x'
                            src='/images/hitachi/LumadaStudio-AssetLevel.webp'
                            alt='Low fidelity wireframe of navigation'
                            loading="lazy"
                        />
                        <p className='text-center mb-16'>Asset Level View</p>
                    </div>
                    <div className='w-full mb-16'>
                        <h2 className={`${robotoCondensed.className} text-3xl md:text-4xl font-bold mb-2 uppercase`}>Data Visualization Designs</h2>
                        <p className="md:text-base lg:text-xl mb-10">One of the really cool things about the Hitachi Lumada suite of products is that it allows developers to create their own solutions for data visualization. But we couldn't go to market without providing a few default graphs and charts.</p>
                        <img
                            className='mb-4 rounded-lg w-full object-contain aspect-auto'
                            srcSet='/images/hitachi/HeatMap-Chart.webp, /images/hitachi/HeatMap-Chart@2x.webp 2x'
                            src='/images/hitachi/HeatMap-Chart.webp'
                            alt='Heat map chart'
                            loading="lazy"
                        />
                        <p className='text-center mb-16'>Heat Map Chart</p>
                        <img
                            className='mb-4 rounded-lg w-full object-contain aspect-auto'
                            srcSet='/images/hitachi/Pareto-Chart.webp, /images/hitachi/Pareto-Chart@2x.webp 2x'
                            src='/images/hitachi/Pareto-Chart.webp'
                            alt='Heat map chart'
                            loading="lazy"
                        />
                        <p className='text-center mb-16'>Pareto Chart</p>
                        <img
                            className='mb-4 rounded-lg w-full object-contain aspect-auto'
                            srcSet='/images/hitachi/Timestrip-Chart.webp, /images/hitachi/Timestrip-Chart@2x.webp 2x'
                            src='/images/hitachi/Timestrip-Chart.webp'
                            alt='Heat map chart'
                            loading="lazy"
                        />
                        <p className='text-center mb-16'>Timestrip Chart</p>
                    </div>

                </section>
            </div>
        </main>
    )
}