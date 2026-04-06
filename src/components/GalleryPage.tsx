import { Camera } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface GalleryPageProps {
  title: string;
  subtitle: string;
  placeholderCount?: number;
}

const GalleryPage = ({ title, subtitle, placeholderCount = 12 }: GalleryPageProps) => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <section className="pt-28 pb-12">
      <div className="container text-center">
        <p className="text-sm tracking-[0.3em] uppercase text-primary mb-2">{subtitle}</p>
        <h1 className="font-heading text-4xl md:text-5xl text-foreground">{title}</h1>
      </div>
    </section>
    <section className="pb-20">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: placeholderCount }).map((_, i) => (
            <div
              key={i}
              className="group relative aspect-square bg-muted rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-colors cursor-pointer"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground gap-2 group-hover:text-primary transition-colors">
                <Camera size={24} />
                <span className="text-xs">Photo {i + 1}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground mt-10">
          Replace these placeholders with your actual photos.
        </p>
      </div>
    </section>
    <Footer />
  </div>
);

export default GalleryPage;
