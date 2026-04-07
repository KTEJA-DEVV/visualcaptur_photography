import { MapPin } from "lucide-react";

const MapSection = () => (
  <section className="py-20 md:py-28">
    <div className="container">
      <div className="text-center mb-14">
        <p className="text-sm tracking-[0.3em] uppercase text-primary mb-2">Find Us</p>
        <h2 className="font-heading text-3xl md:text-4xl text-foreground">Our Location</h2>
      </div>
      <div className="relative rounded-lg overflow-hidden aspect-[16/7] bg-muted border border-border">
        <iframe
          title="Visual Capture Photography Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.5!2d78.5793!3d17.3456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba1f0e1234567%3A0x1234567890abcdef!2sVisual+Capture+Photography!5e0!3m2!1sen!2sin!4v1"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
        />
        <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg px-4 py-3 flex items-center gap-2 border border-border">
          <MapPin size={18} className="text-primary" />
          <span className="text-sm text-foreground">
            Shop No.7, 8-91/145, Phase 4, Hastinapuram, Hyderabad, Telangana 500079
          </span>
        </div>
      </div>
    </div>
  </section>
);

export default MapSection;
