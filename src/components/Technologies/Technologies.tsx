import { FaCode, FaServer, FaDatabase } from 'react-icons/fa';
import { SiCplusplus, SiPython, SiR, SiJavascript, SiMysql, SiReact, SiNodedotjs, SiExpress } from 'react-icons/si';

const technologies = [
  {
    category: "Programming Languages",
    icon: <FaCode className="text-4xl mb-4 text-accent" />,
    items: [
      { name: "C/C++", icon: <SiCplusplus />, level: "Advanced" },
      { name: "Python", icon: <SiPython />, level: "Advanced" },
      { name: "R", icon: <SiR />, level: "Intermediate" },
      { name: "JavaScript", icon: <SiJavascript />, level: "Advanced" },
      { name: "SQL", icon: <FaDatabase />, level: "Advanced" },
    ]
  },
  {
    category: "Frameworks & Tools",
    icon: <FaServer className="text-4xl mb-4 text-accent" />,
    items: [
      { name: "React.js", icon: <SiReact />, level: "Advanced" },
      { name: "Node.js", icon: <SiNodedotjs />, level: "Advanced" },
      { name: "Express.js", icon: <SiExpress />, level: "Advanced" },
      { name: "MySQL", icon: <SiMysql />, level: "Advanced" },
    ]
  }
];

const Technologies = () => {
  return (
    <section id="technologies" className="section-container">
      <h2 className="section-title">Technologies</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {technologies.map((category) => (
          <div
            key={category.category}
            className="bg-primary/50 p-6 rounded-lg border border-accent/20 hover:border-accent/40 transition-colors"
          >
            <div className="text-center mb-6">
              {category.icon}
              <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {category.items.map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center p-4 bg-primary/30 rounded-lg hover:bg-primary/40 transition-colors"
                >
                  <div className="text-2xl mb-2 text-accent">
                    {tech.icon}
                  </div>
                  <h4 className="font-medium text-center">{tech.name}</h4>
                  <span className="text-sm text-slate-400">{tech.level}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
