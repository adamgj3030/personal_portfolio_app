import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="section-container text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto">
          A passionate software engineer specializing in full-stack development,
          operating systems, and efficient software solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="btn-primary"
          >
            Contact Me
          </Link>
          <Link
            to="experience"
            smooth={true}
            duration={500}
            className="btn-primary"
          >
            View My Work
          </Link>
        </div>
      </div>
      
      {/* Decorative gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-primary to-primary" />
      </div>
    </section>
  );
};

export default Hero;
