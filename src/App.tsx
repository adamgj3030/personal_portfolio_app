import './styles/global.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Technologies from './components/Technologies/Technologies';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Resume from './components/Resume/Resume';
import Testimonials from './components/Testimonials/Testimonials';
import Achievements from './components/Achievements/Achievements';

function App() {
  return (
    <div className="min-h-screen bg-primary text-white">
      <Navbar />
      <main>
        <Hero />
        <Technologies />
        <Experience />
        <Contact />
        <Resume />
        <Testimonials />
        <Achievements />
      </main>
      <footer className="bg-primary/50 py-6 mt-16">
        <div className="container mx-auto px-4 text-center text-slate-400">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
