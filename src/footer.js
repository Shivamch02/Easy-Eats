import appstore from "../images/app-store-logo.png"
import playstore from "../images/playstore.jpeg"
const Footer =() => {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>Contact Us</h2>
          <p>Email: chshivam53@gmail.com</p>
          <p>Phone: 6393948186</p>
        </div>
        <div className="footer-section">
          <h2>Follow Us</h2>
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
        <div className="footer-section">
          <h2>Download Our App</h2>
          <p>Available on the App Store and Google Play</p>
          <div className="app-store-icons">
            <img src={appstore} alt="App Store" />
            <img src={playstore} alt="Google Play" />
          </div>
        </div>
      </div>
      <div className="copyright">
        &copy; 2023 Eats <span>Easy</span>. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

