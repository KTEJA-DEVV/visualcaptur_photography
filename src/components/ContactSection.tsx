import { Phone, Clock, MapPin, Instagram, MessageCircle, Youtube, Mail } from "lucide-react";

const quickContacts = [
  { label: "Call", value: "+91 80961 43780", href: "tel:+918096143780", icon: Phone, tone: "bg-ink text-cream" },
  { label: "WhatsApp", value: "Chat now", href: "https://wa.me/918096143780", icon: MessageCircle, tone: "bg-whatsapp text-white" },
  { label: "Instagram", value: "@visualcapturephotography", href: "https://www.instagram.com/visualcapturephotography", icon: Instagram, tone: "bg-instagram text-white" },
  { label: "YouTube", value: "Visit channel", href: "https://www.youtube.com/@visualcapturephotography625", icon: Youtube, tone: "bg-youtube text-white" },
];

const ContactSection = () => (
  <section id="contact" className="py-20 md:py-28 bg-secondary">
    <div className="container max-w-6xl">
      <div className="text-center mb-12">
        <p className="eyebrow mb-3">Get in Touch</p>
        <h2 className="font-heading text-4xl md:text-5xl text-ink">
          Let's plan your <span className="italic text-coral">shoot</span>
        </h2>
      </div>

      {/* Quick channels — prominent */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-12">
        {quickContacts.map(({ label, value, href, icon: Icon, tone }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="group rounded-2xl p-5 bg-card shadow-soft hover:shadow-lift transition-all hover:-translate-y-1"
          >
            <div className={`h-11 w-11 rounded-full grid place-items-center ${tone} mb-3`}>
              <Icon size={18} />
            </div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
            <p className="text-sm font-medium text-ink mt-1 truncate">{value}</p>
          </a>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-card rounded-3xl p-6 md:p-10 shadow-soft">
        <div className="space-y-5">
          <h3 className="font-heading text-2xl text-ink">Studio details</h3>
          <div className="flex items-start gap-3">
            <MapPin size={18} className="text-coral mt-1 shrink-0" />
            <div>
              <p className="text-ink text-sm font-medium">Address</p>
              <p className="text-muted-foreground text-sm">
                Shop No.7, 8-91/145, Phase 4, Hastinapuram, Hyderabad, Telangana 500079
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock size={18} className="text-coral mt-1 shrink-0" />
            <div>
              <p className="text-ink text-sm font-medium">Working Hours</p>
              <p className="text-muted-foreground text-sm">Open 24 hours · 7 days a week</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mail size={18} className="text-coral mt-1 shrink-0" />
            <div>
              <p className="text-ink text-sm font-medium">Email</p>
              <p className="text-muted-foreground text-sm">visualcapture2019@gmail.com</p>
            </div>
          </div>
        </div>

        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
          <h3 className="font-heading text-2xl text-ink">Send a message</h3>
          <input
            type="text"
            placeholder="Your name"
            className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-ink placeholder:text-muted-foreground focus:outline-none focus:border-coral transition-colors"
          />
          <input
            type="email"
            placeholder="Email or phone"
            className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-ink placeholder:text-muted-foreground focus:outline-none focus:border-coral transition-colors"
          />
          <textarea
            placeholder="Tell us about your event"
            rows={4}
            className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-ink placeholder:text-muted-foreground focus:outline-none focus:border-coral transition-colors resize-none"
          />
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-coral text-white text-sm font-medium hover:bg-coral/90 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
);

export default ContactSection;
