import styles from "./ProductPromo.module.css"

export default function ProductPromo() {
  return (
    <section className={styles.promo}>
      <div className={styles.content}>
        <h2>Categories</h2>
        <h3>Enhance Your Music Experience</h3>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span>23</span>
            <span>Hours</span>
          </div>
          <div className={styles.stat}>
            <span>05</span>
            <span>Days</span>
          </div>
          <div className={styles.stat}>
            <span>59</span>
            <span>Minutes</span>
          </div>
          <div className={styles.stat}>
            <span>59</span>
            <span>secs</span>
          </div>
        </div>
      </div>
      <div className={styles.image}>
        <img src="/speaker.png" alt="Bluetooth Speaker" />
      </div>
        <button className={styles.buyBtn}>Buy Now!</button>
    </section>
  )
}

