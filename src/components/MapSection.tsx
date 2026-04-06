import { MapPin } from "lucide-react";

const MapSection = () => (
  <section className="py-20 md:py-28">
    <div className="container">
      <div className="text-center mb-14">
        <p className="text-sm tracking-[0.3em] uppercase text-primary mb-2">Find Us</p>
        <h2 className="font-heading text-3xl md:text-4xl text-foreground">Our Location</h2>
      </div>
      <div className="relative rounded-lg overflow-hidden aspect-[16/7] bg-muted border border-border">
        {/* Replace the src with your actual Google Maps embed URL */}
        <iframe
          title="Studio Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjYiTiAxMjLCsDI1JzA5LjgiVw!5e0!3m2!1sen!2sus!4v1"
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
          <span className="text-sm text-foreground">Your Studio Address Here</span>
        </div>
      </div>
    </div>
  </section>
);

export default MapSection;
