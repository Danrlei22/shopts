import { MdOutlineEmail } from "react-icons/md";
import "./Footer.scss";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <>
      <footer>
        <p>Contact: </p>
        <p className="footer-contact">
          <MdOutlineEmail className="contact-iconE" /> danrlei_vieira@hotmail.com
        </p>
        <p className="footer-contact">
          <FaWhatsapp className="contact-iconW" /> (45) 99999-9999
        </p>
        <div className="footer-media">
          <a
            href="https://www.linkedin.com/in/danrlei-vieira-85b335231/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="media-iconL" />
          </a>
          <a
            href="https://github.com/Danrlei22"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="media-iconG" />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} ShopTS. Developed by Danrlei.</p>
        <p>Version 1.0 - In development.</p>
        <div className="footer-links">
          <Link to="/about" className="footer-link">
            Terms of use
          </Link>
          <Link to="/about" className="footer-link">
            Privacy Policy
          </Link>
          <Link to="/about" className="footer-link">
            Help
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
