import '../css/footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">

                <p>
                    © {new Date().getFullYear()} Ugwoegbu Chidera.
                    All rights reserved.
                </p>

                <div className="footer-links">
                    <a
                        href="https://github.com/Henry-ben"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://www.linkedin.com/in/henry-benedict-106278219/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>
                </div>

            </div>
        </footer>
    )
}

export default Footer