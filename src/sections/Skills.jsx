import { motion } from "framer-motion";
import {
  Code2,
  Brain,
  Globe,
  Server,
  Database
} from "lucide-react";

import "./Skills.css";

const skillGroups = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["Python", "Java", "JavaScript"],
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    skills: ["TensorFlow", "Keras", "Scikit-learn", "OpenCV"],
  },
  {
    title: "Frontend Development",
    icon: Globe,
    skills: ["HTML", "CSS", "React", "JavaScript"],
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: ["Flask", "Node.js", "Express.js"],
  },
  {
    title: "Database & Tools",
    icon: Database,
    skills: ["MySQL", "MongoDB", "Git", "GitHub", "VS Code"],
  },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">

        <motion.div
          className="skills-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-label">MY EXPERTISE</p>

          <h2>
            Technical <span>Skills.</span>
          </h2>

          <p className="skills-subtitle">
            Technologies and tools I use to transform
            ideas into practical solutions.
          </p>
        </motion.div>

        <div className="skills-grid">

          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.div
                className="skill-card"
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >

                <div className="skill-card-header">
                  <Icon size={25} />
                  <h3>{group.title}</h3>
                </div>

                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default Skills;