import { Youtube } from "lucide-react";

const videos = [
  { id: "e5PTuJy853o", title: "Sriharsha + Sravya Pre Wedding Teaser" },
  { id: "B5ICpOXqfoA", title: "Sai & Saraswathi Wedding Film" },
  { id: "Dcd4o7uCQLM", title: "Vamika 1st Birthday Promo" },
  { id: "3XdQzzumLXs", title: "Vamika Pre Birthday Promo 2026" },
  { id: "In8Z2kCmzJA", title: "Srinivas + Anitha House Warming" },
];

const VideosSection = () => (
  <section className="py-20 md:py-28 bg-secondary">
    <div className="container">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
        <div>
          <p className="eyebrow mb-3">Cinematic Stories</p>
          <h2 className="font-heading text-4xl md:text-5xl text-ink leading-tight">
            Films that <span className="italic text-coral">linger</span>
          </h2>
        </div>
        <a
          href="https://www.youtube.com/@visualcapturephotography625"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ink text-cream text-sm font-medium hover:bg-ink-soft transition-colors self-start md:self-auto"
        >
          <Youtube size={16} /> Visit Channel
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {videos.slice(0, 3).map((v, i) => (
          <div
            key={v.id}
            className={`relative aspect-video rounded-2xl overflow-hidden shadow-soft ${
              i === 0 ? "lg:col-span-2 lg:row-span-2 lg:aspect-[16/10]" : ""
            }`}
          >
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${v.id}`}
              title={v.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="absolute inset-0 w-full h-full"
            />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
        {videos.slice(3).map((v) => (
          <div key={v.id} className="relative aspect-video rounded-2xl overflow-hidden shadow-soft">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${v.id}`}
              title={v.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="absolute inset-0 w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default VideosSection;
