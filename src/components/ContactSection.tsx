import { useState } from 'react';
import { playPop, playSuccess, playClick } from '@/hooks/useSoundEffects';
import SectionBlock from './SectionBlock';
import {
  Mail,
  Linkedin,
  Copy,
  Check,
  Send,
  ExternalLink,
  MessageSquare,
} from 'lucide-react';

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playSuccess();
    const mailSubject = form.subject
      ? `Portfolio Inquiry: ${form.subject} (from ${form.name})`
      : `Portfolio Message from ${form.name}`;
    const mailBody = `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`;
    const encodedSubject = encodeURIComponent(mailSubject);
    const encodedBody = encodeURIComponent(mailBody);

    window.open(
      `mailto:nallanivaibhavrao@gmail.com?subject=${encodedSubject}&body=${encodedBody}`,
      '_blank',
    );
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    playPop();
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2200);
  };

  return (
    <SectionBlock
      id="contact"
      title="Get In Touch"
      subtitle="Reach out for academic collaborations, internship opportunities, or inquiries."
    >
      <div className="grid md:grid-cols-2 gap-10 md:gap-14">
        {/* Left Column: Direct Contact Info */}
        <address className="space-y-6 not-italic flex flex-col justify-between">
          <div>
            <p className="body-text mb-6">
              I am always open to discussing new opportunities, academic projects, and engineering initiatives. Feel free to connect directly via email or LinkedIn.
            </p>

            <div className="space-y-4">
              {/* Email Card */}
              <div className="group flex items-center justify-between p-5 border-2 border-[#D4AF37]/40 bg-[#0E0E12] hover:border-[#D4AF37] hover:shadow-gold transition-all duration-300">
                <div className="flex items-center gap-4 min-w-0">
                  <div className="p-3.5 border border-[#D4AF37] bg-[#18181F] text-[#F5D77F] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-mono uppercase tracking-widest text-[#9CA3AF]">
                      Email Address
                    </p>
                    <a
                      href="mailto:nallanivaibhavrao@gmail.com"
                      className="font-mono text-sm font-bold text-white hover:text-[#F5D77F] truncate block transition-colors mt-0.5"
                      aria-label="Email Vaibhav Rao Nallani at nallanivaibhavrao@gmail.com"
                    >
                      nallanivaibhavrao@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard('nallanivaibhavrao@gmail.com', 'email')}
                  className="p-2.5 border border-[#D4AF37]/30 hover:border-[#D4AF37] bg-[#141419] text-[#F5D77F] transition-colors shrink-0 ml-3"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedType === 'email' ? (
                    <span className="flex items-center gap-1 text-[11px] font-mono text-[#22C55E]">
                      <Check className="w-3.5 h-3.5" /> Copied
                    </span>
                  ) : (
                    <Copy className="w-4 h-4 text-[#9CA3AF] hover:text-white" />
                  )}
                </button>
              </div>

              {/* LinkedIn Card */}
              <div className="group flex items-center justify-between p-5 border-2 border-[#D4AF37]/40 bg-[#0E0E12] hover:border-[#D4AF37] hover:shadow-gold transition-all duration-300">
                <div className="flex items-center gap-4 min-w-0">
                  <div className="p-3.5 border border-[#D4AF37] bg-[#18181F] text-[#F5D77F] shrink-0">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-mono uppercase tracking-widest text-[#9CA3AF]">
                      LinkedIn Profile
                    </p>
                    <a
                      href="https://www.linkedin.com/in/vaibhav-rao-nallani"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-sm font-bold text-white hover:text-[#F5D77F] truncate block transition-colors mt-0.5"
                      aria-label="View Vaibhav Rao Nallani on LinkedIn"
                    >
                      linkedin.com/in/Vaibhav rao Nallani
                    </a>
                  </div>
                </div>
                <a
                  href="https://www.linkedin.com/in/vaibhav-rao-nallani"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playClick}
                  className="p-2.5 border border-[#D4AF37]/30 hover:border-[#D4AF37] bg-[#141419] text-[#F5D77F] transition-colors shrink-0 ml-3"
                  title="Open LinkedIn"
                  aria-label="Open LinkedIn"
                >
                  <ExternalLink className="w-4 h-4 text-[#D4AF37]" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick response note */}
          <div className="p-4 border border-[#D4AF37]/20 bg-[#0A0A0E] text-xs font-mono text-[#9CA3AF]">
            ⚡ <span className="text-[#F5D77F]">Direct Inquiry:</span> Emails are checked daily. I look forward to connecting with you.
          </div>
        </address>

        {/* Right Column: Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4 bg-[#0E0E12] p-6 md:p-8 border-2 border-[#D4AF37]/40 shadow-gold">
          <div className="flex items-center gap-2 mb-2">
            <MessageSquare className="w-4 h-4 text-[#D4AF37]" />
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#F5D77F] font-bold">
              Send a Direct Message
            </h3>
          </div>

          <div>
            <label htmlFor="contact-name" className="block text-xs font-mono uppercase tracking-wider text-[#9CA3AF] mb-1.5">
              Your Name
            </label>
            <input
              id="contact-name"
              type="text"
              required
              placeholder="e.g. Alex Smith"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-[#141419] border border-[#D4AF37]/30 px-4 py-3 text-white placeholder-[#6B7280] focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all font-mono text-sm"
            />
          </div>

          <div>
            <label htmlFor="contact-email" className="block text-xs font-mono uppercase tracking-wider text-[#9CA3AF] mb-1.5">
              Your Email Address
            </label>
            <input
              id="contact-email"
              type="email"
              required
              placeholder="e.g. alex@example.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-[#141419] border border-[#D4AF37]/30 px-4 py-3 text-white placeholder-[#6B7280] focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all font-mono text-sm"
            />
          </div>

          <div>
            <label htmlFor="contact-message" className="block text-xs font-mono uppercase tracking-wider text-[#9CA3AF] mb-1.5">
              Message
            </label>
            <textarea
              id="contact-message"
              required
              rows={4}
              placeholder="Write your message here..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-[#141419] border border-[#D4AF37]/30 px-4 py-3 text-white placeholder-[#6B7280] focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all font-mono text-sm resize-none"
            />
          </div>

          <button
            type="submit"
            onClick={playClick}
            className="w-full flex items-center justify-center gap-2 py-3.5 px-6 border-2 border-[#D4AF37] bg-gradient-to-r from-[#FFF0C2] via-[#D4AF37] to-[#AA771C] text-[#070707] font-mono text-xs font-black uppercase tracking-widest shadow-[3px_3px_0px_0px_rgba(212,175,55,0.4)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] active:scale-95 transition-all"
          >
            <span>Send Email Message</span>
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </SectionBlock>
  );
};

export default ContactSection;
