
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail } from 'lucide-react';

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
          <h2 className="text-6xl md:text-7xl font-bold mb-6 cosmic-text">
            Get In <span className="accent-text">Touch</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-8" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            Let's discuss how I can help ensure the quality of your next project with cutting-edge testing solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-10">
            <div className="animate-fade-in-up">
              <h3 className="text-3xl font-bold cosmic-text mb-8">Let's Connect</h3>
              <p className="text-gray-300 mb-10 leading-relaxed text-lg font-light">
                I'm always interested in discussing new opportunities, collaborations, or just chatting about quality assurance and testing strategies. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center space-x-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <div className="social-icon">
                  <Mail className="text-blue-400 w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold cosmic-text text-lg">Gmail</div>
                  <div className="text-gray-300">pbsandeep77@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center space-x-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="social-icon">
                  <span className="text-purple-400 text-xl">💼</span>
                </div>
                <div>
                  <div className="font-semibold cosmic-text text-lg">Professional</div>
                  <div className="text-gray-300">QA Engineer at TechTree IT Systems</div>
                </div>
              </div>
            </div>

            <div className="flex space-x-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Button
                variant="outline"
                size="lg"
                className="flex-1 modern-button border-2 border-blue-500/50 hover:border-blue-400"
                onClick={() => window.open('https://linkedin.com', '_blank')}
              >
                LinkedIn
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="flex-1 modern-button border-2 border-purple-500/50 hover:border-purple-400"
                onClick={() => window.open('https://github.com', '_blank')}
              >
                GitHub
              </Button>
              <Button
                size="lg"
                className="flex-1 accent-button font-semibold"
              >
                Download Resume
              </Button>
            </div>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <form onSubmit={handleSubmit} className="project-card space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium cosmic-text mb-3">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-slate-800/50 border-slate-600/50 focus:border-blue-400 text-white placeholder-gray-400 backdrop-blur-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium cosmic-text mb-3">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-slate-800/50 border-slate-600/50 focus:border-blue-400 text-white placeholder-gray-400 backdrop-blur-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium cosmic-text mb-3">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-slate-800/50 border-slate-600/50 focus:border-blue-400 text-white placeholder-gray-400 backdrop-blur-sm"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium cosmic-text mb-3">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-slate-800/50 border-slate-600/50 focus:border-blue-400 text-white placeholder-gray-400 resize-none backdrop-blur-sm"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full accent-button text-lg py-4 font-semibold"
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
