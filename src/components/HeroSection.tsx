import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import ownerHero from "@/assets/owner-hero.png";
import photographyBg from "@/assets/hero-photography-bg.jpg";

const HeroSection = () => (
  <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-ink">
    {/* Photography-themed background */}
    <img
      src={photographyBg}
      alt=""
      aria-hidden="true"
      className="absolute inset-0 w-full h-full object-cover"
    />
    {/* Mood overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-ink/70 via-ink/40 to-ink/80" />

    {/* Floating glass orbs for depth */}
    <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-coral/20 blur-3xl" />
    <div className="absolute bottom-0 right-1/3 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />

    <div className="container relative z-10 py-24 md:py-0">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Glass text panel */}
        <div className="animate-fade-in rounded-3xl bg-cream/[0.06] backdrop-blur-2xl border border-cream/15 shadow-lift p-6 md:p-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream/15 backdrop-blur-sm border border-cream/20 text-cream text-xs tracking-[0.25em] uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-coral animate-pulse" />
            Hyderabad · Available 24/7
          </span>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-medium text-cream mt-6 leading-[0.95]">
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

        {/* Glass image panel */}
        <div className="relative animate-fade-in hidden md:flex justify-center">
          <div className="relative rounded-3xl bg-cream/[0.06] backdrop-blur-2xl border border-cream/15 shadow-lift p-4 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-coral/10 via-transparent to-primary/10 pointer-events-none" />
            <img
              src={ownerHero}
              alt="Owner of Visual Capture Photo Studio holding a cinema camera"
              width={800}
              height={1200}
              className="relative w-full max-w-md h-[70vh] object-contain object-bottom drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Mobile image — floats below the glass card */}
        <div className="md:hidden flex justify-center -mt-4">
          <img
            src={ownerHero}
            alt="Owner of Visual Capture Photo Studio"
            className="w-64 h-80 object-contain object-bottom drop-shadow-2xl"
          />
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
