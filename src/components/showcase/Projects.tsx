import React from 'react';
import ResumeDownload from './ResumeDownload';
import VideoAsset from '../general/VideoAsset';
// @ts-ignore
import computer from '../../assets/pictures/projects/software/computer.mp4';
// @ts-ignore
import soar from '../../assets/pictures/projects/software/soar.mp4';
// @ts-ignore
import ecommerce from '../../assets/pictures/projects/software/Ecommerce.mp4';


export interface ProjectsProps { }

const Projects: React.FC<ProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Software</h1>
            <h3>Projects</h3>
            <br />
            <p>
                Below are some of my favorite software projects I have worked on
                over the last few years. Enjoy!
            </p>
            <br />
            <ResumeDownload />
            <br />
            <div className="text-block">
                <h2>SOAR Platform</h2>
                <br />
                <p>
                    The SOAR Platform is a full-stack Django web application built to simplify
                    and automate the incident management process. Designed with efficiency in mind,
                    it offers an integrated ticketing system that streamlines alert handling and incident
                    response workflows. By connecting with various security tools, the platform enables
                    comprehensive automation, helping security teams respond to threats faster and more
                    effectively. The entire system is containerized and deployed using Docker Compose for
                    easy setup and scalability.
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={soar} />
                    <div style={styles.caption}>
                        <p>
                            <sub>
                                <b>Figure 1: </b> Unified SOC Platform
                                demo showcasing the SOAR Platform's incident management interface.
                            </sub>
                        </p>
                    </div>
                </div>
                <p>

                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/yassine-chihi/SOC-PFE-Project"
                        >
                            <p>
                                <b>[GitHub]</b> - Unified SOC Platform Repository
                            </p>
                        </a>
                    </li>
                </ul>
                <p>
                    Unfortunately, the platform is currently not in a releasable
                    state and so there is no demo available online.
                </p>
            </div>
            <div className="text-block">
                <h2>AudioHeaven</h2>
                <br />
                <p>
                    AudioHeaven is a modern e-commerce platform built with Next.js and Sanity CMS,
                    offering a seamless shopping experience for audio equipment enthusiasts.
                    The platform features a responsive design with dynamic product listings,
                    real-time cart management, and secure payment processing through Stripe integration.
                    Users can browse through a curated collection of high-quality audio products,
                    from headphones to speakers, with detailed product descriptions and images.
                    The application implements a clean, user-friendly interface with features like
                    product filtering, search functionality, and a persistent shopping cart.
                    Built with scalability in mind, AudioHeaven demonstrates modern web development
                    practices and provides a solid foundation for an online audio equipment marketplace.
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={ecommerce} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 2:</b> AudioHeaven e-commerce platform demo showcasing the product browsing and shopping cart functionality.
                        </sub>
                    </p>
                </div>
                <p>
                    AudioHeaven is open source and available on GitHub. While it's a relatively straightforward
                    e-commerce platform, it was an enjoyable project to build and explore modern web development
                    practices. I wanted to showcase it since it demonstrates my ability to create full-stack
                    applications with real-world features like payment processing and content management.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/yassine-chihi/Ecommerce"
                        >
                            <p>
                                <b>[GitHub]</b> - AudioHeaven Ecommerce
                            </p>
                        </a>
                    </li>
                </ul>
                <p>
                    If you're interested in exploring the codebase or want to learn more about 
                    the implementation details, feel free to check out the GitHub repository. 
                    The project demonstrates modern e-commerce practices and could serve as a 
                    helpful reference for building similar applications.
                </p>
            </div>
            <div className="text-block">
                <h2>Personal Website Custom OS</h2>
                <br />
                <p>
                    This website serves as a custom operating system for my portfolio, and it is also the
                    website you are on right now. This project was an absolute
                    joy to make and challenged me both technically and
                    creatively. Early in 2025, I knew I wanted to make an
                    interactive portfolio to aid my job search. I eventually got
                    the idea for this site around early February and began
                    development early March.
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={computer} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 3:</b> Blender Scene of the 3D website.
                            The scene from Blender was baked and exported in a
                            GLTF format.
                        </sub>
                    </p>
                </div>
                <p>
                    Now, a quick technical breakdown of the site. The website is
                    split into two parts, the 3D site, and the 2D OS site. The
                    3D site uses Three.js to render the scene and renders the 2D
                    site inside of it using an iframe. The 2D OS site is a
                    simple react site that is hosted{' '}
                    {/* <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://henryheffernan.vercel.app/"
                    >
                        here
                    </a>{' '} */}
                    and works as a standalone web app. The actual rendering of
                    the 2D site is accomplished using a CSS renderer provided by
                    Three.js that transforms the html of the 2D site with 3D CSS
                    transforms to give the illusion of three dimensionality.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    {/* <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://henryheffernan.com"
                        >
                            <p>
                                <b>[3D Site]</b> - henryheffernan.com
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://henryheffernan.vercel.app/"
                        >
                            <p>
                                <b>[OS Site]</b> - henryheffernan.vercel.app
                            </p>
                        </a>
                    </li> */}
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/yassine-chihi/portfolio-website"
                        >
                            <p>
                                <b>[GitHub]</b> - 3D Site Repository
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/yassine-chihi/portfolio-inner-site"
                        >
                            <p>
                                <b>[GitHub]</b> - OS Site Repository
                            </p>
                        </a>
                    </li>
                </ul>
                <p>
                    I'm skipping over a lot of details in exchange for brevity,
                    but I do plan on doing a more in depth breakdown for those
                    interested sometime in the future. To get updates with that
                    project feel free to connect me on Linkedin{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.linkedin.com/in/yassine-chihi-b440a31a1/"
                    >
                        yassine-chihi
                    </a>
                </p>
            </div>
            <ResumeDownload />
        </div>
    );
};

const styles: StyleSheetCSS = {
    video: {
        width: '100%',
        padding: 12,
    },
    caption: {
        width: '80%',
        marginTop: '1rem'
    },
    soar_demo: {
        marginLeft: '15rem'
    }
};

export default Projects;
