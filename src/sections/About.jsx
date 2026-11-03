import { motion } from "framer-motion";
import { ArrowUpRight, GraduationCap, Code, Brain } from "lucide-react";
import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <motion.div
          className="about-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">GET TO KNOW ME</p>
          <h2>
            About <span>Me.</span>
          </h2>
        </motion.div>

        <div className="about-content">

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3>
              Turning ideas into
              <span> intelligent solutions.</span>
            </h3>

            <p>
              I'm Pampana Veerendra, a B.Tech student specializing
              in Artificial Intelligence and Machine Learning.
              I'm passionate about exploring technology and building
              practical solutions to real-world problems.
            </p>

            <p>
              My interests include machine learning, artificial
              intelligence, frontend development and software
              engineering. I enjoy experimenting with new
              technologies and transforming ideas into functional
              applications.
            </p>

            <p>
              Through academic projects and internships, I've
              gained practical experience in Python, web
              development, machine learning and application
              development. I'm continuously working to improve
              my technical and problem-solving abilities.
            </p>

            <a href="#projects" className="about-link">
              Explore My Projects
              <ArrowUpRight size={18} />
            </a>
          </motion.div>

          <motion.div
            className="about-cards"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <div className="about-card">
              <GraduationCap size={27} />
              <div>
                <h4>Education</h4>
                <p>B.Tech – Artificial Intelligence & Machine Learning</p>
              </div>
            </div>

            <div className="about-card">
              <Brain size={27} />
              <div>
                <h4>Interests</h4>
                <p>Artificial Intelligence, Machine Learning & Deep Learning</p>
              </div>
            </div>

            <div className="about-card">
              <Code size={27} />
              <div>
                <h4>Development</h4>
                <p>Frontend Development, Python & Software Engineering</p>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;