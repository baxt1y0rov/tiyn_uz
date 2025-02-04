import Header from "./components/Header"
import Hero from "./components/Hero"
import Stats from "./components/Stats"
import Categories from "./components/Categories"
import ProductPromo from "./components/ProductPromo"
import NewArrivals from "./components/NewArrivals"
import PromoBanners from "./components/PromoBanners"
import Footer from "./components/Footer"
import "./App.css"

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <main>
        <Stats />
        <Categories />
        <ProductPromo />
        <NewArrivals />
        <PromoBanners />
      </main>
      <Footer />
    </div>
  )
}

export default App

