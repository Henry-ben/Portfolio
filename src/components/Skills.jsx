import { useEffect, useRef } from 'react';
import '../css/skill.css';

function Skills() {
    const skillsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('skills-visible');
                }else{
                    entry.target.classList.remove('skills-visible')
                }
            },
            {
                threshold: 0.2,
                rootMargin: "0px 0px -100px 0px"
            }
        );

        if (skillsRef.current) {
            observer.observe(skillsRef.current);
        }

        return () => observer.disconnect();
    }, []);
    return (
        <section id="skills" ref={skillsRef}>
            <div className="skills-container">

                <div className="skills-heading">
                    <p>MY TECHNICAL TOOLKIT</p>

                    <h2>
                        Skills & <span>Technologies</span>
                    </h2>

                    <span>
                        The tools and technologies I use to
                        transform ideas into working applications.
                    </span>
                </div>

                <div className="skills-content">

                    <div className="skill-group">
                        <div className="skill-top">
                            <span className="skill-number">01</span>
                            <span className="skill-type">INTERFACES</span>
                        </div>

                        <h3>Frontend Development</h3>

                        <p className="skill-description">
                            Building responsive, interactive and
                            user-friendly interfaces for the web.
                        </p>

                        <div className="skill-list">
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>JavaScript</span>
                            <span>React</span>
                            <span>Vite</span>
                        </div>
                    </div>

                    <div className="skill-group">
                        <div className="skill-top">
                            <span className="skill-number">02</span>
                            <span className="skill-type">SERVER SIDE</span>
                        </div>

                        <h3>Backend Development</h3>

                        <p className="skill-description">
                            Developing server-side functionality,
                            application logic and REST APIs.
                        </p>

                        <div className="skill-list">
                            <span>Node.js</span>
                            <span>Express.js</span>
                            <span>REST APIs</span>
                        </div>
                    </div>

                    <div className="skill-group">
                        <div className="skill-top">
                            <span className="skill-number">03</span>
                            <span className="skill-type">DATA & WORKFLOW</span>
                        </div>

                        <h3>Database & Tools</h3>

                        <p className="skill-description">
                            Managing application data and
                            maintaining an organized development workflow.
                        </p>

                        <div className="skill-list">
                            <span>PostgreSQL</span>
                            <span>Supabase</span>
                            <span>Git</span>
                            <span>GitHub</span>
                        </div>
                    </div>

                </div>

                <div className="skills-footer">
                    <span className="skills-footer-line"></span>
                    <p>LEARNING, BUILDING & IMPROVING EVERY DAY</p>
                </div>

            </div>
        </section>
    )
}

export default Skills
