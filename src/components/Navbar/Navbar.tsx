import { useState } from 'react';
import { Link } from 'react-scroll';
import { HiMenu, HiX } from 'react-icons/hi';

const navItems = [
  { label: 'Home', to: 'home' },
  { label: 'Technologies', to: 'technologies' },
  { label: 'Experience', to: 'experience' },
  { label: 'Contact', to: 'contact' },
  { label: 'Resume', to: 'resume' },
  { label: 'Testimonials', to: 'testimonials' },
  { label: 'Achievements', to: 'achievements' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full bg-primary/90 backdrop-blur-sm z-50 shadow-lg">
      <div className="section-container py-4">
        <div className="flex items-center justify-between">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-2xl font-bold text-accent cursor-pointer"
          >
            Portfolio
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                className="text-slate-300 hover:text-accent cursor-pointer transition-colors"
                activeClass="text-accent"
                spy={true}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-300 hover:text-accent"
            onClick={toggleMenu}
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-2">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                className="block py-2 text-slate-300 hover:text-accent cursor-pointer transition-colors"
                activeClass="text-accent"
                spy={true}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
