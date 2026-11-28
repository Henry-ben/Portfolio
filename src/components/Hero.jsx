
import '../css/hero.css'

function Hero() {
    return (
        <section id="home">
            <div className="hero-container">

                <div className="hero-content">

                    <p className="hero-intro">
                        HELLO, I'M UGWOEGBU CHIDERA
                    </p>

                    <p className="hero-role">
                        FULL-STACK DEVELOPER
                    </p>

                    <h1>
                        I build digital experiences
                        that <span>make a difference.</span>
                    </h1>

                    <p className="hero-description">
                        I turn ideas into functional, modern
                        web applications using React,
                        JavaScript, Node.js and PostgreSQL.
                    </p>

                    <div className="hero-buttons">
                        <a href="#projects">
                            Explore My Work
                        </a>

                        <a href="#contact">
                            Let's Talk
                        </a>
                    </div>

                    <div className="hero-note">
                        <span className="hero-status"></span>
                        Always learning. Always building.
                    </div>

                </div>

                <div className="hero-visual">

                    <div className="visual-glow"></div>

                    <div className="visual-card main-visual">

                        <div className="visual-top">
                            <div className="visual-dots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                            <p>MY WORKSPACE</p>
                        </div>

                        <div className="visual-body">

                            <div className="visual-label">
                                FEATURED PROJECT
                            </div>

                            <h3>Finance Dashboard</h3>

                            <p>
                                Manage money. Track progress.
                                Build better habits.
                            </p>

                            <div className="visual-stats">
                                <div>
                                    <span>01</span>
                                    <p>Transactions</p>
                                </div>

                                <div>
                                    <span>02</span>
                                    <p>Budgets</p>
                                </div>

                                <div>
                                    <span>03</span>
                                    <p>Savings</p>
                                </div>
                            </div>

                            <div className="visual-progress">
                                <span></span>
                            </div>

                            <div className="visual-footer">
                                <span>REACT</span>
                                <span>NODE.JS</span>
                                <span>POSTGRESQL</span>
                            </div>

                        </div>

                    </div>

                    <div className="floating-card floating-top">
                        <span className="floating-icon">{"</>"}</span>
                        <div>
                            <strong>Frontend</strong>
                            <p>React · JavaScript</p>
                        </div>
                    </div>

                    <div className="floating-card floating-bottom">
                        <span className="floating-icon">{"{ }"}</span>
                        <div>
                            <strong>Backend</strong>
                            <p>Node.js · PostgreSQL</p>
                        </div>
                    </div>

                    <div className="visual-caption">
                        <span></span>
                        BUILDING FROM FRONTEND TO BACKEND
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Hero
