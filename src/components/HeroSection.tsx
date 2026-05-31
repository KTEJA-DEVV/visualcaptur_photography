import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import ownerHero from "@/assets/owner-hero.png";
import heroBg from "@/assets/hero-bg.jpg";

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
    <div className="absolute inset-0 bg-ink/60" />

    {/* Soft red ambient accent */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(circle at 75% 50%, hsl(0 78% 30% / 0.25), transparent 65%)",
      }}
    />

    {/* Owner image — sits behind text as a subtle background layer */}
    <div
      className="absolute pointer-events-none z-0
        bottom-0 right-1/2 translate-x-1/2 h-[55%] w-auto
        md:right-0 md:translate-x-0 md:bottom-0 md:h-[88%]"
      aria-hidden="true"
    >
      <img
        src={ownerHero}
        alt=""
        width={1280}
        height={1920}
        className="h-full w-auto object-contain object-bottom opacity-25 md:opacity-40 drop-shadow-2xl"
      />
      {/* Gentle fade so the image blends into the section */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent" />
    </div>

    <div className="container relative z-10 flex-1 flex flex-col justify-center pt-24 md:pt-0">
      <div className="max-w-2xl animate-fade-in text-center md:text-left">
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
        <div className="flex flex-wrap gap-3 mt-8 mb-6 md:mb-10 justify-center md:justify-start">
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
