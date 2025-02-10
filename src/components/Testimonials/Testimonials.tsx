import { useState } from 'react';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    role: "Lead Developer, Hospital Management System",
    content: "An exceptional developer who delivered outstanding results on our hospital management system. Their expertise in full-stack development and attention to detail made them an invaluable team member.",
    image: "https://via.placeholder.com/60"
  },
  {
    id: 2,
    name: "Prof. Michael Chen",
    role: "Operating Systems Course Professor",
    content: "Demonstrated exceptional understanding of complex operating systems concepts. Their implementation of multi-threading and mutual exclusion principles was among the best in class.",
    image: "https://via.placeholder.com/60"
  },
  {
    id: 3,
    name: "Alex Rivera",
    role: "Tech Lead, Software Solutions Inc.",
    content: "A highly skilled developer with excellent problem-solving abilities. Their contributions to our projects have been invaluable, especially in optimizing performance and implementing robust solutions.",
    image: "https://via.placeholder.com/60"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="section-container">
      <h2 className="section-title">Testimonials</h2>
      <div className="max-w-3xl mx-auto">
        <div className="bg-primary/50 p-6 md:p-8 rounded-lg border border-accent/20">
          <div className="relative">
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-slate-400 hover:text-accent transition-colors hidden md:block"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft size={24} />
            </button>

            <div className="text-center">
              <div className="mb-6">
                <FaQuoteLeft className="text-4xl text-accent mx-auto" />
              </div>
              <p className="text-lg text-slate-300 mb-6 italic">
                "{testimonials[currentIndex].content}"
              </p>
              <div className="flex items-center justify-center mb-4">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-12 h-12 rounded-full border-2 border-accent"
                />
              </div>
              <div>
                <h4 className="font-semibold text-lg">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-slate-400">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-slate-400 hover:text-accent transition-colors hidden md:block"
              aria-label="Next testimonial"
            >
              <FaChevronRight size={24} />
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex justify-center gap-4 mt-6 md:hidden">
            <button
              onClick={prevTestimonial}
              className="text-slate-400 hover:text-accent transition-colors"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft size={20} />
            </button>
            <button
              onClick={nextTestimonial}
              className="text-slate-400 hover:text-accent transition-colors"
              aria-label="Next testimonial"
            >
              <FaChevronRight size={20} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentIndex === index ? 'bg-accent' : 'bg-slate-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
