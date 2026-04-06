import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-secondary border-t border-border">
    <div className="container py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-xl text-gold-gradient mb-4">Visual Capture</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Professional photography studio capturing life's most beautiful moments.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Facebook size={20} /></a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Youtube size={20} /></a>
          </div>
        </div>
        <div>
          <h4 className="font-heading text-foreground mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {["Weddings", "Baby Bump", "Birthdays", "Events"].map((cat) => (
              <Link key={cat} to={`/${cat.toLowerCase().replace(" ", "-")}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {cat}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-heading text-foreground mb-4">Get in Touch</h4>
          <div className="flex flex-col gap-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><Phone size={16} className="text-primary" /> +1 (555) 123-4567</div>
            <div className="flex items-center gap-2"><Mail size={16} className="text-primary" /> hello@visualcapture.com</div>
            <div className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> Your City, Your Country</div>
          </div>
        </div>
      </div>
      <div className="border-t border-border mt-10 pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Visual Capture Photo Studio. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
