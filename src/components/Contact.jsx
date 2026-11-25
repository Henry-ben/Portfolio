import '../css/contact.css'

function Contact() {
    return (
        <section id="contact">
            <div className="contact-container">

                <div className="contact-heading">
                    <p>LET'S CONNECT</p>
                    <h2>Get In Touch</h2>
                    <span>
                        Have a project in mind or an opportunity
                        to discuss? I'd love to hear from you.
                    </span>
                </div>

                <div className="contact-content">
                    <h3>Let's work together.</h3>

                    <p>
                        I'm open to opportunities where I can
                        contribute my skills, learn and build
                        meaningful applications.
                    </p>

                    <div className="contact-links">
                        <a
                            href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=benedicthenry789@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Email Me
                        </a>

                        <a
                            href="https://www.linkedin.com/in/henry-benedict-106278219"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn
                        </a>

                        <a
                            href="https://github.com/Henry-ben"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Contact