import { useState, useEffect } from "react";
import brandLogo from "@/assets/visualcapture-logo.png";
import heroBg from "@/assets/hero-bg.jpg";

const SPLASH_SHOWN_KEY = "visualcapture_splash_shown";

const SplashScreen = ({ children }: { children: React.ReactNode }) => {
  const [showSplash, setShowSplash] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem(SPLASH_SHOWN_KEY);
    if (!alreadyShown) {
      setShowSplash(true);
      sessionStorage.setItem(SPLASH_SHOWN_KEY, "true");

      const fadeTimer = setTimeout(() => setFadeOut(true), 3500);
      const hideTimer = setTimeout(() => setShowSplash(false), 4500);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(hideTimer);
      };
    }
  }, []);

  if (!showSplash) {
    return <>{children}</>;
  }

  return (
    <>
      {/* Splash Overlay */}
      <div
        className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-opacity duration-700 ease-in-out ${
          fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        {/* Background image */}
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-ink/70" />
        {/* Soft red ambient accent */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 40%, hsl(0 78% 30% / 0.3), transparent 60%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-4">
          {/* Animated logo */}
          <div
            className={`transition-all duration-1000 ease-out ${
              fadeOut
                ? "opacity-0 scale-90 translate-y-2"
                : "opacity-100 scale-100 translate-y-0"
            }`}
          >
            <img
              src={brandLogo}
              alt="Visual Capture Photography"
              className="w-64 md:w-80 lg:w-96 h-auto drop-shadow-2xl animate-fade-in"
            />
          </div>

          {/* Tagline with staggered fade-in */}
          <div
            className={`mt-6 transition-all duration-700 delay-300 ease-out ${
              fadeOut
                ? "opacity-0 translate-y-3"
                : "opacity-100 translate-y-0"
            }`}
          >
            <p className="text-cream/90 text-sm md:text-base tracking-[0.35em] uppercase font-body">
              Capturing Moments, Creating Memories
            </p>
          </div>

          {/* Decorative line */}
          <div
            className={`mt-6 h-px bg-gradient-to-r from-transparent via-cream/40 to-transparent transition-all duration-700 delay-500 ease-out w-32 md:w-48 ${
              fadeOut ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
            }`}
          />
        </div>
      </div>

      {/* Main content rendered behind splash so it loads immediately */}
      <div
        className={`transition-opacity duration-700 ${
          fadeOut ? "opacity-100" : "opacity-0"
        }`}
      >
        {children}
      </div>
    </>
  );
};

export default SplashScreen;
