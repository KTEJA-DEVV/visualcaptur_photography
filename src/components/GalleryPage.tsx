import { Camera, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
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
                  <div
                    key={i}
                    className="group relative aspect-square bg-muted rounded-2xl overflow-hidden shadow-soft hover:shadow-lift transition-shadow cursor-pointer"
                  >
                    <img
                      src={img.src}
                      alt={img.alt ?? `${title} photo ${i + 1}`}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
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
      <Footer />
      <FloatingActions />
    </div>
  );
};

export default GalleryPage;
