import { FaTrophy, FaMedal, FaCertificate, FaAward } from 'react-icons/fa';

const achievements = [
  {
    id: 1,
    title: "Hospital Management System Success",
    description: "Successfully developed and deployed a comprehensive hospital management system that streamlined operations and improved patient care efficiency.",
    icon: <FaTrophy className="text-accent text-2xl" />,
    year: "2024"
  },
  {
    id: 2,
    title: "Operating Systems Excellence",
    description: "Achieved top performance in advanced operating systems course through innovative implementation of multi-threading and synchronization concepts.",
    icon: <FaMedal className="text-accent text-2xl" />,
    year: "2023"
  },
  {
    id: 3,
    title: "Full Stack Development Certification",
    description: "Completed advanced certification in modern full-stack development, mastering React, Node.js, and related technologies.",
    icon: <FaCertificate className="text-accent text-2xl" />,
    year: "2023"
  },
  {
    id: 4,
    title: "Technical Innovation Award",
    description: "Recognized for implementing innovative solutions in system architecture and performance optimization.",
    icon: <FaAward className="text-accent text-2xl" />,
    year: "2022"
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="section-container">
      <h2 className="section-title">Achievements</h2>
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-accent/20" />

          {/* Achievement items */}
          <div className="space-y-8">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className="relative flex items-start gap-8 group"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 w-4 h-4 -translate-x-1/2 rounded-full border-2 border-accent bg-primary group-hover:bg-accent transition-colors" />

                {/* Icon container */}
                <div className="ml-8 flex-shrink-0 w-12 h-12 rounded-lg bg-primary/50 border border-accent/20 flex items-center justify-center group-hover:border-accent/40 transition-colors">
                  {achievement.icon}
                </div>

                {/* Content */}
                <div className="flex-grow bg-primary/50 p-6 rounded-lg border border-accent/20 group-hover:border-accent/40 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold">
                      {achievement.title}
                    </h3>
                    <span className="text-sm text-slate-400">
                      {achievement.year}
                    </span>
                  </div>
                  <p className="text-slate-300">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
