import styles from "./PromoBanners.module.css"

export default function PromoBanners() {
  return (
    <section className={styles.banners}>
      <div className={styles.banner}>
        <div className={styles.content}>
          <span>Smart Watch</span>
          <h3>The Best Smart Watch Under Budget</h3>
          <button>Shop Now</button>
        </div>
        <img src="/smartwatch.png" alt="Smart Watch" />
      </div>

      <div className={styles.banner}>
        <div className={styles.content}>
          <span>Trending Now</span>
          <h3>Meer Your New Trending Furniture Design</h3>
          <button>Read Now</button>
        </div>
        <img src="/furniture.png" alt="Furniture" />
      </div>
    </section>
  )
}

