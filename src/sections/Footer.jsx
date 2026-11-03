import { ArrowUp, ArrowUpRight } from "lucide-react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-top">

          <div className="footer-brand">
            <a href="#home">VEERENDRA.</a>

            <p>
              Building, learning and creating
              through technology.
            </p>
          </div>

          <div className="footer-navigation">
            <h4>QUICK LINKS</h4>

            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-connect">
            <h4>LET'S CONNECT</h4>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <ArrowUpRight size={15} />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <ArrowUpRight size={15} />
            </a>

            <a href="mailto:YOUR_EMAIL@gmail.com">
              Email <ArrowUpRight size={15} />
            </a>
          </div>

        </div>

        <div className="footer-bottom">

          <p>
            © {currentYear} Pampana Veerendra.
            All rights reserved.
          </p>

          <a href="#home" className="back-to-top">
            BACK TO TOP <ArrowUp size={15} />
          </a>

        </div>

      </div>
    </footer>
  );
};

export default Footer;