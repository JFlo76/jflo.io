'use client'
import { robotoCondensed } from '@/app/fonts'
import { useState } from 'react'

export default function HitachiSolutionsManager() {
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
                    <h1 className={`${robotoCondensed.className} text-4xl md:text-6xl font-bold mb-2 uppercase`}>Hitachi Vantara's Solutions Manager</h1>
                    <p>
                        <span className="me-4"><b>Role</b>: UX/UI Designer & Usability Studies</span><b>Toolkit</b>: Sketch, CanvasFlip
                    </p>
                </header>

                <section className={`flex flex-row items-start w-full mb-16`}>
                    <div className='mr-8 w-full md:max-w-[50%] text-center'>
                        <img
                            className='w-full rounded-lg object-contain aspect-auto'
                            srcSet='/images/hitachi/solutions-manager-before-after.webp, /images/hitachi/solutions-manager-before-after@2x.webp 2x'
                            alt='Solutions Manager dashboard before and after' />
                        <p>Before / After</p>
                    </div>
                    <article className='w-full md:max-w-[50%]'>
                        <h2 className={`${robotoCondensed.className} text-3xl md:text-4xl font-bold mb-2 uppercase`}>Overview</h2>
                        <p className="md:text-base lg:text-xl mb-4">
                            Hitachi's Solutions Manager application was conceived and designed by some of my teammates, with the purpose of allowing a power-user with admin privileges to manage customized dashboards, or "Solutions" and the elements that go into building them.
                        </p>
                        <p className="md:text-base lg:text-xl">
                            After the GA version was released, I wanted to perform an evaluation of the application, propose theories for improvements, and conduct usability sessions in order to test those theories.
                        </p>
                    </article>
                </section>

                <section className="flex flex-col items-start w-full mb-4">

                    <div className="flex flex-col md:flex-row items-start w-full mb-8">
                        <div className='mb-4 md:mb-0 md:mr-8 w-full md:max-w-[50%] background-orange'>
                            <h2 className={`${robotoCondensed.className} text-3xl md:text-4xl font-bold mb-2 uppercase`}>Some Background</h2>
                            <p className="font-bold md:text-base lg:text-xl mb-4">There are 3 types of components in the application:</p>
                            <ol className="list-decimal list-inside mb-6 ms-8">
                                <li>Template, which can be thought of as a recipe for a configurable dashboard widget</li>
                                <li>Instance, which is the configured widget created from the Template</li>
                                <li>Dashboard, which is, well... a dashboard that contains a number of Instances</li>
                            </ol>
                            <p className="font-bold md:text-base lg:text-xl mb-4">The basic workflow:</p>
                            <ol className="list-decimal list-inside ms-8">
                                <li>User logs in</li>
                                <li>User uploads a Template</li>
                                <li>User deploys an Instance from a Template to a new or existing Dashboard</li>
                                <li>After successful deployment, the user then will see a new Instance of the Template, and the
                                    Dashboard within their inventory</li>
                            </ol>
                        </div>
                        <div className='w-full mb-16'>
                            <h2 className={`${robotoCondensed.className} text-3xl md:text-4xl font-bold mb-2 uppercase`}>Test Summary</h2>
                            <p className="font-bold md:text-base lg:text-xl mb-4">The test objectives were as follows:</p>
                            <ol className="list-decimal list-inside mb-6 ms-8">
                                <li>Improve user's mental mappings between the components</li>
                                <li>Improve ease of use for navigating between the associated components</li>
                            </ol>
                            <p className="md:text-base lg:text-xl mb-4">Myself and 2 other team members ran a series of 5 remote individual in-depth interviews, each of us
                                taking turns conducting with a written script and taking notes.</p>
                            <p className="md:text-base lg:text-xl mb-4">The participants were all Hitachi consultants, solutions architects and engineers with OT skill sets,
                                which aligns with the persona "Admin Adam" for this application.</p>
                            <p className="md:text-base lg:text-xl mb-4">Each participant joined via video conference where we had them share their computer screen. I used
                                the online tool CanvasFlip in order to record the user's clicks and workflow through the prototype
                                that I designed using Sketch, while my teammate would take notes and record the audio.</p>
                        </div>
                    </div>

                    <div className='w-full mb-16'>
                        <h2 className={`${robotoCondensed.className} text-3xl md:text-4xl font-bold mb-2 uppercase`}>Objective 1: Mental Mappings</h2>
                        <div className="flex flex-col md:flex-row items-start w-full mb-8">
                            <div className='mr-8 w-full md:max-w-[50%] text-center'>
                                <img
                                    className='w-full rounded-lg object-contain aspect-auto'
                                    srcSet='/images/hitachi/solutions-manager-original-templates.webp, /images/hitachi/solutions-manager-original-templates@2x.webp 2x'
                                    src='/images/hitachi/solutions-manager-original-templates.webp'
                                    alt='Sketch art of UI for region view'
                                    loading="lazy"
                                />
                            </div>
                            <article className='w-full md:max-w-[50%]'>
                                <h3 className={`${robotoCondensed.className} text-2xl md:text-4xl font-bold mb-2 uppercase`}>Existing problem:</h3>
                                <p className="md:text-base lg:text-xl">In the GA release UI, there was no clear connection between a Template and the Instances that were created from it. The UI had them separated on different pages, with no indication of which Instances were deployed from a certain Template. Likewise, there was no indication to show which Dashboard an Instance was deployed to, and which & how many Instances a Dashboard contains.
                                </p>
                            </article>
                        </div>
                        {/* <div className="flex flex-col md:flex-row items-start w-full mb-8">
                            <div className='mr-8 w-full md:max-w-[50%] text-center'>
                                <img
                                    className='w-full rounded-lg object-contain aspect-auto'
                                    srcSet='/images/hitachi/studio-sketch-plant.png, /images/hitachi/studio-sketch-plant-2x.png 2x'
                                    src='/images/hitachi/studio-sketch-plant.png'
                                    alt='Sketch art of UI for plant view'
                                    loading="lazy"
                                />
                            </div>
                            <article className='w-full md:max-w-[50%]'>
                                <h3 className={`${robotoCondensed.className} text-2xl md:text-4xl font-bold mb-2 uppercase`}>Factory View</h3>
                                <p className="md:text-base lg:text-xl">This view provides a factory level overview, which is optimized for a plant manager. It has factory stats plus groups of assets listed in a table or card view.
                                </p>
                            </article>
                        </div>
                        <div className="flex flex-col md:flex-row items-start w-full">
                            <div className='mr-8 w-full md:max-w-[50%] text-center'>
                                <img
                                    className='w-full rounded-lg object-contain aspect-auto'
                                    srcSet='/images/hitachi/studio-sketch-asset.png, /images/hitachi/studio-sketch-asset-2x.png 2x'
                                    src='/images/hitachi/studio-sketch-asset.png'
                                    alt='Sketch art of UI for asset view'
                                    loading="lazy"
                                />
                            </div>
                            <article className='w-full md:max-w-[50%]'>
                                <h3 className={`${robotoCondensed.className} text-2xl md:text-4xl font-bold mb-2 uppercase`}>Asset View</h3>
                                <p className="md:text-base lg:text-xl">At the asset level, this is as far down as a user can drill. This view is created for the OT Operator role, who needs more granular details about specific machines, and alerts for predictive maintenance.
                                </p>
                            </article>
                        </div> */}

                    </div>
                    {/* <div className='w-full mb-16'>
                        <h2 className={`${robotoCondensed.className} text-3xl md:text-4xl font-bold mb-2 uppercase`}>A Flexible Navigation System</h2>
                        <p className="md:text-base lg:text-xl mb-10">
                            Since the Studio could potentially be used by any industry that wants to collect and visualize data coming from machine sensors, the dashboards needed to be customizable for each client. Our team of engineers chose the open-source project Superset, by Airbnb, to enable a Hitachi consultant (Admin Adam) to configure any arrangement of business intelligence widgets, scoped to an individual user if needed. This level of customization meant that the navigation would be dead simple.
                        </p>
                        <div className="flex flex-col md:flex-row items-start w-full mb-8">
                            <div className='mr-8 w-full md:max-w-[50%] text-center'>
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
                            <p className='w-full md:max-w-[50%]'>
                                The navigation pattern I envisioned for this application followed a mobile-first approach, where the user simply drills down by interacting with elements in the dashboard. To move back, the user can click/tap the “back arrow”, which takes the user back up one level, or the “home” icon which jumps them back to the top level. When the user is drilled to a child level that has siblings, the level name would also be a dropdown that allows the user to move laterally between siblings.
                            </p>
                        </div>
                        <div className="flex flex-col md:flex-row items-start w-full">
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
                            <p className='w-full md:max-w-[50%]'>
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
                    </div> */}

                </section>
            </div>
        </main>
    )
}