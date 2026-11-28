import { useEffect, useState } from 'react';
import '../css/navbar.css';

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen , setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
            <div className="nav-logo">
                Ugwoegbu <span>Chidera.</span>
            </div>

            <button
                className="menu-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation"
                aria-expanded={menuOpen}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <ul className={menuOpen ? 'nav-links active' :'nav-links'}>
                <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
                <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
                <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
                <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
                <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;