import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import "./Projects.css";

const projects = [
  {
    number: "01",
    category: "FINAL YEAR PROJECT",
    title: "Fake Currency Detection",
    description:
      "An AI-powered system that identifies real and fake currency notes using deep learning and image processing. Built with a CNN model to classify currency images.",
    technologies: ["Python", "TensorFlow", "Flask", "OpenCV", "CNN"],
    featured: true,
  },
  {
    number: "02",
    category: "MACHINE LEARNING",
    title: "Credit Card Fraud Detection",
    description:
      "A machine learning project designed to identify potentially fraudulent credit card transactions through data analysis and classification techniques.",
    technologies: ["Python", "Machine Learning", "Scikit-learn"],
  },
  {
    number: "03",
    category: "MACHINE LEARNING",
    title: "Car Price Prediction",
    description:
      "A predictive machine learning application that estimates car prices based on vehicle characteristics and historical dataset patterns.",
    technologies: ["Python", "Scikit-learn", "Pandas"],
  },
  {
    number: "04",
    category: "FULL STACK DEVELOPMENT",
    title: "Online Shopping Application",
    description:
      "A full-stack shopping application featuring product browsing, user interactions and database integration.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">

        <motion.div
          className="projects-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-label">MY WORK</p>

          <h2>
            Featured <span>Projects.</span>
          </h2>

          <p className="projects-subtitle">
            A selection of projects where I turn ideas
            into practical technological solutions.
          </p>
        </motion.div>

        <div className="projects-grid">

          {projects.map((project, index) => (
            <motion.article
              className={`project-card ${
                project.featured ? "featured-project" : ""
              }`}
              key={project.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >

              <div className="project-top">
                <span className="project-number">
                  / {project.number}
                </span>

                <span className="project-category">
                  {project.category}
                </span>
              </div>

              <div className="project-main">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>

              <div className="project-technologies">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project-footer">
                <span>PROJECT {project.number}</span>
                <ArrowUpRight size={22} />
              </div>

            </motion.article>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;