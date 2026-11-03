import { motion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        {/* LEFT CONTENT */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-status">
            <span className="status-dot"></span>
            Available for opportunities
          </div>

          <p className="hero-intro">HELLO, I'M</p>

          <h1>
            Pampana
            <span>Veerendra.</span>
          </h1>

          <h2>
            AI & ML Enthusiast · Software Developer
          </h2>

          <p className="hero-description">
            I build intelligent solutions and modern digital
            experiences through technology, creativity, and
            continuous learning. Passionate about AI,
            machine learning, and software development.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              Explore My Work
              <ArrowUpRight size={18} />
            </a>

            <a
              href="/resume.pdf"
              download="Veerendra_Pampana_Resume.pdf"
              className="secondary-btn"
            >
              Download Resume
              <Download size={18} />
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/veerendra-pampana"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/veerendra-pampana-34aa66256/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={22} />
            </a>
          </div>
        </motion.div>

        {/* RIGHT PROFILE IMAGE */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="profile-ring">
            <div className="profile-inner">
              <img
                src="/profile.jpeg"
                alt="Pampana Veerendra"
                className="profile-image"
              />
            </div>
          </div>

          <div className="hero-bottom">
            <span>01 / 04</span>
            <span>PORTFOLIO 2026</span>
          </div>
        </motion.div>

      </div>

      <div className="hero-scroll">
        SCROLL TO EXPLORE
      </div>
    </section>
  );
};

export default Hero;