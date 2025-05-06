import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps { }

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <ResumeDownload />
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>INSTACODIN</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={'https://www.linkedin.com/company/instacodin/'}
                        >
                            <h4>Instacodin</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>DevOps & Backend Engineer</h3>
                        <b>
                            <p>Nov 2024 - Present</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Contributed to building scalable, maintainable backend systems
                    and DevOps infrastructure in a fast-paced startup environment focused
                    on rapid feature delivery.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Deployed and managed services on lightweight Kubernetes (K3s) clusters using
                            Helm charts, leveraging Traefik for smart ingress and load balancing—resulting
                            in smoother traffic handling and easier horizontal scaling.
                        </p>
                    </li>
                    <li>
                        <p>
                            Designed and implemented backend microservices using Node.js, NestJs,
                            Postgres, and SurrealDB, delivering RESTful APIs and real-time communication,
                            supporting growing productrequirements and reducing latency.
                        </p>
                    </li>
                    <li>
                        <p>
                            Boosted system stability and performance through in-depth debugging, code optimization,
                            and comprehensive testing, while improving maintainability through collaborative code
                            reviews and adherence to Agile workflows.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>EY</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://www.ey.com/en_tn'}
                        >
                            <h4>ey.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Cybersecurity Software Engineer</h3>
                        <b>
                            <p>Jun 2023 - Aug 2024</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Delivered secure, automated cybersecurity solutions that enhanced incident response efficiency
                    and improved SOC operations for enterprise environments.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Developed a SOAR platform with Django, integrating CrowdStrike, Splunk, and Microsoft
                            Sentinel to centralize alert triage and streamline case management across security teams.
                        </p>
                    </li>
                    <li>
                        <p>
                            Automated incident response workflows using the Shuffle API, reducing manual intervention
                            and helping cut response times by 40% in internal testing environments.
                        </p>
                    </li>
                    <li>
                        <p>
                            Designed and deployed a containerized SOC solution using Docker Compose in VMware,
                            integrating a robust SIEM stack (ELK, Wazuh, Nessus, Elastalert) and Threat Hunting tools
                            (TheHive, Cortex, MISP), enabling efficient threat detection and forensic analysis.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Cyber-Trace</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://cybertrace.tn/'}
                        >
                            <h4>cybertrace.tn</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Technical Team Leader</h3>
                        <b>
                            <p>Nov 2022, May 2023</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Led technical initiatives to foster hands-on cybersecurity skills and community engagement
                    within an academic setting.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Directed a student team in organizing technical activities, mentoring peers, and building a
                            strong cybersecurity culture within the club.
                        </p>
                    </li>
                    <li>
                        <p>
                            Designed and developed original CTF challenges across multiple domains, including Web
                            Exploitation, Binary Exploitation (PWN), Reverse Engineering, Cryptography, and
                            Miscellaneous.
                        </p>
                    </li>
                    <li>
                        <p>
                            Promoted cybersecurity awareness through on-campus events, workshops, and collaborative
                            projects, increasing student participation and technical engagement.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    skillRow: {
        flex: 1,
        justifyContent: 'space-between',
    },
    skillName: {
        minWidth: 56,
    },
    skill: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
    },
    progressBar: {
        flex: 1,
        background: 'red',
        marginLeft: 8,
        height: 8,
    },
    hoverLogo: {
        height: 32,
        marginBottom: 16,
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    hoverText: {
        marginBottom: 8,
    },
    indent: {
        marginLeft: 24,
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default Experience;
