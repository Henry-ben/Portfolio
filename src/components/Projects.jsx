
import { useEffect, useRef, useState } from 'react';

import financeImage from '../assets/finance.png';
import sectorImage from '../assets/bookimage.jpg';
import ticketImage from '../assets/ticket.png';

import '../css/projects.css';

function Projects() {
    const projectsRef = useRef(null);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [slideDirection, setSlideDirection] = useState('next');

    const projects = [
        {
            title: "Personal Finance Dashboard",
            category: "01 / FULL-STACK APPLICATION",
            image: financeImage,
            alt: "Personal Finance Dashboard preview",
            description:
                "A full-stack finance application for managing transactions, budgets, savings pots and recurring bills. Built to help users understand and manage their personal finances.",
            technologies: ["React", "Express", "PostgreSQL"],
            live: "https://pfapp-frontend.onrender.com/",
            github: "https://github.com/Henry-ben/PFApp",
        },
        {
            title: "Epp Bookstore",
            category: "02 / E-COMMERCE",
            image: sectorImage,
            alt: "Epp Bookstore preview",
            description:
                "An online bookstore with user authentication, shopping cart, order management and payment integration.",
            technologies: ["React", "Express", "PostgreSQL", "Paystack"],
            live: "https://epp-front.onrender.com/",
            github: "https://github.com/Henry-ben/Bookstore",
        },
        {
            title: "Ticket Generator",
            category: "03 / WEB APPLICATION",
            image: ticketImage,
            alt: "Ticket Generator preview",
            description:
                "A web application that allows users to generate personalized event tickets with a simple and interactive interface.",
            technologies: ["HTML", "CSS", "JavaScript"],
            live: "https://ticket-generator-zw67.onrender.com",
            github: "https://github.com/Henry-ben/ticket-generator",
        },
    ];

    // SCROLL REVEAL
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('projects-visible');
                } else {
                    entry.target.classList.remove('projects-visible');
                }
            },
            {
                threshold: 0.2,
            }
        );

        if (projectsRef.current) {
            observer.observe(projectsRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // NEXT PROJECT
    const nextProject = () => {
        setSlideDirection('next');

        setCurrentIndex((prevIndex) =>
            (prevIndex + 1) % projects.length
        );
    };

    // PREVIOUS PROJECT
    const previousProject = () => {
        setSlideDirection('previous');

        setCurrentIndex((prevIndex) =>
            (prevIndex - 1 + projects.length) % projects.length
        );
    };

    // AUTOMATIC SLIDING
    useEffect(() => {
        const timer = setTimeout(() => {
            setSlideDirection('next');

            setCurrentIndex((prevIndex) =>
                (prevIndex + 1) % projects.length
            );
        }, 5000);

        return () => clearTimeout(timer);
    }, [currentIndex, projects.length]);

    return (
        <section id="projects" ref={projectsRef}>
            <div className="projects-container">

                {/* HEADING */}
                <div className="projects-heading">
                    <p>SELECTED WORK</p>

                    <h2>
                        Things I've <span>Built.</span>
                    </h2>

                    <span>
                        A collection of projects where I've
                        turned ideas into functional applications.
                    </span>
                </div>

                {/* PROJECT SLIDER */}
                <div className="projects-content">
                    <div
                        className={`project-card slide-card ${
                            slideDirection === 'next'
                                ? 'slide-next'
                                : 'slide-previous'
                        }`}
                        key={currentIndex}
                    >
                        <div className="project-image">
                            <img
                                src={projects[currentIndex].image}
                                alt={projects[currentIndex].alt}
                            />
                        </div>

                        <div className="project-info">
                            <div className="project-meta">
                                <span>
                                    {projects[currentIndex].category}
                                </span>
                            </div>

                            <h3>
                                {projects[currentIndex].title}
                            </h3>

                            <p>
                                {projects[currentIndex].description}
                            </p>

                            <div className="project-tech">
                                {projects[currentIndex].technologies.map(
                                    (tech) => (
                                        <span key={tech}>
                                            {tech}
                                        </span>
                                    )
                                )}
                            </div>

                            <div className="project-links">
                                <a
                                    href={projects[currentIndex].live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Live Demo ↗
                                </a>

                                <a
                                    href={projects[currentIndex].github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Source Code ↗
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SLIDER CONTROLS */}
                <div className="projects-controls">
                    <button
                        type="button"
                        onClick={previousProject}
                        aria-label="Previous project"
                    >
                        ←
                    </button>

                    <span>
                        {String(currentIndex + 1).padStart(2, '0')}
                        {' / '}
                        {String(projects.length).padStart(2, '0')}
                    </span>

                    <button
                        type="button"
                        onClick={nextProject}
                        aria-label="Next project"
                    >
                        →
                    </button>
                </div>

                {/* FOOTER */}
                <div className="projects-footer">
                    <span></span>
                    <p>MORE IDEAS. MORE BUILDING. MORE TO COME.</p>
                </div>

            </div>
        </section>
    );
}

export default Projects;
