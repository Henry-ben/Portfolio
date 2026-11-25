import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import '../css/backToTop.css'

function BackToTop() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 300)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    if (!visible) return null

    return (
        <button
            className="back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
        >
            <ArrowUp size={22} />
        </button>
    )
}

export default BackToTop