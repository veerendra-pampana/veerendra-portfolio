import { motion } from "framer-motion";
import { Mail, ArrowUpRight, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        <motion.div
          className="contact-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-label">GET IN TOUCH</p>

          <h2>
            Let's Work <span>Together.</span>
          </h2>

          <p>
            Have an opportunity, project idea, or just want to connect?
            I'd love to hear from you.
          </p>
        </motion.div>

        <div className="contact-content">

          <div className="contact-info">
            <h3>Let's start a conversation.</h3>

            <p>
              I'm always interested in exploring opportunities,
              collaborating on projects, and connecting with
              people who share a passion for technology.
            </p>

            <a
              href="mailto:YOUR_EMAIL@gmail.com"
              className="contact-item"
            >
              <Mail size={22} />
              <div>
                <span>EMAIL ME</span>
                <h4>p.veerendra5369@gmail.com</h4>
              </div>
              <ArrowUpRight size={19} />
            </a>

            <a
              href="https://github.com/veerendra-pampana"
              target="_blank"
              rel="noreferrer"
              className="contact-item"
            >
              <FaGithub size={22} />
              <div>
                <span>GITHUB</span>
                <h4>Visit my GitHub</h4>
              </div>
              <ArrowUpRight size={19} />
            </a>

            <a
              href="https://www.linkedin.com/in/veerendra-pampana-34aa66256/"
              target="_blank"
              rel="noreferrer"
              className="contact-item"
            >
              <FaLinkedin size={22} />
              <div>
                <span>LINKEDIN</span>
                <h4>Connect with me</h4>
              </div>
              <ArrowUpRight size={19} />
            </a>
          </div>

          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form
              className="contact-form"
              action="mailto:YOUR_EMAIL@gmail.com"
              method="POST"
              encType="text/plain"
            >
              <h3>Send me a message</h3>

              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="Name"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="Email"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="Message"
                  rows="5"
                  placeholder="Write your message..."
                  required
                />
              </div>

              <button type="submit" className="contact-submit">
                Send Message
                <Send size={17} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;