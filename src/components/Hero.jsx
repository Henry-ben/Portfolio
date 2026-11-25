
import '../css/hero.css'



function Hero() {
    return (
        <section id="home">
            <div className="hero-content">

                <p className="hero-intro">
                    HELLO, I'M UGWOEGBU CHIDERA
                </p>

                <p className='hero-role'> 
                    FULL-STACK DEVELOPER
                </p>

                <h1>
                    Building modern web applications that help people solve real problems from frontend to backend.
                </h1>

                <p className="hero-description">
                    I'm a Full-Stack Developer passionate
                    about building useful, responsive and
                    user-friendly web applications.
                </p>

                <div className="hero-buttons">
                    <a href="#projects">
                        View My Work
                    </a>

                    <a href="#contact">
                        Contact Me
                    </a>
                </div>

            </div>
        </section>
    )
}

export default Hero
