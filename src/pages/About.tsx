import { Link } from "react-router-dom";
import { ArrowLeft, Camera, Heart, Award, Users, Quote, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import photographer from "@/assets/photographer-portrait.jpg";

const stats = [
  { icon: Award, value: "8+", label: "Years of Expertise" },
  { icon: Camera, value: "300+", label: "Events Covered" },
  { icon: Users, value: "100+", label: "Happy Customers" },
];

const timeline = [
  {
    year: "2017",
    title: "The First Click",
    text:
      "It started with a borrowed entry-level DSLR and a curiosity that wouldn't quit. The very first frame — a friend's family function — taught me that a photograph can hold an entire feeling.",
  },
  {
    year: "2019",
    title: "Going Full-Time",
    text:
      "What began as a weekend passion turned into a calling. I invested in my own gear, started second-shooting weddings, and learned the craft of telling love stories through light.",
  },
  {
    year: "2021",
    title: "Visual Capture is Born",
    text:
      "I launched Visual Capture Photo Studio in Hyderabad with one promise — to treat every wedding, birthday and event like it was my own family's moment.",
  },
  {
    year: "2026",
    title: "Still Inspired, Every Day",
    text:
      "Eight years and 300+ events later, what inspires me is still the same: the quiet glance between a bride and groom, a grandmother's smile, a child's first birthday cake. Real moments — beautifully kept.",
  },
];

const About = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    {/* Hero */}
    <section className="pt-28 pb-12 bg-secondary">
      <div className="container">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-coral mb-6 transition-colors"
        >
          <ArrowLeft size={14} /> Back home
        </Link>
        <p className="eyebrow mb-3">About the Photographer</p>
        <h1 className="font-heading text-4xl md:text-6xl text-ink leading-tight max-w-3xl">
          The eye behind <span className="italic text-coral">Visual Capture</span>.
        </h1>
        <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-2xl">
          A Hyderabad-based storyteller turning fleeting moments into memories you'll
          revisit for a lifetime.
        </p>
      </div>
    </section>

    {/* Portrait + intro */}
    <section className="py-16 md:py-24">
      <div className="container grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="relative">
          <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-lift bg-muted">
            <img
              src={photographer}
              alt="Portrait of the photographer holding a gimbal-mounted camera"
              className="w-full h-full object-cover"
              width={1200}
              height={1600}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
            />
          </div>
          <div className="absolute -bottom-6 -right-2 md:-right-6 bg-cream rounded-2xl shadow-lift px-5 py-4 max-w-[220px]">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Est.</p>
            <p className="font-heading text-2xl text-ink">2017</p>
            <p className="text-xs text-muted-foreground">Hyderabad, India</p>
          </div>
        </div>

        <div>
          <p className="eyebrow mb-3">Hello, I'm the founder</p>
          <h2 className="font-heading text-3xl md:text-5xl text-ink leading-tight">
            I don't just take pictures — I keep moments.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            For the last eight years, I've stood quietly in the corner of mandaps,
            danced down baraat lines and waited patiently for a child to blow out
            their first candle. Every event is different, but the goal is always the
            same: come home with frames that feel like the day did.
          </p>

          <figure className="mt-8 border-l-4 border-coral pl-5">
            <Quote className="text-coral mb-2" size={22} />
            <blockquote className="font-heading text-xl md:text-2xl text-ink italic leading-snug">
              "Capture the feeling, not just the frame."
            </blockquote>
            <figcaption className="mt-2 text-sm text-muted-foreground">
              — My motto, since day one.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="py-12 bg-ink text-cream">
      <div className="container grid grid-cols-3 gap-4 md:gap-10">
        {stats.map(({ icon: Icon, value, label }) => (
          <div key={label} className="text-center">
            <Icon className="mx-auto text-coral mb-3" size={28} />
            <p className="font-heading text-3xl md:text-5xl">{value}</p>
            <p className="text-xs md:text-sm text-cream/70 mt-1 uppercase tracking-[0.18em]">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>

    {/* Journey */}
    <section className="py-16 md:py-24">
      <div className="container max-w-4xl">
        <p className="eyebrow mb-3 text-center">The Journey</p>
        <h2 className="font-heading text-3xl md:text-5xl text-ink text-center leading-tight">
          Eight years, one obsession with light.
        </h2>

        <div className="mt-12 relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />
          <div className="space-y-10">
            {timeline.map((item, i) => (
              <div
                key={item.year}
                className={`relative md:grid md:grid-cols-2 md:gap-10 ${
                  i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
                }`}
              >
                <div className="pl-12 md:pl-0 md:pr-10 md:text-right">
                  <span className="absolute left-4 md:left-1/2 -translate-x-1/2 mt-2 h-3 w-3 rounded-full bg-coral ring-4 ring-background" />
                  <p className="font-heading text-2xl text-coral">{item.year}</p>
                  <h3 className="font-heading text-xl text-ink mt-1">{item.title}</h3>
                </div>
                <div className="pl-12 md:pl-10 mt-2 md:mt-0">
                  <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* What inspires me */}
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container max-w-3xl text-center">
        <Heart className="mx-auto text-coral mb-4" size={28} />
        <h2 className="font-heading text-3xl md:text-5xl text-ink leading-tight">
          What inspires me today
        </h2>
        <p className="mt-5 text-muted-foreground leading-relaxed">
          The unscripted laughter between siblings. A father's eyes when he sees his
          daughter as a bride. The way light falls through a temple doorway at golden
          hour. Eight years in, the small moments still feel enormous — and that's
          exactly why I keep showing up, camera in hand.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <Link
            to="/weddings"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-cream text-sm font-medium hover:bg-ink/90 transition-colors"
          >
            See my work
          </Link>
          <a
            href="tel:+918096143780"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-coral text-white text-sm font-medium hover:bg-coral/90 transition-colors"
          >
            <Phone size={16} /> Call now
          </a>
        </div>
      </div>
    </section>

    <Footer />
    <FloatingActions />
  </div>
);

export default About;
