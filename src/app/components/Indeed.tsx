'use client'
import Image from 'next/image';
import { robotoCondensed } from '@/app/fonts'

// Tailwind class objects
const container = 'w-full flex flex-col items-center';
const innerContainer = 'flex flex-col px-4 lg:px-20 text-lg container';
const header = 'flex flex-col w-full mt-4 mb-4 lg:mt-16 lg:mb-16';
const mainTitle = `text-6xl font-bold mb-2 uppercase ${robotoCondensed.className}`;
const section = 'flex flex-col lg:flex-row lg:items-start w-full mb-8 lg:mb-16';
const image = 'mb-4 lg:mr-8 rounded-lg w-[100%] lg:max-w-[50%] object-contain aspect-auto';
const sectionTitle = `text-4xl font-bold mb-2 uppercase ${robotoCondensed.className}`;
const paragraph = 'md:text-base lg:text-xl';

export default function Indeed() {
    return (
        <div className={container}>
            <div className={innerContainer}>
                <header className={header}>
                    <h2 className={mainTitle}>Indeed Interview Scheduling</h2>
                    <p>
                        <span className="me-4"><b>Role</b>: UX Developer</span>
                        <b>Toolkit</b>: React, Typescript, Emotion (CSS in JS), Storybook, Chromatic
                    </p>
                </header>
                <section className={section}>
                    <Image
                        className={image}
                        src='/images/indeed/interview-scheduling-modal@2x.webp'
                        alt='Indeed.com interface with the interview scheduling modal open'
                        width={800}
                        height={600}
                    />
                    <article>
                        <h2 className={sectionTitle}>Overview</h2>
                        <p className={paragraph}>
                            At Indeed, the role of a UX Developer fell under the UX Org, along with Designers and Researchers.
                            Each product team usually consisted of a Product Manager, a Technical Design Manager, a handful of
                            Software Engineers, and an embedded UX Designer and Developer. As a UX Dev, it was my responsibility
                            to collaborate with Designers and Product Managers, and implement the UI for product features, as
                            well as communicate any updates and best practices to these teams, that fell under the Product Org.
                        </p>
                        <p className={paragraph}>
                            During my 5.5 years at Indeed, I worked on a handful of teams within the Employer side of the
                            platform, the last one being the Interview Scheduling team, which owned a form that allowed an
                            employer to send an invitation to a candidate for an interview. The form had a number of inputs that
                            were imported React components from Indeed&apos;s design system library, which allowed the employer to
                            specify duration, format, date, time and a few other options within the interview invitation.
                        </p>
                    </article>
                </section>
                <section className={section}>
                    <Image
                        className={image}
                        src="/images/indeed/scheduling-storybook@2x.webp"
                        alt="Storybook interface with scheduling modal"
                        width={800}
                        height={600}
                    />
                    <article>
                        <h2 className={sectionTitle}>Maintaining the UI with Storybook</h2>
                        <p className={paragraph}>
                            I&apos;m a strong ambassador for UI development tools, one of them being Storybook. As the UX
                            Developer for this team, I was the person in charge of ensuring the UI/UX of this product
                            feature looked and functioned as it should across all our supported devices. When I joined
                            the team, they had Storybook set up for their product components, but the stories had grown a bit
                            stale, and didn&apos;t represent all the various states that the components could display. I took
                            it upon myself to audit the product in order to identify components that were missing,
                            obsolete, or needed updating, such as arguments and parameters for altering the UI under
                            certain conditions, for example, theming, translations, running interaction tests using the
                            Storybook Play feature, and variables that controlled the UI for new experiments.
                        </p>
                        <p className={paragraph}>
                            I then created tickets in Jira for all these tasks and rallied the team to contribute to this
                            improvement by explaining how other teams at Indeed could then easily preview and test our
                            product to determine if it could be imported and surfaced within their respective products,
                            therefore increasing the added value of our product.
                        </p>
                    </article>
                </section>
                <section className={section}>
                    <Image
                        className={image}
                        src="/images/indeed/scheduling-chromatic-diff@2x.webp"
                        alt="Chromatic interface showing diffs in the scheduling modal"
                        width={800}
                        height={600}
                    />
                    <article>
                        <h2 className={sectionTitle}>Testing the UI with Chromatic</h2>
                        <p className={paragraph}>
                            I&apos;m also a strong advocate for development tools that can help automate certain tasks, such
                            as tests, so when I heard that another team at Indeed implemented Chromatic, which
                            eliminates the need for manual visual regression testing, I jumped at the chance to
                            integrate that for my team.
                        </p>
                        <p className={paragraph}>
                            Collaborating with the UX Dev who had already installed it for his team, I was able
                            to get it up and running fairly easily within my team&apos;s GitLab pipeline. Afterwards, I gave
                            the rest of the team a rundown on how it worked, and how to inspect visual diffs and accept
                            or reject them.
                        </p>
                        <p className={paragraph}>
                            Installing Chromatic was a definite win for our product, since it sped up our deployments,
                            and even the team&apos;s UX Designer was thankful for the proactive work I put in to help keep
                            our UI looking great.
                        </p>
                    </article>
                </section>
            </div>
        </div>
    )
}