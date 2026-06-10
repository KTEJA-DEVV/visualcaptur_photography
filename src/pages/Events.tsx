import { useMemo } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Weddings
import vc20 from "@/assets/weddings/vc20.jpg";
import vc21 from "@/assets/weddings/vc21.jpg";
import rsCover from "@/assets/weddings/rajesh-sindhu-cover.jpg";
import rajVidya from "@/assets/weddings/rajashekar-vidya.jpg";
import mandap from "@/assets/weddings/mandap-couple.jpg";
import goldenStage from "@/assets/weddings/golden-stage.jpg";
import redVeil from "@/assets/weddings/red-veil.jpg";
import orangeSaree from "@/assets/weddings/orange-saree.jpg";
import brideRiceShower from "@/assets/weddings/bride-rice-shower.jpg";
import bridePalmPortrait from "@/assets/weddings/bride-palm-portrait.jpg";
import doorwayCoupleLook from "@/assets/weddings/doorway-couple-look.jpg";

// Birthdays
import oxCart from "@/assets/birthdays/ox-cart.jpg";
import moonOne from "@/assets/birthdays/moon-one.jpg";
import pinkPrincess from "@/assets/birthdays/pink-princess.jpg";
import balloonBasket from "@/assets/birthdays/balloon-basket.jpg";
import littleDoctor from "@/assets/birthdays/little-doctor.jpg";
import templeBaby from "@/assets/birthdays/temple-baby.jpg";
import littleKing from "@/assets/birthdays/little-king.jpg";
import flowerCart from "@/assets/birthdays/flower-cart.jpg";

// Pre Wedding
import cherry from "@/assets/prewedding/cherry-tree-doorway.jpg";
import disco from "@/assets/prewedding/disco-dip.jpg";
import royalArch from "@/assets/prewedding/royal-arch.jpg";
import horseSunset from "@/assets/prewedding/horse-sunset.jpg";
import bohoArch from "@/assets/prewedding/boho-arch.jpg";
import staircase from "@/assets/prewedding/staircase-couple.jpg";
import sunset from "@/assets/prewedding/sunset-silhouette.jpg";

const pool = [
  { src: rsCover, alt: "Wedding moment" },
  { src: brideRiceShower, alt: "Bride in a rice shower" },
  { src: redVeil, alt: "Red veil moment" },
  { src: orangeSaree, alt: "Traditional portrait" },
  { src: bridePalmPortrait, alt: "Bride portrait" },
  { src: goldenStage, alt: "Golden mandap" },
  { src: mandap, alt: "Temple mandap" },
  { src: rajVidya, alt: "Couple portrait" },
  { src: doorwayCoupleLook, alt: "Doorway couple" },
  { src: vc20, alt: "Bride magazine" },
  { src: vc21, alt: "The Bride" },
  { src: oxCart, alt: "Birthday cart setup" },
  { src: moonOne, alt: "First birthday moon" },
  { src: pinkPrincess, alt: "Pink princess birthday" },
  { src: balloonBasket, alt: "Balloon basket setup" },
  { src: littleDoctor, alt: "Doctor theme birthday" },
  { src: templeBaby, alt: "Temple baby" },
  { src: littleKing, alt: "Little king throne" },
  { src: flowerCart, alt: "Flower cart birthday" },
  { src: cherry, alt: "Cherry blossom doorway" },
  { src: disco, alt: "Disco dance dip" },
  { src: royalArch, alt: "Royal arch" },
  { src: horseSunset, alt: "Horse silhouette sunset" },
  { src: bohoArch, alt: "Boho arch" },
  { src: staircase, alt: "Grand staircase" },
  { src: sunset, alt: "Sunset silhouette" },
];

const shuffle = <T,>(arr: T[]) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const Events = () => {
  const slides = useMemo(() => shuffle(pool).slice(0, 12), []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-28 pb-10 bg-secondary">
        <div className="container">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-coral mb-6 transition-colors"
          >
            <ArrowLeft size={14} /> Back home
          </Link>
          <p className="eyebrow mb-3">Special Occasions</p>
          <h1 className="font-heading text-4xl md:text-6xl text-ink leading-tight">Events</h1>
          <p className="text-muted-foreground mt-3 text-sm md:text-base">
            Swipe left or right to explore moments from our portfolio.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <Carousel
            opts={{ loop: true, align: "center" }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {slides.map((img, i) => (
                <CarouselItem
                  key={i}
                  className="md:basis-3/4 lg:basis-2/3"
                >
                  <div className="relative aspect-[4/3] md:aspect-[16/10] rounded-3xl overflow-hidden shadow-lift bg-muted">
                    <img
                      src={img.src}
                      alt={img.alt}
                      draggable={false}
                      className="absolute inset-0 w-full h-full object-cover select-none"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/60 to-transparent">
                      <p className="text-white/90 text-sm md:text-base">{img.alt}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 lg:-left-12" />
            <CarouselNext className="hidden md:flex -right-4 lg:-right-12" />
          </Carousel>

          <p className="text-center text-xs md:text-sm text-muted-foreground mt-6">
            Swipe or drag to navigate
          </p>
        </div>
      </section>

      <Footer />
      <FloatingActions />
    </div>
  );
};

export default Events;
