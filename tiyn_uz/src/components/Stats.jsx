import styles from "./Stats.module.css"

export default function Stats() {
  const stats = [
    { number: "200+", text: "International Brands" },
    { number: "2000+", text: "High Quality Products" },
    { number: "30000+", text: "Happy Customers" },
  ]

  return (
    <section className={styles.stats}>
      {stats.map((stat, index) => (
        <div key={index} className={styles.stat}>
          <h3>{stat.number}</h3>
          <p>{stat.text}</p>
        </div>
      ))}
    </section>
  )
}

