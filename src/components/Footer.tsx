import { Link } from "react-router-dom";
import { Instagram, Youtube, Phone, MapPin, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => (
  <footer className="bg-ink text-cream">
    <div className="container py-14 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <img src={logo} alt="Visual Capture" className="h-12 w-auto rounded-md bg-cream p-1" />
            <span className="font-heading text-lg">Visual Capture</span>
          </div>
          <p className="text-cream/70 text-sm leading-relaxed max-w-xs">
            Professional photography studio in Hyderabad — capturing life's most beautiful moments.
          </p>
          <div className="flex gap-2 mt-5">
            <a href="https://www.instagram.com/visualcapturephotography" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="h-9 w-9 grid place-items-center rounded-full bg-cream/10 hover:bg-instagram transition-colors"><Instagram size={16} /></a>
            <a href="https://www.youtube.com/@visualcapturephotography625" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="h-9 w-9 grid place-items-center rounded-full bg-cream/10 hover:bg-youtube transition-colors"><Youtube size={16} /></a>
            <a href="https://wa.me/918096143780" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="h-9 w-9 grid place-items-center rounded-full bg-cream/10 hover:bg-whatsapp transition-colors"><MessageCircle size={16} /></a>
            <a href="tel:+918096143780" aria-label="Call" className="h-9 w-9 grid place-items-center rounded-full bg-cream/10 hover:bg-coral transition-colors"><Phone size={16} /></a>
          </div>
        </div>
        <div>
          <h4 className="font-heading text-base mb-4">Portfolio</h4>
          <div className="flex flex-col gap-2">
            {["Weddings", "Baby Bump", "Birthdays", "Events"].map((cat) => (
              <Link key={cat} to={`/${cat.toLowerCase().replace(" ", "-")}`} className="text-sm text-cream/70 hover:text-coral transition-colors">
                {cat}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-heading text-base mb-4">Get in Touch</h4>
          <div className="flex flex-col gap-3 text-sm text-cream/70">
            <a href="tel:+918096143780" className="flex items-center gap-2 hover:text-coral transition-colors"><Phone size={14} className="text-coral" /> +91 80961 43780</a>
            <div className="flex items-start gap-2"><MapPin size={14} className="text-coral mt-0.5" /> Hastinapuram, Hyderabad</div>
          </div>
        </div>
      </div>
      <div className="border-t border-cream/10 mt-12 pt-6 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} Visual Capture Photo Studio. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
