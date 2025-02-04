import styles from "./Header.module.css"


export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img style={{width:50}} src="./ logo.png" alt="tiyn" />
          <span className={styles.tiynuz}>Tiyn</span>
        </div>

        <nav className={styles.nav}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#new-arrival">New Arrival</a>
          <a href="#sale">Sale</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className={styles.specialBtn}>Special Collection</button>
      </div>
    </header>
  )
}

