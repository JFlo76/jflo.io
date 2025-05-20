'use client'
import { robotoCondensed } from '@/app/fonts'
import Image from 'next/image'

// Tailwind class objects
const container = 'w-full flex flex-col items-center';
const innerContainer = 'flex flex-col px-4 lg:px-20 text-lg container';
const header = 'flex flex-col w-full mt-4 mb-4 lg:mt-16 lg:mb-16';
const mainTitle = `text-6xl font-bold mb-2 uppercase ${robotoCondensed.className}`;
const sectionTitle = `text-4xl font-bold mb-2 uppercase ${robotoCondensed.className}`;

export default function HitachiSolutionsManager() {

    return (
        <main className={container}>
            <div className={innerContainer}>
                <header className={header}>
                    <h1 className={mainTitle}>Hitachi Vantara&#39;s Solutions Manager</h1>
                    <p>
                        <span className="me-4"><b>Role</b>: UX/UI Designer & Usability Studies</span><b>Toolkit</b>: Sketch, CanvasFlip
                    </p>
                </header>

                <section className={`flex flex-col lg:flex-row items-start w-full mb-16`}>
                    <div className='mr-8 w-full lg:max-w-[50%] text-center'>
                        <Image
                            className='w-full mb-4 rounded-lg object-contain aspect-auto'
                            src='/images/hitachi/solutions-manager-before-after@2x.webp'
                            alt='Solutions Manager dashboard before and after'
                            width={800}
                            height={600}
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <p>Before / After</p>
                    </div>
                    <article className='w-full lg:max-w-[50%]'>
                        <h2 className={sectionTitle}>Overview</h2>
                        <p className="md:text-base lg:text-xl mb-4">
                            Hitachi&#39;s Solutions Manager application was conceived and designed by some of my teammates, with the purpose of allowing a power-user with admin privileges to manage customized dashboards, or &quot;Solutions&quot; and the elements that go into building them.
                        </p>
                        <p className="md:text-base lg:text-xl">
                            After the GA version was released, I wanted to perform an evaluation of the application, propose theories for improvements, and conduct usability sessions in order to test those theories.
                        </p>
                    </article>
                </section>

                <section className="flex flex-col items-start w-full mb-4">

                    <div className="flex flex-col md:flex-row items-start w-full mb-8">
                        <div className='mb-16 md:mb-0 md:mr-8 w-full md:max-w-[50%] background-orange'>
                            <h2 className={sectionTitle}>Some Background</h2>
                            <p className="font-bold md:text-base lg:text-xl mb-4">There are 3 types of components in the application:</p>
                            <ol className="list-decimal mb-6 ms-6">
                                <li>Template, which can be thought of as a recipe for a configurable dashboard widget</li>
                                <li>Instance, which is the configured widget created from the Template</li>
                                <li>Dashboard, which is, well... a dashboard that contains a number of Instances</li>
                            </ol>
                            <p className="font-bold md:text-base lg:text-xl mb-4">The basic workflow:</p>
                            <ol className="list-decimal ms-6">
                                <li>User logs in</li>
                                <li>User uploads a Template</li>
                                <li>User deploys an Instance from a Template to a new or existing Dashboard</li>
                                <li>After successful deployment, the user then will see a new Instance of the Template, and the
                                    Dashboard within their inventory</li>
                            </ol>
                        </div>
                        <div className='w-full mb-16'>
                            <h2 className={sectionTitle}>Test Summary</h2>
                            <p className="font-bold md:text-base lg:text-xl mb-4">The test objectives were as follows:</p>
                            <ol className="list-decimal mb-6 ms-6">
                                <li>Improve user&#39;s mental mappings between the components</li>
                                <li>Improve ease of use for navigating between the associated components</li>
                            </ol>
                            <p className="md:text-base lg:text-xl mb-4">Myself and 2 other team members ran a series of 5 remote individual in-depth interviews, each of us
                                taking turns conducting with a written script and taking notes.</p>
                            <p className="md:text-base lg:text-xl mb-4">The participants were all Hitachi consultants, solutions architects and engineers with OT skill sets,
                                which aligns with the persona &quot;Admin Adam&quot; for this application.</p>
                            <p className="md:text-base lg:text-xl mb-4">Each participant joined via video conference where we had them share their computer screen. I used
                                the online tool CanvasFlip in order to record the user&#39;s clicks and workflow through the prototype
                                that I designed using Sketch, while my teammate would take notes and record the audio.</p>
                        </div>
                    </div>

                    <div className='w-full mb-16'>
                        <h2 className={sectionTitle}>Objective 1: Mental Mappings</h2>
                        <div className="flex flex-col md:flex-row items-start w-full mb-8">
                            <div className='mr-8 mb-4 w-full md:max-w-[60%] text-center'>
                                <Image
                                    className='w-full rounded-lg object-contain aspect-auto'
                                    src='/images/hitachi/solutions-manager-original-templates@2x.webp'
                                    alt='UI of the original templates page'
                                    width={800}
                                    height={600}
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                            <article className='w-full md:max-w-[40%]'>
                                <h3 className={`${robotoCondensed.className} text-2xl md:text-4xl font-bold mb-2 uppercase`}>Existing problem</h3>
                                <p className="md:text-base lg:text-xl">In the GA release UI, there was no clear connection between a Template and the Instances that were created from it. The UI had them separated on different pages, with no indication of which Instances were deployed from a certain Template. Likewise, there was no indication to show which Dashboard an Instance was deployed to, and which & how many Instances a Dashboard contains.
                                </p>
                            </article>
                        </div>
                        <div className="flex flex-col md:flex-row items-start w-full mb-8">
                            <div className='mr-8 mb-4 w-full md:max-w-[60%] text-center'>
                                <Image
                                    className='w-full rounded-lg object-contain aspect-auto'
                                    src='/images/hitachi/solutions-manager-new-templates-card.webp'
                                    alt='UI of the new templates page'
                                    width={800}
                                    height={600}
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                            <article className='w-full md:max-w-[40%]'>
                                <h3 className={`${robotoCondensed.className} text-2xl md:text-4xl font-bold mb-2 uppercase`}>Proposed Solutions</h3>
                                <p className="md:text-base lg:text-xl">For visualizing the associations between Template and Instance(s), I decided to alter the card view
                                    so that each card showed a nested list of Instances that were spawned from that particular Template.
                                    I also added some search inputs for Templates and Instances scoped to a Template, as well as more
                                    text for the sorting so users would immediately know the sorting status.
                                </p>
                                <p className="md:text-base lg:text-xl">Participants were asked to look at the Templates page and describe what they saw. Qualitative results
                                    were a little mixed about this new layout, as 2/5 participants were still a little unsure what the
                                    nested list within each card was for at first. After a bit of exploration, they were able to
                                    understand the relationships better, but some more exploration around the visual layout or possibly
                                    adding a title to the nested list is needed.</p>
                                <p className="md:text-base lg:text-xl">For showing the associations between Dashboards and Instances, the solution was addressed in the next
                                    objective.</p>
                            </article>
                        </div>

                    </div>

                    <div className='w-full mb-16'>
                        <h2 className={sectionTitle}>Objective 2: Navigation</h2>
                        <div className="flex flex-col md:flex-row items-start w-full mb-8">
                            <div className='mr-8 mb-4 w-full md:max-w-[30%] text-center'>
                                <Image
                                    className='w-full rounded-lg object-contain aspect-auto'
                                    src='/images/hitachi/solutions-manager-original-templates-card@2x.webp'
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    alt='Mobile UI of the new instance card'
                                    width={800}
                                    height={600}
                                    loading="lazy"
                                />
                            </div>
                            <article className='mr-8 w-full md:max-w-[70%]'>
                                <h3 className={`${robotoCondensed.className} text-2xl md:text-4xl font-bold mb-2 uppercase`}>Existing problem</h3>
                                <p className="md:text-base lg:text-xl">There was no way for the user to easily navigate to associated components.
                                </p>
                            </article>
                        </div>
                        <div className="flex flex-col md:flex-row items-start w-full mb-8">
                            <div className='mr-8 mb-4 w-full md:max-w-[30%] text-center'>
                                <Image
                                    className='w-full rounded-lg object-contain aspect-auto'
                                    src='/images/hitachi/solutions-manager-new-instance-card@2x.webp'
                                    alt='Mobile UI of the new instance card'
                                    width={800}
                                    height={600}
                                    loading="lazy"
                                />
                            </div>
                            <article className='mr-8 w-full md:max-w-[70%]'>
                                <h3 className={`${robotoCondensed.className} text-2xl md:text-4xl font-bold mb-2 uppercase`}>Proposed Solutions</h3>
                                <p className="md:text-base lg:text-xl">For linking between the Instances and the Dashboards, the GA release only supported a 1-1
                                    relationship for Instances, but a 1-Many relationship for the Dashboards. The fix for the Instances
                                    was easy: list the associated Dashboard in the card/list item as a link. The link would take the
                                    user to the Dashboards page, with the specific Dashboard applied as a search parameter.
                                </p>
                            </article>
                        </div>
                        <div className="flex flex-col md:flex-row items-start w-full mb-8">
                            <div className="w-full md:max-w-[61%] flex flex-row mr-8 mb-4 lg:gap-4 overflow-x-auto flex-nowrap gap-4 scroll-snap-x scroll-smooth snap-x snap-mandatory md:overflow-visible md:flex-wrap">
                                <Image
                                    className='w-4/5 min-w-[80vw] md:w-1/2 md:min-w-0 rounded-lg object-contain aspect-auto snap-center'
                                    src='/images/hitachi/solutions-manager-dashboard-instances-overlay-off@2x.webp'
                                    alt='Mobile UI of the new instance card'
                                    width={400}
                                    height={300}
                                    loading="lazy"
                                />
                                <Image
                                    className='w-4/5 min-w-[80vw] md:w-1/2 md:min-w-0 rounded-lg object-contain aspect-auto snap-center'
                                    src='/images/hitachi/solutions-manager-dashboard-instances-overlay-on@2x.webp'
                                    alt='Mobile UI of the new instance card'
                                    width={400}
                                    height={300}
                                    loading="lazy"
                                />
                            </div>

                            <article className='mr-8 w-full md:max-w-[30%]'>
                                <p className='md:text-base lg:text-xl'>For the Dashboards linking, there was the potential for the list of Instances to be up to 13 items
                                    (the max recommended number of Instances per Dashboard based on performance benchmarking by the
                                    devs), which posed problems for the UI in both list and card views. My proposed solution for this
                                    was to display a badge with the number of associated Instances and an icon next to the number to
                                    indicate more info is available. In card view, the button would toggle an overlay on that card with
                                    a list of the Instances as links. In list view, the same badge would toggle a tooltip or popover
                                    with the same list of links.</p>
                            </article>
                        </div>
                        <div className="flex flex-col md:flex-row items-start w-full mb-8">
                            <article className='mr-8 w-full md:max-w-[60%]'>
                                <p className='md:text-base lg:text-xl'>For this objective, participants were given a task which involved the assumption that their
                                    inventories were already populated with Templates, Instances and Dashboards.</p>
                                <p className='md:text-base lg:text-xl'>Participants were first instructed to navigate to the Instances page and then asked to navigate to
                                    the associated Dashboard for an Instance. All participants completed the task with no errors or
                                    confusion. The participants were then asked to identify all the associated Instances for that same
                                    Dashboard, then navigate to view those Instances. All participants were able to identify the badge
                                    as an interactive element within 3-5 seconds, click on it to view the Instances, then navigate to
                                    the Instances page from there.</p>
                                <p className='md:text-base lg:text-xl'>Since the previous design didn&#39;t have any linking between components, there was no baseline to test
                                    against. This navigation test can now be used as a baseline for measuring navigation improvements.
                                </p>
                            </article>
                            <article className='mr-8 w-full md:max-w-[40%]'>
                                <h3 className={`${robotoCondensed.className} text-2xl md:text-4xl font-bold mb-2 uppercase`}>Findings and Recommendations</h3>
                                <ul className='list-disc ms-6 md:text-base lg:text-xl'>
                                    <li className='mb-4'>Objective 1 was partially accomplished, but
                                        may need more iteration on the design and further testing.</li>
                                    <li>Objective 2 was accomplished by task
                                        completion with no errors, and the proposed design changes should be implemented.</li>
                                </ul>
                            </article>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}