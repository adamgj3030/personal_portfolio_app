import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaServer, FaLaptopCode } from 'react-icons/fa';

const projects = [
  {
    title: "Hospital Management System",
    description: "A comprehensive full-stack web application for managing hospital operations, patient records, and appointments.",
    icon: <FaLaptopCode className="text-4xl text-accent" />,
    technologies: ["React", "Node.js", "Express.js", "MySQL"],
    features: [
      "Patient record management",
      "Appointment scheduling",
      "Medical history tracking",
      "Staff management",
      "Dashboard analytics"
    ],
    links: {
      github: "#",
      live: "#"
    }
  },
  {
    title: "Operating Systems Project",
    description: "Advanced implementation of multi-threading and mutual exclusion concepts in a client-server architecture.",
    icon: <FaServer className="text-4xl text-accent" />,
    technologies: ["C++", "POSIX Threads", "Socket Programming"],
    features: [
      "Multi-threaded server implementation",
      "Mutual exclusion handling",
      "Client-server communication",
      "Resource synchronization",
      "Performance optimization"
    ],
    links: {
      github: "#",
      live: "#"
    }
  }
];

const Experience = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section id="experience" className="section-container">
      <h2 className="section-title">Experience</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className="bg-primary/50 p-6 rounded-lg border border-accent/20 hover:border-accent/40 transition-colors"
            onMouseEnter={() => setActiveProject(index)}
            onMouseLeave={() => setActiveProject(null)}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                {project.icon}
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </div>
              <div className="flex gap-3">
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-accent transition-colors"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-accent transition-colors"
                >
                  <FaExternalLinkAlt size={18} />
                </a>
              </div>
            </div>

            <p className="text-slate-300 mb-4">
              {project.description}
            </p>

            <div className="mb-4">
              <h4 className="font-medium mb-2">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Key Features:</h4>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
