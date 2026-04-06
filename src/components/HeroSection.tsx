import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden">
    <img
      src={heroBg}
      alt="Visual Capture Photo Studio"
      width={1920}
      height={1080}
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 overlay-gradient" />
    <div className="relative z-10 text-center px-6 animate-fade-in">
      <p className="text-sm md:text-base tracking-[0.3em] uppercase text-primary mb-4">
        Professional Photography
      </p>
      <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-6 leading-tight">
        Visual Capture<br />
        <span className="text-gold-gradient italic font-normal">Photo Studio</span>
      </h1>
      <p className="text-muted-foreground max-w-lg mx-auto mb-8 text-sm md:text-base">
        Capturing life's most precious moments with artistry and passion.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#contact"
          className="px-8 py-3 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase hover:bg-gold-dark transition-colors"
        >
          Book a Session
        </a>
        <Link
          to="/weddings"
          className="px-8 py-3 border border-foreground/30 text-foreground text-sm tracking-widest uppercase hover:border-primary hover:text-primary transition-colors"
        >
          View Portfolio
        </Link>
      </div>
    </div>
  </section>
);

export default HeroSection;
