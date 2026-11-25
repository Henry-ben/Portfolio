
import '../css/skill.css'

function Skills() {
    return (
        <section id="skills">
            <div className="skills-container">

                <div className="skills-heading">
                    <p>WHAT I WORK WITH</p>
                    <h2>My Skills</h2>
                    <span>
                        Technologies and tools I use to build
                        web applications.
                    </span>
                </div>

                <div className="skills-content">

                    <div className="skill-group">
                        <h3>Frontend Development</h3>
                        <div className="skill-list">
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>JavaScript</span>
                            <span>React</span>
                            <span>Vite</span>
                        </div>
                    </div>

                    <div className="skill-group">
                        <h3>Backend Development</h3>
                        <div className="skill-list">
                            <span>Node.js</span>
                            <span>Express.js</span>
                            <span>REST APIs</span>
                        </div>
                    </div>

                    <div className="skill-group">
                        <h3>Database & Tools</h3>
                        <div className="skill-list">
                            <span>PostgreSQL</span>
                            <span>Supabase</span>
                            <span>Git</span>
                            <span>GitHub</span>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Skills
