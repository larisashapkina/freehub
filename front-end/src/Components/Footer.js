import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-buttons">
        <button>Contact Us</button>
        <button>
          <Link to="/aboutus">About Us</Link>
        </button>
      </div>
    </div>
  );
}
export default Footer;
