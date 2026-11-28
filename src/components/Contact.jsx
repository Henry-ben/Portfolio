import { useEffect, useRef } from 'react'
import '../css/contact.css'

function Contact() {
    const contactRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('contact-visible');
                } else {
                    entry.target.classList.remove('contact-visible');
                }
            },
            {
                threshold: 0.2,
            }
        );

        if (contactRef.current) {
            observer.observe(contactRef.current);
        }

        return () => observer.disconnect();
    }, []);
    return (
        <section id="contact" ref={contactRef}>
            <div className="contact-container">

                <div className="contact-heading">
                    <p>HAVE A PROJECT IN MIND?</p>

                    <h2>
                        Let's build something
                        <span> meaningful.</span>
                    </h2>

                    <div className="contact-intro">
                        I'm always interested in connecting with
                        people, exploring opportunities and working
                        on projects that solve real problems.
                    </div>

                    <div className="contact-status">
                        <span className="status-dot"></span>
                        Open to opportunities and collaboration
                    </div>
                </div>

                <div className="contact-content">

                    <div className="contact-card-top">
                        <span>LET'S CONNECT</span>
                        <span>01 — 03</span>
                    </div>

                    <h3>Have an idea? Let's talk.</h3>

                    <p>
                        Whether it's a project, an opportunity
                        or simply a conversation about technology,
                        my inbox is always open.
                    </p>

                    <div className="contact-links">

                        <a
                            href="mailto:benedicthenry789@gmail.com"
                            className="contact-email"
                        >
                            <span>Email Me</span>
                            <span>↗</span>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/henry-benedict-106278219"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn ↗
                        </a>

                        <a
                            href="https://github.com/Henry-ben"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub ↗
                        </a>

                    </div>

                    <div className="contact-card-footer">
                        UGWOEGBU CHIDERA · FULL-STACK DEVELOPER
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Contact
