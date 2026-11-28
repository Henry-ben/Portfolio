import { useEffect, useRef } from 'react'
import '../css/about.css'

function About() {

    const aboutRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('about-visible');
                }else{
                    entry.target.classList.remove('about-visible')
                }
            },
            {
                threshold: 0.2,
                rootMargin: "0px 0px -100px 0px"
            }
        );

        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }

        return () => observer.disconnect();
    }, []);



    return (
        <section id="about" ref={aboutRef}>
            <div className="about-container">

                <div className="about-intro">

                    <p className="about-label">
                        GET TO KNOW ME
                    </p>

                    <h2>
                        More than just
                        <span> writing code.</span>
                    </h2>

                    <p className="about-tagline">
                        A curious mind, a problem solver
                        and a developer who enjoys turning
                        ideas into reality.
                    </p>

                    <div className="about-years">
                        <strong>04</strong>

                        <div>
                            <span>YEARS OF</span>
                            <p>Learning & Building</p>
                        </div>
                    </div>

                </div>

                <div className="about-details">

                    <div className="about-story">
                        <span className="about-number">01 / MY JOURNEY</span>

                        <p>
                            Hi, I'm Ugwoegbu Chidera. My journey into
                            development started with curiosity about
                            how websites and applications work.
                            Over the past four years, I've been learning,
                            experimenting and building projects that
                            have helped me grow as a developer.
                        </p>
                    </div>

                    <div className="about-story">
                        <span className="about-number">02 / WHAT I DO</span>

                        <p>
                            I work with HTML, CSS, JavaScript, React,
                            Node.js, Express and PostgreSQL to build
                            applications that connect frontend
                            experiences with backend functionality.
                            I enjoy breaking complex problems into
                            smaller steps and finding practical solutions.
                        </p>
                    </div>

                    <div className="about-story">
                        <span className="about-number">03 / HOW I GROW</span>

                        <p>
                            I've also had opportunities to work with
                            other people, learning the value of
                            communication, collaboration and different
                            perspectives. I'm always looking for
                            opportunities to improve my skills,
                            contribute to meaningful projects and
                            become a better developer.
                        </p>
                    </div>

                    <div className="about-technologies">
                        <span>TECHNOLOGIES I WORK WITH</span>

                        <div className="about-tech-list">
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>JavaScript</span>
                            <span>React</span>
                            <span>Node.js</span>
                            <span>Express</span>
                            <span>PostgreSQL</span>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default About
