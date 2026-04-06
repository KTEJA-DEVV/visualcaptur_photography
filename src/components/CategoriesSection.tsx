import { Link } from "react-router-dom";
import weddingsImg from "@/assets/category-weddings.jpg";
import babyBumpImg from "@/assets/category-babybump.jpg";
import birthdaysImg from "@/assets/category-birthdays.jpg";
import eventsImg from "@/assets/category-events.jpg";

const categories = [
  { title: "Weddings", path: "/weddings", image: weddingsImg },
  { title: "Baby Bump", path: "/baby-bump", image: babyBumpImg },
  { title: "Birthdays", path: "/birthdays", image: birthdaysImg },
  { title: "Events", path: "/events", image: eventsImg },
];

const CategoriesSection = () => (
  <section className="py-20 md:py-28">
    <div className="container">
      <div className="text-center mb-14">
        <p className="text-sm tracking-[0.3em] uppercase text-primary mb-2">Our Expertise</p>
        <h2 className="font-heading text-3xl md:text-4xl text-foreground">What We Capture</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, i) => (
          <Link
            key={cat.path}
            to={cat.path}
            className="group relative aspect-[3/4] overflow-hidden rounded-lg"
            style={{ animationDelay: `${i * 100}ms` }}
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
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="font-heading text-xl text-foreground group-hover:text-primary transition-colors">
                {cat.title}
              </h3>
              <p className="text-xs tracking-widest uppercase text-muted-foreground mt-1">View Gallery →</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default CategoriesSection;
