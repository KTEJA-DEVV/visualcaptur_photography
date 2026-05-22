import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import weddingsImg from "@/assets/category-weddings.jpg";
import babyBumpImg from "@/assets/category-babybump.jpg";
import birthdaysImg from "@/assets/category-birthdays.jpg";
import eventsImg from "@/assets/category-events.jpg";

const categories = [
  { title: "Weddings", path: "/weddings", image: weddingsImg, desc: "Timeless wedding films & stills" },
  { title: "Baby Bump", path: "/baby-bump", image: babyBumpImg, desc: "Maternity portraits, glowing" },
  { title: "Birthdays", path: "/birthdays", image: birthdaysImg, desc: "Joyful candid celebrations" },
  { title: "Events", path: "/events", image: eventsImg, desc: "Ceremonies, parties, milestones" },
];

const CategoriesSection = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
        <div>
          <p className="eyebrow mb-3">Our Expertise</p>
          <h2 className="font-heading text-4xl md:text-5xl text-ink max-w-xl leading-tight">
            What we love to <span className="italic text-coral">capture</span>
          </h2>
        </div>
        <p className="text-muted-foreground max-w-sm text-sm">
          Browse galleries from every kind of story we've told behind the lens.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {categories.map((cat) => (
          <Link
            key={cat.path}
            to={cat.path}
            className="group relative aspect-[3/4] overflow-hidden rounded-2xl shadow-soft hover:shadow-lift transition-shadow"
          >
            <img
              src={cat.image}
              alt={cat.title}
              loading="lazy"
              width={800}
              height={1024}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 overlay-gradient-up" />
            <div className="absolute top-4 right-4 h-9 w-9 rounded-full bg-cream/95 grid place-items-center text-ink opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowUpRight size={16} />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h3 className="font-heading text-2xl text-cream">{cat.title}</h3>
              <p className="text-xs text-cream/70 mt-1">{cat.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default CategoriesSection;
