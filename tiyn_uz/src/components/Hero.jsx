import styles from "./Hero.module.css"
import { FaSearch } from "react-icons/fa";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.herotext}>
          <span>Save big on</span>
          <span className={styles.highlight}>latest fashion trends</span>
          <span>with hundreds of top deals.</span>
        </h1>
        <button className={styles.shopBtn}>Shop Now</button>
        <div className={styles.searchBar}>
          <input type="text" placeholder="Search..." />
          <button style={{fontWeight:650,backgroundColor:'#4a9a47',cursor:"pointer"}} type="submit"><FaSearch style={{fontSize:13}}/></button>
        </div>
      </div>
      <div className={styles.image}>
        <img className={styles.heroimg}
          src="/olimtoy.png"
        />
      </div>
    </section>
  )
}

