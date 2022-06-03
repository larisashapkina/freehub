import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-buttons">
        <a>Contact Us</a>
        <a>
          <Link to="/aboutus">About Us</Link>
        </a>
      </div>
    </div>
  );
}
export default Footer;
