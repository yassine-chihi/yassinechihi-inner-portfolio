import React from 'react';
import ResumeDownload from './ResumeDownload';
import VideoAsset from '../general/VideoAsset';
// @ts-ignore
import computer from '../../assets/pictures/projects/software/computer.mp4';
// @ts-ignore
import saga from '../../assets/pictures/projects/software/saga.mp4';
// @ts-ignore
import scroll from '../../assets/pictures/projects/software/scroll.mp4';


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
                    <VideoAsset src={saga} />
                    <div style={styles.caption}>
                        <p>
                            <sub>
                                <b>Figure 2: </b> Guntattchment Saga Gameplay
                                demo, featuring the main character along with a
                                few of our grunt and dasher enemies.
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
                            href="https://github.com/scottbass47/gsts"
                        >
                            <p>
                                <b>[GitHub]</b> - Guntattchment Saga The Sequel
                                Unity Repository
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/henryjeff/gsts_assets"
                        >
                            <p>
                                <b>[GitHub]</b> - Guntattchment Saga The Sequel
                                Assets Repository
                            </p>
                        </a>
                    </li>
                </ul>
                <p>
                    Unfortunately, the game currently is not in a releasable
                    state and so there is no demo available online. If this ever
                    changes, however, a link to the game will be added here.
                </p>
            </div>
            <div className="text-block">
                <h2>Skip the Scroll</h2>
                <br />
                <p>
                    While working at Hover, I spent a lot of time on GitHub
                    issue pages looking for answers and solutions to problems I
                    had run into. I would always find myself sifting though the
                    comments trying to find the right answer, which usually had
                    the most upvotes and positive reactions. With that
                    information, I decided to create a very simple chrome
                    extension that would sift through all the comments on the
                    page, sort them by positive reactions, and then allow you to
                    traverse them from most positive reactions to least positive
                    reactions.
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={scroll} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 3:</b> Skip the Scroll in action, finding
                            the highest rated comments and scrolling right to
                            them
                        </sub>
                    </p>
                </div>
                <p>
                    The extension is open source and currently released on the
                    Chrome web store. Skip the Scroll is obviously not a project
                    with massive scope, but was fun to make and dive into the
                    world of browser extensions. I wanted to showcase since it's
                    a developer tool and I wanna give it some visibility for
                    those who might find it useful.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/henryjeff/skip-the-scroll"
                        >
                            <p>
                                <b>[GitHub]</b> - Skip the Scroll Repository
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://chrome.google.com/webstore/detail/skip-the-scroll/mfehannpjmgfagldoilpngeoecdfgmnd"
                        >
                            <p>
                                <b>[Chrome Web Store]</b> - Skip the Scroll
                            </p>
                        </a>
                    </li>
                </ul>
                <p>
                    If you are a developer and have also found yourself
                    scrolling through github comment after github comment saying
                    "i also have this problem...", then I highly recommend you
                    check out Skip the Scroll to save you some of your precious
                    time. If you like it, feel free to star it on GitHub and
                    rate it on the Chrome web store.
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
                            <b>Figure 1:</b> Blender Scene of the 3D website.
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
    },
};

export default Projects;
