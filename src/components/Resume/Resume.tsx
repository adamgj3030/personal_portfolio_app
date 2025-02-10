import { FaDownload, FaEye } from 'react-icons/fa';

const Resume = () => {
  return (
    <section id="resume" className="section-container">
      <h2 className="section-title">Resume</h2>
      <div className="max-w-2xl mx-auto">
        <div className="bg-primary/50 p-6 rounded-lg border border-accent/20">
          <div className="text-center mb-6">
            <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaDownload className="text-3xl text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Download My Resume</h3>
            <p className="text-slate-300">
              Get a detailed overview of my skills, experience, and achievements.
            </p>
          </div>

          <div className="space-y-4">
            {/* Replace # with actual resume URL when available */}
            <a
              href="#"
              className="btn-primary flex items-center justify-center gap-2 w-full"
            >
              <FaDownload />
              <span>Download PDF</span>
            </a>
            <a
              href="#"
              className="flex items-center justify-center gap-2 text-slate-300 hover:text-accent transition-colors"
            >
              <FaEye />
              <span>Preview Resume</span>
            </a>
          </div>

          <div className="mt-6 pt-6 border-t border-accent/20">
            <h4 className="font-medium mb-2">Quick Overview</h4>
            <ul className="list-disc list-inside text-slate-300 space-y-2">
              <li>Software Engineer with full-stack development expertise</li>
              <li>Strong background in operating systems and multi-threading</li>
              <li>Experience with modern web technologies and frameworks</li>
              <li>Proficient in multiple programming languages</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
