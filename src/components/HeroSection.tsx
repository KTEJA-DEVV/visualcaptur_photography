import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import ownerHero from "@/assets/owner-hero.jpg";

const HeroSection = () => (
  <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-ink">
    <img
      src={ownerHero}
      alt="Owner of Visual Capture Photo Studio holding a cinema camera"
      width={1280}
      height={1920}
      className="absolute right-0 top-0 h-full w-[42%] sm:w-[40%] md:w-[45%] lg:w-[42%] object-cover object-[55%_15%]"
    />
    <div className="absolute inset-0 overlay-hero" />
    <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/80 to-transparent md:from-ink/90 md:via-ink/55 md:to-transparent" />


    <div className="container relative z-10 pt-24 pb-32 md:py-0">
      <div className="max-w-2xl animate-fade-in">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream/15 backdrop-blur-sm border border-cream/20 text-cream text-xs tracking-[0.25em] uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-coral" />
          Hyderabad · Available 24/7
        </span>
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-medium text-cream mt-6 leading-[0.95]">
          Moments,<br />
          <span className="italic text-accent-gradient">beautifully</span> kept.
        </h1>
        <p className="text-cream/80 max-w-md mt-6 text-base md:text-lg leading-relaxed">
          Weddings, pre-weddings, birthdays and events — captured with a cinematic eye by Visual Capture Photo Studio.
        </p>
        <div className="flex flex-wrap gap-3 mt-8">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-coral text-white text-sm font-medium hover:bg-coral/90 transition-all shadow-lift"
          >
            Book a Session
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <Link
            to="/weddings"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-cream/10 backdrop-blur-sm border border-cream/30 text-cream text-sm font-medium hover:bg-cream/20 transition-all"
          >
            <Play size={14} fill="currentColor" />
            View Portfolio
          </Link>
        </div>
      </div>
    </div>

    <div className="absolute bottom-6 left-0 right-0 z-10 hidden md:flex justify-center">
      <div className="flex items-center gap-2 text-cream/70 text-xs tracking-[0.3em] uppercase">
        <div className="h-px w-10 bg-cream/40" />
        Scroll
      </div>
    </div>
  </section>
);

export default HeroSection;
