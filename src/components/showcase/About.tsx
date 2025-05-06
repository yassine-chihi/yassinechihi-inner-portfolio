import React from 'react';
import me from '../../assets/pictures/meWithComputer.png';
import meNow from '../../assets/pictures/me_25.png';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';

export interface AboutProps { }

const About: React.FC<AboutProps> = (props) => {
    return (
        // add on resize listener
        <div className="site-page-content">
            {/* <img src={me} style={styles.topImage} alt="" /> */}
            <h1 style={{ marginLeft: -16 }}>Welcome</h1>
            <h3>I'm Yassine Chihi</h3>
            <br />
            <div className="text-block">
                <p>
                    I'm a software engineer and cyber-security enthusiast currently working at <i>INSTACODIN</i> ! 
                    I earned my degree in Software Engineering from ISSATSo, which is part of the University of Sousse, in October 2024.
                </p>
                <br />
                <p>
                    Thank you for taking the time to check out my portfolio. I
                    really hope you enjoy exploring it as much as I enjoyed
                    building it. If you have any questions or comments, feel
                    free to contact me using{' '}
                    <Link to="/contact">this form</Link> or shoot me an email at{' '}
                    <a href="mailto:yassine.chihi20@gmail.com">
                        yassine.chihi20@gmail.com
                    </a>
                </p>
            </div>
            <ResumeDownload />
            <div className="text-block">
                <h3>About Me</h3>
                <br />
                <p>
                    From an early age, I've always been drawn to understanding how 
                    systems work, which naturally led me to tech. Over time, that 
                    curiosity eventually led me into the world of software. Where logic, 
                    creativity, and structure all come together.
                    In university, I joined a cyber-security club where I learned so much 
                    from many people in this field. It was a hands-on, challenge-driven 
                    environment that pushed me to think critically about how systems can 
                    be broken—and more importantly, how they can be secured. That experience 
                    sharpened my attention to detail and taught me to approach development 
                    with a security-first mindset.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={me} style={styles.kidImage} alt="" />
                    <p>
                        <sub>
                            <b>Figure 1:</b> A photo of me developing this
                            website :)
                        </sub>
                    </p>
                </div>

                <p>
                    I started taking programming more seriously in university, 
                    beginning with the basics—learning how to code and interact 
                    with websites and low level languages like C. From there, 
                    I got hooked and started building and breaking all kinds of small 
                    personal projects: chatbots, games, apps, and whatever else sparked my interest at the time. It was all 
                    about experimenting and having fun while learning.
                </p>
                <br />
                <p>
                    In 2019, I got accepted into Higher Institute of Applied Sciences and Technology
                    in Sousse, to study Software Engineering. It was my first choice
                    and I was absolutely thrilled to be going to such a great
                    university. At my final year, I got an internship working for EY Tunisia, as cybersecurity 
                    software engineer, where I was able to apply my knowledge and skills in a real-world setting,
                    by building a real-time Security Orchestration, Automation, and Response (SOAR) platform.
                    You can check out the project on my  {' '}
                    <Link to="/projects/software">Software Projects</Link> page.
                </p>
                <br />
                <br />
                <div style={{}}>
                    <div
                        style={{
                            flex: 1,
                            textAlign: 'justify',
                            alignSelf: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <h3>My Hobbies</h3>
                        <br />
                        <p>
                            Beyond software, I have a lot of hobbies that I
                            enjoy doing in my free time. The most tangible
                            hobbie I have is{' '}
                            <Link to="/projects/ctfs">Playing CTFs</Link>{' '}.
                            You can read more about it on it's respective
                            page under my projects tab. Some other hobbies I
                            enjoy are tennis, gym, cooking and (unsurprisingly)
                            playing video games.
                            
                        </p>
                        <br />
                        <p>
                            College was a really fun and meaningful time for me. 
                            I learned a lot of useful things and grew a lot as a person. 
                            I also met some great people along the way who made those years even better.
                        </p>
                    </div>
                    <div style={styles.verticalImage}>
                        <img src={meNow} style={styles.image} alt="" />
                        <p>
                            <sub>
                                <b>Figure 2:</b> Me, April 2023
                            </sub>
                        </p>
                    </div>
                </div>
                <br />
                <br />
                <p style={styles.footer}>
                    Thanks for reading about me! I hope that you enjoy exploring
                    the rest of my portfolio website and everything it has to
                    offer. If you find the easter egg make sure to let me know
                    on Linkedin{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.linkedin.com/in/yassine-chihi-b440a31a1/"
                    >
                        yassine-chihi
                    </a>{' '}
                    Good luck and have fun!
                </p>
                <br />
                <p>
                    If you have any questions or comments I would love to hear
                    them. You can reach me through the{' '}
                    <Link to="/contact">contact page</Link> or shoot me an email
                    at{' '}
                    <a href="mailto:yassine.chihi20@gmail.com">
                        yassine.chihi20@gmail.com
                    </a>
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    contentHeader: {
        marginBottom: 16,
        fontSize: 48,
    },
    image: {
        marginTop: 20,
        height: 'auto',
        width: '100%',
    },
    kidImage : {
        paddingTop: 10,
        height: '90%',
        width: '90%',
    },
    topImage: {
        height: 'auto',
        width: '100%',
        marginBottom: 32,
    },
    verticalImage: {
        alignSelf: 'center',
        // width: '80%',
        marginLeft: 32,
        flex: 0.8,

        alignItems: 'center',
        // marginBottom: 32,
        textAlign: 'center',
        flexDirection: 'column',
    },
    footer: {
        marginTop: 30
    }
};

export default About;
