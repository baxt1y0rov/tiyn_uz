import { useState, useEffect } from "react"
import styles from "./Header.module.css"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "visible"
    }

    return () => {
      document.body.style.overflow = "visible"
    }
  }, [isMenuOpen])

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img style={{ width: 50 }} src="./ logo.png" alt="tiyn" />
          <span className={styles.tiynuz}>Tiyn</span>
        </div>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ""}`}>
          <a href="#home" onClick={toggleMenu}>
            Home
          </a>
          <a href="#about" onClick={toggleMenu}>
            About
          </a>
          <a href="#new-arrival" onClick={toggleMenu}>
            New Arrival
          </a>
          <a href="#sale" onClick={toggleMenu}>
            Sale
          </a>
          <a href="#blog" onClick={toggleMenu}>
            Blog
          </a>
          <a href="#contact" onClick={toggleMenu}>
            Contact
          </a>
          <button className={styles.specialBtn} onClick={toggleMenu}>
            Special Collection
          </button>
        </nav>

        <button className={`${styles.menuToggle} ${isMenuOpen ? styles.open : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

