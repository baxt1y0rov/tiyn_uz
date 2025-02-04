import styles from "./Categories.module.css"

export default function Categories() {
  const categories = [
    { name: "Furniture", image: "/furniture.png" },
    { name: "Hand Bag", image: "/handbag.png" },
    { name: "Sneakers", image: "/sneakers.png" },
    { name: "Gadgets", image: "/gadgets.png" },
  ]

  return (
    <section className={styles.categories}>
      <h2>Shop Our Top Categories</h2>
      <div className={styles.grid}>
        {categories.map((category, index) => (
          <div key={index} className={styles.category}>
            <img src={category.image || "/placeholder.svg"} alt={category.name} />
            <h3>{category.name}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

