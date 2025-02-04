import styles from "./NewArrivals.module.css"

export default function NewArrivals() {
  const products = [
    {
      name: "Mini wireless Earphone",
      rating: 5,
      price: "$29.99",
      image: "/gadgets.png",
    },
    {
      name: "Mini wireless Earphone",
      rating: 5,
      price: "$34.99",
      image: "/gadgets.png",
    },
    {
      name: "Mini wireless Earphone",
      rating: 4,
      price: "$24.99",
      image: "/gadgets.png",
    },
    {
      name: "Mini wireless Earphone",
      rating: 5,
      price: "$39.99",
      image: "/gadgets.png",
    },
  ]

  return (
    <section className={styles.arrivals}>
      <div className={styles.header}>
        <h2>Explore New Arrivals</h2>
        <div className={styles.controls}>
          <button>&lt;</button>
          <button>&gt;</button>
        </div>
      </div>
      <div className={styles.grid}>
        {products.map((product, index) => (
          <div key={index} className={styles.product}>
            <img src={product.image || "/placeholder.svg"} alt={product.name} />
            <div className={styles.info}>
              <h3>{product.name}</h3>
              <div className={styles.rating}>
                {"★".repeat(product.rating)}
                {"☆".repeat(5 - product.rating)}
              </div>
              <p className={styles.price}>{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

