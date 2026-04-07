import { Mail, Phone, Clock, MapPin, Instagram } from "lucide-react";

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
              <a href="tel:+918096143780" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                +91 80961 43780
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <MapPin size={20} className="text-primary mt-1" />
            <div>
              <p className="text-foreground font-medium text-sm">Address</p>
              <p className="text-muted-foreground text-sm">
                Shop No.7, 8-91/145, Phase 4,<br />
                Hastinapuram, Hyderabad,<br />
                Telangana 500079, India
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Clock size={20} className="text-primary mt-1" />
            <div>
              <p className="text-foreground font-medium text-sm">Working Hours</p>
              <p className="text-muted-foreground text-sm">Open 24 Hours</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Instagram size={20} className="text-primary mt-1" />
            <div>
              <p className="text-foreground font-medium text-sm">Instagram</p>
              <a
                href="https://www.instagram.com/visualcapturephotography"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground text-sm hover:text-primary transition-colors"
              >
                @visualcapturephotography
              </a>
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
