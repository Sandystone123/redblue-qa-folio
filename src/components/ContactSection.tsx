
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Mail, Github, Linkedin, Download } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('Form submitted:', formData);
    console.log('Email notification would be sent to: pbsandeep77@gmail.com');
    
    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 section-enter">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 cosmic-text">
            Get In <span className="accent-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-8" />
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-light">
            Let's discuss how I can help ensure the quality of your next project with cutting-edge testing solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-10">
            <div className="glass-panel rounded-2xl p-8 animate-fade-in-up">
              <h3 className="text-3xl font-bold cosmic-text mb-8">Let's Connect</h3>
              <p className="text-gray-200 mb-10 leading-relaxed text-lg font-light">
                I'm always interested in discussing new opportunities, collaborations, or just chatting about quality assurance and testing strategies. Feel free to reach out!
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                  <div className="social-icon">
                    <Mail className="text-blue-400 w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold cosmic-text text-lg">Email</div>
                    <div className="text-gray-200">pbsandeep77@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  <div className="social-icon">
                    <span className="text-purple-400 text-xl">💼</span>
                  </div>
                  <div>
                    <div className="font-semibold cosmic-text text-lg">Professional</div>
                    <div className="text-gray-200">QA Engineer at TechTree IT Systems</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex space-x-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Button
                variant="outline"
                size="lg"
                className="flex-1 modern-button border-2 border-blue-400/50 hover:border-blue-400"
                onClick={() => window.open('https://linkedin.com', '_blank')}
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="flex-1 modern-button border-2 border-purple-400/50 hover:border-purple-400"
                onClick={() => window.open('https://github.com', '_blank')}
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
              <Button
                size="lg"
                className="flex-1 primary-button font-semibold"
              >
                <Download className="w-5 h-5 mr-2" />
                Resume
              </Button>
            </div>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <form onSubmit={handleSubmit} className="glass-panel rounded-2xl p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="floating-input">
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder=" "
                    className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-lg text-white placeholder-transparent focus:outline-none focus:border-blue-400 transition-colors"
                  />
                  <label htmlFor="name">Name</label>
                </div>
                <div className="floating-input">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder=" "
                    className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-lg text-white placeholder-transparent focus:outline-none focus:border-blue-400 transition-colors"
                  />
                  <label htmlFor="email">Email</label>
                </div>
              </div>

              <div className="floating-input">
                <input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder=" "
                  className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-lg text-white placeholder-transparent focus:outline-none focus:border-blue-400 transition-colors"
                />
                <label htmlFor="subject">Subject</label>
              </div>

              <div className="floating-input">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder=" "
                  className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-lg text-white placeholder-transparent focus:outline-none focus:border-blue-400 transition-colors resize-none"
                />
                <label htmlFor="message">Message</label>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full primary-button text-lg py-4 font-semibold"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
