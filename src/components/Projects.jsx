import financeImage from '../assets/finance.png'
import sectorImage from '../assets/bookimage.jpg'
import ticketImage from '../assets/ticket.png'

import '../css/projects.css'


function Projects() {
    return (
        <section id="projects">
            <div className="projects-container">

                <div className="projects-heading">
                    <p>MY RECENT WORK</p>
                    <h2>Featured Projects</h2>
                    <span>
                        Some of the applications I've built
                        using modern web technologies.
                    </span>
                </div>

                <div className="projects-content">

                    <div className="project-card">
                        <div className="project-image">
                            <img src={ticketImage} alt="Ticket Generator" />
                        </div>

                        <div className="project-info">
                            <h3>Ticket Generator</h3>

                            <p>
                                A web application that allows users to generate
                                personalized event tickets with a simple and
                                interactive interface.
                            </p>

                            <div className="project-tech">
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>JavaScript</span>
                            </div>

                            <div className="project-links">
                                <a
                                    href="https://ticket-generator-zw67.onrender.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Live Demo
                                </a>

                                <a
                                    href="https://github.com/Henry-ben/ticket-generator"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Source
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="project-card">
                        <div className="project-image">
                            <img src={financeImage} alt=" Finance Dashboard" />
                        </div>

                        <div className="project-info">
                            <h3>Personal Finance Dashboard</h3>

                            <p>
                                A full-stack finance application
                                for managing transactions, budgets,
                                savings pots and recurring bills.
                            </p>

                            <div className="project-tech">
                                <span>React</span>
                                <span>Express</span>
                                <span>PostgreSQL</span>
                            </div>

                            <div className="project-links">
                                <a
                                    href="https://pfapp-frontend.onrender.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Live Demo
                                </a>

                                <a
                                    href="https://github.com/Henry-ben/PFApp.git"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Source
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="project-card">
                        <div className="project-image">
                            <img src={sectorImage} alt="SECTOR Bookstore" />
                        </div>

                        <div className="project-info">
                            <h3>Epp Bookstore</h3>

                            <p>
                                An online bookstore with user
                                authentication, shopping cart,
                                order management and payment
                                integration.
                            </p>

                            <div className="project-tech">
                                <span>React</span>
                                <span>Express</span>
                                <span>PostgreSQL</span>
                                <span>Paystack</span>
                            </div>

                            <div className="project-links">
                                <a
                                    href="https://epp-front.onrender.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Live Demo
                                </a>

                                <a
                                    href="https://github.com/Henry-ben/Bookstore.git"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Source
                                </a>
                            </div>
                            
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Projects
