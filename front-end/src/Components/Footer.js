import "./Footer.css";
import { Link } from "react-router-dom"

function Footer() {
  return (
    <div className="footer">
      <div className="footer-buttons">
        <button>Contact Us</button>
        <Link to="/about">
          <button>About Us</button>
        </Link>
      </div>
    </div>
  );
}
export default Footer;
