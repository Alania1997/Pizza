import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <p>Contact: support@pizzadelivery.com | Phone: +1-123-456-7890</p>
      <Link to="/contacts">Contact Us</Link>
    </footer>
  );
}

export default Footer;