import { Camera, ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingActions from "./FloatingActions";

interface GalleryPageProps {
  title: string;
  subtitle: string;
  placeholderCount?: number;
  images?: { src: string; alt?: string }[];
}

const GalleryPage = ({ title, subtitle, placeholderCount = 12, images }: GalleryPageProps) => {
  const hasImages = images && images.length > 0;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const isOpen = activeIndex !== null;

  const close = useCallback(() => setActiveIndex(null), []);
  const next = useCallback(() => {
    if (!images) return;
    setActiveIndex((i) => (i === null ? null : (i + 1) % images.length));
  }, [images]);
  const prev = useCallback(() => {
    if (!images) return;
    setActiveIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  }, [images]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Browser back button closes the lightbox
    window.history.pushState({ lightbox: true }, "");
    const onPop = () => close();
    window.addEventListener("popstate", onPop);

    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("popstate", onPop);
      document.body.style.overflow = prevOverflow;
      if (window.history.state?.lightbox) window.history.back();
    };
  }, [isOpen, close, next, prev]);

  // Swipe handling for mobile
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => setTouchStartX(e.touches[0].clientX);
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
    setTouchStartX(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-28 pb-10 bg-secondary">
        <div className="container">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-coral mb-6 transition-colors">
            <ArrowLeft size={14} /> Back home
          </Link>
          <p className="eyebrow mb-3">{subtitle}</p>
          <h1 className="font-heading text-4xl md:text-6xl text-ink leading-tight">{title}</h1>
        </div>
      </section>
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {hasImages
              ? images!.map((img, i) => (
                  <button
                    type="button"
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className="group relative aspect-square bg-muted rounded-2xl overflow-hidden shadow-soft hover:shadow-lift transition-shadow cursor-pointer focus:outline-none focus:ring-2 focus:ring-coral"
                  >
                    <img
                      src={img.src}
                      alt={img.alt ?? `${title} photo ${i + 1}`}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </button>
                ))
              : Array.from({ length: placeholderCount }).map((_, i) => (
                  <div
                    key={i}
                    className="group relative aspect-square bg-muted rounded-2xl overflow-hidden shadow-soft hover:shadow-lift transition-shadow cursor-pointer"
                  >
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground gap-2 group-hover:text-coral transition-colors">
                      <Camera size={22} />
                      <span className="text-xs">Photo {i + 1}</span>
                    </div>
                  </div>
                ))}
          </div>
          {!hasImages && (
            <p className="text-center text-sm text-muted-foreground mt-10">
              Upload your photos to replace these placeholders.
            </p>
          )}
        </div>
      </section>

      {isOpen && hasImages && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center animate-in fade-in"
          onClick={close}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={(e) => { e.stopPropagation(); close(); }}
            className="absolute top-4 right-4 md:top-6 md:right-6 z-10 h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur transition-colors"
          >
            <X size={22} />
          </button>
          <button
            type="button"
            aria-label="Previous"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="hidden md:flex absolute left-4 md:left-6 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 text-white items-center justify-center backdrop-blur transition-colors"
          >
            <ChevronLeft size={26} />
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="hidden md:flex absolute right-4 md:right-6 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 text-white items-center justify-center backdrop-blur transition-colors"
          >
            <ChevronRight size={26} />
          </button>
          <img
            src={images![activeIndex!].src}
            alt={images![activeIndex!].alt ?? `${title} photo ${activeIndex! + 1}`}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[92vh] max-w-[95vw] object-contain select-none"
            draggable={false}
          />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-xs md:text-sm pointer-events-none">
            {activeIndex! + 1} / {images!.length}
          </div>
        </div>
      )}

      <Footer />
      <FloatingActions />
    </div>
  );
};

export default GalleryPage;
