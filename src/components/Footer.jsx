import { useEffect, useRef } from 'react'
import '../css/footer.css'

function Footer() {

    const footerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('footer-visible');
                } else {
                    entry.target.classList.remove('footer-visible');
                }
            },
            { threshold: 0 }
        );

        if (footerRef.current) {
            observer.observe(footerRef.current);
        }

        return () => observer.disconnect();
    }, []);
    return (
        <footer className="footer" ref={footerRef}>

            <div className="footer-container">

                <div className="footer-top">

                    <div className="footer-brand">
                        <div className="footer-logo">
                            UC<span>.</span>
                        </div>

                        <div>
                            <h3>Ugwoegbu Chidera</h3>
                            <p>Full-Stack Developer</p>
                        </div>
                    </div>

                    <div className="footer-navigation">
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#skills">Skills</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>
                    </div>

                    <div className="footer-socials">
                        <a
                            href="https://github.com/Henry-ben"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub ↗
                        </a>

                        <a
                            href="https://www.linkedin.com/in/henry-benedict-106278219/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn ↗
                        </a>
                    </div>

                </div>

                <div className="footer-bottom">
                    <p>
                        © {new Date().getFullYear()} Ugwoegbu Chidera.
                        All rights reserved.
                    </p>

                    <p>Designed & Built with React</p>
                </div>

            </div>

        </footer>
    )
}

export default Footer
