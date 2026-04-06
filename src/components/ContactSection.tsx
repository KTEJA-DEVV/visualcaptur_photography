import { Mail, Phone, Clock } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-20 md:py-28 bg-secondary">
    <div className="container max-w-4xl">
      <div className="text-center mb-14">
        <p className="text-sm tracking-[0.3em] uppercase text-primary mb-2">Get in Touch</p>
        <h2 className="font-heading text-3xl md:text-4xl text-foreground">Contact Us</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <Phone size={20} className="text-primary mt-1" />
            <div>
              <p className="text-foreground font-medium text-sm">Phone</p>
              <p className="text-muted-foreground text-sm">+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Mail size={20} className="text-primary mt-1" />
            <div>
              <p className="text-foreground font-medium text-sm">Email</p>
              <p className="text-muted-foreground text-sm">hello@visualcapture.com</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Clock size={20} className="text-primary mt-1" />
            <div>
              <p className="text-foreground font-medium text-sm">Working Hours</p>
              <p className="text-muted-foreground text-sm">Mon - Sat: 9AM - 7PM</p>
            </div>
          </div>
        </div>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-muted border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-muted border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full bg-muted border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
          />
          <button
            type="submit"
            className="w-full py-3 bg-primary text-primary-foreground text-sm tracking-widest uppercase hover:bg-gold-dark transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
);

export default ContactSection;
