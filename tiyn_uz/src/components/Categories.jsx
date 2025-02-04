import styles from "./Categories.module.css"

export default function Categories() {
  const categories = [
    { name: "Furniture", image: "/furniture.jpg" },
    { name: "Hand Bag", image: "/handbag.jpg" },
    { name: "Sneakers", image: "/sneakers.jpg" },
    { name: "Gadgets", image: "/gadgets.jpg" },
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

