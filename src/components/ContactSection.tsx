
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Gmail } from 'lucide-react';

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
    <section id="contact" className="py-20 section-glow">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-300 mx-auto rounded-full mb-8" />
          <p className="text-xl text-yellow-200 max-w-3xl mx-auto leading-relaxed">
            Let's discuss how I can help ensure the quality of your next project with cutting-edge testing solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-10">
            <div className="animate-fade-in-up">
              <h3 className="text-3xl font-bold text-white mb-8">Let's Connect</h3>
              <p className="text-gray-300 mb-10 leading-relaxed text-lg">
                I'm always interested in discussing new opportunities, collaborations, or just chatting about quality assurance and testing strategies. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center space-x-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400/20 to-amber-300/20 rounded-2xl flex items-center justify-center border border-yellow-400/30 backdrop-blur-sm">
                  <Gmail className="text-yellow-400 text-2xl w-8 h-8" />
                </div>
                <div>
                  <div className="font-semibold text-white text-lg">Gmail</div>
                  <div className="text-yellow-200">pbsandeep77@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center space-x-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="w-16 h-16 bg-gradient-to-r from-amber-400/20 to-yellow-300/20 rounded-2xl flex items-center justify-center border border-amber-400/30 backdrop-blur-sm">
                  <span className="text-amber-400 text-2xl">💼</span>
                </div>
                <div>
                  <div className="font-semibold text-white text-lg">Professional</div>
                  <div className="text-amber-200">QA Engineer at TechTree IT Systems</div>
                </div>
              </div>
            </div>

            <div className="flex space-x-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Button
                variant="outline"
                size="lg"
                className="flex-1 border-2 border-yellow-400/50 text-yellow-300 hover:bg-yellow-400/10 hover:border-yellow-400 backdrop-blur-sm"
                onClick={() => window.open('https://linkedin.com', '_blank')}
              >
                LinkedIn
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="flex-1 border-2 border-amber-400/50 text-amber-300 hover:bg-amber-400/10 hover:border-amber-400 backdrop-blur-sm"
                onClick={() => window.open('https://github.com', '_blank')}
              >
                GitHub
              </Button>
              <Button
                size="lg"
                className="flex-1 glow-button text-slate-900 font-semibold"
              >
                Download Resume
              </Button>
            </div>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <form onSubmit={handleSubmit} className="project-card space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-3">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-slate-900/50 border-yellow-400/30 focus:border-yellow-400 text-white placeholder-gray-400 backdrop-blur-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-3">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-slate-900/50 border-yellow-400/30 focus:border-yellow-400 text-white placeholder-gray-400 backdrop-blur-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-white mb-3">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-slate-900/50 border-yellow-400/30 focus:border-yellow-400 text-white placeholder-gray-400 backdrop-blur-sm"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-3">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-slate-900/50 border-yellow-400/30 focus:border-yellow-400 text-white placeholder-gray-400 resize-none backdrop-blur-sm"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full glow-button text-slate-900 font-semibold text-lg py-4"
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
