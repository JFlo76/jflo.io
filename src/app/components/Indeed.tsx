'use client'
import Image from 'next/image';
import { robotoCondensed } from '@/app/fonts'

// Tailwind class objects
const container = 'w-full flex flex-col items-center';
const innerContainer = 'flex flex-col px-4 lg:px-20 text-lg container';
const header = 'flex flex-col w-full mt-4 mb-4 lg:mt-16 lg:mb-16';
const mainTitle = `text-6xl font-bold mb-2 uppercase ${robotoCondensed.className}`;
const section = 'flex flex-col lg:flex-row lg:items-start w-full mb-8 lg:mb-16';
const image = 'mb-4 lg:mr-8 rounded-lg lg:max-w-[50%] object-contain aspect-auto';
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
                <section className={section}>
                    <video
                        className="mb-4 lg:mr-8 rounded-lg lg:max-w-[50%] object-contain aspect-auto"
                        controls
                        src="/videos/UpcomingInterviews.mov"
                    >
                        Your browser does not support the video tag.
                    </video>
                    <article>
                        <h2 className={sectionTitle}>Feature: Upcoming Interviews</h2>
                        <p className={paragraph}>
                            One feature I implemented for the Interview Scheduling team was designed to prevent users from double booking interviews. While the person scheduling the interview is selecting dates and times, if there is an existing interview for a selected date, the UI will update to show a notification informing the user that they have one or more interviews already set up for that day. The user can then expand the notification to view the details about the other interviews, including dates, times, type of interview, name of the candidate, and whether the interview is confirmed by the candidate or not.
                        </p>
                        <p className={paragraph}>
                            In order to implement this feature, the data needed to come from another team who owned a product that handled an employer’s full list of interviews. I reached out to a fellow UX Developer on that team to get information about how I might pull in their data and components into our product, and after some research and collaboration, it was apparent that both product repos would need some implemented logic to make the new feature work.
                        </p>
                    </article>
                </section>



                <section className={`${section} lg:flex-col lg:max-w-[60%] mx-auto`}>
                    <article className="w-full">
                        <p className={paragraph}>
                            The first step involved me jumping into the other team’s codebase to prepare some of their components as federated remote modules that I could then import into my team’s product. This was done within their webpack.config.js file, similar to the following example…
                        </p>
                        <pre
                            className="mb-4 rounded-lg w-[100%] object-contain aspect-auto bg-gray-300 text-gray-800 p-4 overflow-x-auto"
                        >
                            <code>
                                {/* Don't indent... throws off formatting in browser */}
                                {`plugins: [
    ...baseConfig.plugins,
    new webpack.container.ModuleFederationPlugin({
        ...pluginConfigs.moduleFederationPlugin,
        exposes: {
            './InterviewList': './src/externalModules/InterviewList'
        }
    })
],`}
                            </code>
                        </pre>
                    </article>
                </section>

                <section className={`${section} lg:flex-col lg:max-w-[60%] mx-auto`}>
                    <article className='w-full'>
                        <p className={paragraph}>
                            Indeed’s core platform team had recently implemented a reusable component for using remote modules, so I took advantage of their <code>RemoteModule</code> component in order to render the other team’s product, passing in the required props that was imported as node packages…

                        </p>
                        <pre
                            className="mb-4 rounded-lg w-[100%] object-contain aspect-auto bg-gray-300 text-gray-800 p-4 overflow-x-auto"
                        >
                            <code>
                                {/* Don't indent... throws off formatting in browser */}
                                {`import Drawer from '@indeed/ipl-drawer';
import { RemoteModule } from '@indeed/one-host-remote-module';

...additional imports...

const UpcomingInterviews = (props: UpcomingInterviewsProps): JSX.Element => {

    ...additional code...

    const RenderRemoteModule = (): JSX.Element => {{
        return (
            <RemoteModule
                scope="interviews-tab"
                module="./InterviewList"
                moduleProps={{
                    interviewCards: upcomingCardInterviews
                }}
            />
        );
    }};

    return (
        <Drawer
            label={npgettext(
                'interviews count message', // message context
                'You have {{1}} interview on {{0}}', // singular msg
                'You have {{1}} interviews on {{0}}', // plural msg
                upcomingCardInterviewsLength, // value to determine singular vs plural
                [\`\${headingMonth} \${headingDay}\`, String(upcomingCardInterviewsLength)] // arguments for the translation
            )}
            isOpen={{isDrawerOpen}}
            onClick={{handleDrawerToggle}}
            sx={{ marginBlockStart: [2, null, 4], '& button': {{ fontWeight: 'normal' }} }}
            data-testid="UpcomingInterviewDrawer"
        >
            <RenderRemoteModule />
        </Drawer>
    );
};

export const UpcomingInterviewsList = React.memo(UpcomingInterviews);`}
                            </code>
                        </pre>
                        <p className={paragraph}>
                            The new feature was rolled out to a percentage of US customers, and when the feature showed a decrease of double bookings, it was promoted to all locales.
                        </p>
                    </article>

                </section>

            </div>
        </div>
    )
}