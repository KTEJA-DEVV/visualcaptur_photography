import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Weddings", path: "/weddings" },
  { label: "Pre Wedding", path: "/pre-wedding" },
  { label: "Birthdays", path: "/birthdays" },
  { label: "Events", path: "/events" },
  { label: "About", path: "/about" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        scrolled ? "bg-cream/90 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={logo} alt="Visual Capture Photography" className="h-[3.75rem] md:h-[4.5rem] w-auto" />
          <span className={`hidden sm:block font-heading text-base leading-tight ${scrolled ? "text-ink" : "text-cream"}`}>
            Visual Capture
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const active = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  active
                    ? "text-coral"
                    : scrolled
                      ? "text-ink hover:text-coral"
                      : "text-cream/90 hover:text-cream"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href="tel:+918096143780"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-coral text-white text-sm font-medium hover:bg-coral/90 transition-colors"
          >
            <Phone size={14} /> Call Studio
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden h-10 w-10 grid place-items-center rounded-full ${
            scrolled ? "text-ink bg-cream" : "text-cream bg-ink/30 backdrop-blur-sm"
          }`}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-cream border-t border-border animate-fade-in">
          <div className="container flex flex-col gap-1 py-4">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={`py-3 px-2 rounded-lg text-base font-medium ${
                    active ? "text-coral bg-secondary" : "text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href="tel:+918096143780"
              className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-coral text-white text-sm font-medium"
            >
              <Phone size={14} /> Call Studio
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
