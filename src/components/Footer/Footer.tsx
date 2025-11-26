import { MdOutlineEmail } from "react-icons/md";
import "./Footer.scss";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <>
      <footer>
        <p>
          <strong>Contact:</strong>{" "}
        </p>
        <p className="footer-contact">
          <span>
            <MdOutlineEmail className="contact-iconE" />
          </span>
          danrlei_vieira@hotmail.com
        </p>
        <p className="footer-contact">
          <span>
            <FaWhatsapp className="contact-iconW" />
          </span>
          (45) 99999-9999
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
        <p>
          &copy; {new Date().getFullYear()} ShopTS. Developed by{" "}
          <strong>Danrlei</strong>.
        </p>
        <p>Version 1.0 - In development.</p>
        <div className="footer-links">
          <Link to="/termofuse" className="footer-link">
            Terms of use
          </Link>
          <Link to="/privacypolicy" className="footer-link">
            Privacy Policy
          </Link>
          <Link to="/help" className="footer-link">
            Help
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
