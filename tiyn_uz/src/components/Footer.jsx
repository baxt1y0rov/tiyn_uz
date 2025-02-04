import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.service}>
            <img src="/delivery-icon.svg" alt="Delivery" />
            <h4>Free And Fast Delivery</h4>
            <p>Free delivery for all orders over $140</p>
          </div>
          <div className={styles.service}>
            <img src="/support-icon.svg" alt="Support" />
            <h4>24/7 Customer Service</h4>
            <p>Friendly 24/7 Customer Support</p>
          </div>
          <div className={styles.service}>
            <img src="/guarantee-icon.svg" alt="Guarantee" />
            <h4>Money Back Guarantee</h4>
            <p>We Return Money Within 30 Days</p>
          </div>
        </div>

        <div className={styles.main}>
          <div className={styles.company}>
            <h3>VirtualMall</h3>
            <p>Subscribe</p>
            <div className={styles.subscribe}>
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </div>

          <div className={styles.links}>
            <div>
              <h4>Get In Touch</h4>
              <ul>
                <li>Address: 123 Street</li>
                <li>Phone: +1 234 567 890</li>
                <li>Email: info@virtualmall.com</li>
              </ul>
            </div>

            <div>
              <h4>Account</h4>
              <ul>
                <li>My Account</li>
                <li>Login/Register</li>
                <li>Cart</li>
                <li>Wishlist</li>
              </ul>
            </div>

            <div>
              <h4>Quick Link</h4>
              <ul>
                <li>New Arrival</li>
                <li>Hot sales</li>
                <li>Brands</li>
                <li>On sale</li>
              </ul>
            </div>

            <div>
              <h4>Download App</h4>
              <img src="/qr-code.png" alt="QR Code" className={styles.qr} />
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© Copyright 2024. VirtualMall 2024 All right reserved</p>
          <div className={styles.social}>
            <a href="#">
              <img src="/facebook.svg" alt="Facebook" />
            </a>
            <a href="#">
              <img src="/twitter.svg" alt="Twitter" />
            </a>
            <a href="#">
              <img src="/linkedin.svg" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

