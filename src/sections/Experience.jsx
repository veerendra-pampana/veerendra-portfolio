import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Code2,
  Network,
  ArrowUpRight,
} from "lucide-react";

import "./Experience.css";

const experiences = [
  {
    number: "01",
    company: "Oasis Infobyte",
    role: "Python Development Intern",
    type: "INTERNSHIP",
    description:
      "Completed Python development tasks focused on programming fundamentals, GUI development, database integration and application development.",
    responsibilities: [
      "Developed a BMI Calculator using Python and Tkinter.",
      "Integrated SQLite database functionality.",
      "Created a Password Generator using Python.",
      "Worked with data visualization and CSV export.",
    ],
    technologies: ["Python", "Tkinter", "SQLite", "Matplotlib"],
    icon: Code2,
  },
  {
    number: "02",
    company: "City Online AP Pvt. Ltd.",
    role: "Computer Networking Intern",
    type: "INTERNSHIP",
    description:
      "Gained practical exposure to computer networking, network configuration, troubleshooting and system maintenance.",
    responsibilities: [
      "Learned network configuration fundamentals.",
      "Worked with networking troubleshooting.",
      "Gained exposure to system maintenance.",
      "Understood practical computer networking operations.",
    ],
    technologies: [
      "Computer Networks",
      "Networking",
      "Troubleshooting",
      "System Maintenance",
    ],
    icon: Network,
  },
];

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="experience-container">

        <motion.div
          className="experience-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-label">MY JOURNEY</p>

          <h2>
            Experience <span>& Internships.</span>
          </h2>

          <p className="experience-subtitle">
            My professional learning journey through
            internships and practical experiences.
          </p>
        </motion.div>

        <div className="experience-list">

          {experiences.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                className="experience-card"
                key={item.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
              >

                <div className="experience-number">
                  {item.number}
                </div>

                <div className="experience-content">

                  <div className="experience-top">
                    <div>
                      <span className="experience-type">
                        {item.type}
                      </span>

                      <h3>{item.company}</h3>

                      <h4>{item.role}</h4>
                    </div>

                    <div className="experience-icon">
                      <Icon size={30} />
                    </div>
                  </div>

                  <p className="experience-description">
                    {item.description}
                  </p>

                  <div className="experience-responsibilities">
                    {item.responsibilities.map((task, i) => (
                      <div className="experience-task" key={i}>
                        <span>—</span>
                        {task}
                      </div>
                    ))}
                  </div>

                  <div className="experience-technologies">
                    {item.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                </div>

              </motion.div>
            );
          })}

        </div>

        <div className="experience-footer">
          <BriefcaseBusiness size={19} />
          <span>LEARNING THROUGH PRACTICAL EXPERIENCE</span>
        </div>

      </div>
    </section>
  );
};

export default Experience;