import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import brandLogo from "@/assets/visualcapture-logo.png.asset.json";

const HeroSection = () => (
  <section className="relative min-h-[100svh] w-full flex items-stretch overflow-hidden bg-ink">
    {/* Photography-themed background */}
    <img
      src={heroBg}
      alt=""
      aria-hidden="true"
      width={1920}
      height={1080}
      className="absolute inset-0 h-full w-full object-cover"
    />

    {/* Subtle dark wash for legibility */}
    <div className="absolute inset-0 bg-ink/50" />

    {/* Soft red ambient accent */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(circle at 75% 50%, hsl(0 78% 30% / 0.25), transparent 65%)",
      }}
    />

    <div className="container relative z-10 flex-1 flex flex-col justify-center items-center text-center">
      <div className="max-w-2xl animate-fade-in py-12">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream/10 backdrop-blur-sm border border-cream/20 text-cream text-xs tracking-[0.25em] uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-coral" />
          Hyderabad · Available 24/7
        </span>
        <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-medium text-cream mt-6 leading-[0.95]">
          Moments,<br />
          <span className="italic text-accent-gradient">beautifully</span> kept.
        </h1>
        <p className="text-cream/85 mt-6 text-base md:text-lg leading-relaxed">
          Weddings, pre-weddings, birthdays and events — captured with a cinematic eye by Visual Capture Photo Studio.
        </p>
        <div className="flex flex-wrap gap-3 mt-8 justify-center">
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
  </section>
);

export default HeroSection;
