import { useForm, SubmitHandler } from 'react-hook-form';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

interface FormInputs {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    // In a real application, you would send this data to your backend
    console.log(data);
    reset();
    alert('Message sent successfully!');
  };

  return (
    <section id="contact" className="section-container">
      <h2 className="section-title">Contact Me</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
          <p className="text-slate-300 mb-6">
            Feel free to reach out for collaborations, opportunities, or just to say hello!
          </p>
          <div className="space-y-4">
            <a
              href="mailto:your.email@example.com"
              className="flex items-center gap-3 text-slate-300 hover:text-accent transition-colors"
            >
              <FaEnvelope size={20} />
              <span>your.email@example.com</span>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-slate-300 hover:text-accent transition-colors"
            >
              <FaGithub size={20} />
              <span>GitHub</span>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-slate-300 hover:text-accent transition-colors"
            >
              <FaLinkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full bg-primary/30 border border-accent/20 rounded-lg p-3 text-white focus:outline-none focus:border-accent"
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && (
              <span className="text-red-500 text-sm mt-1">{errors.name.message}</span>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full bg-primary/30 border border-accent/20 rounded-lg p-3 text-white focus:outline-none focus:border-accent"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full bg-primary/30 border border-accent/20 rounded-lg p-3 text-white focus:outline-none focus:border-accent"
              {...register('message', { required: 'Message is required' })}
            />
            {errors.message && (
              <span className="text-red-500 text-sm mt-1">{errors.message.message}</span>
            )}
          </div>

          <button type="submit" className="btn-primary w-full">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
