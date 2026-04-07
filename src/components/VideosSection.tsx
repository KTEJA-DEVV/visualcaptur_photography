const videos = [
  { id: "e5PTuJy853o", title: "Sriharsha + Sravya Pre Wedding Teaser" },
  { id: "B5ICpOXqfoA", title: "Sai & Saraswathi Wedding Film" },
  { id: "Dcd4o7uCQLM", title: "Vamika 1st Birthday Promo" },
  { id: "3XdQzzumLXs", title: "Vamika Pre Birthday Promo 2026" },
  { id: "In8Z2kCmzJA", title: "Srinivas + Anitha House Warming Ceremony" },
];

const VideosSection = () => (
  <section className="py-20 md:py-28 bg-secondary">
    <div className="container">
      <div className="text-center mb-14">
        <p className="text-sm tracking-[0.3em] uppercase text-primary mb-2">Cinematic Stories</p>
        <h2 className="font-heading text-3xl md:text-4xl text-foreground">Featured Videos</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.slice(0, 3).map((v) => (
          <div key={v.id} className="relative aspect-video rounded-lg overflow-hidden border border-border">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 max-w-2xl mx-auto">
        {videos.slice(3).map((v) => (
          <div key={v.id} className="relative aspect-video rounded-lg overflow-hidden border border-border">
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
      <div className="text-center mt-8">
        <a
          href="https://www.youtube.com/@visualcapturephotography625"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 border border-primary text-primary text-sm tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all"
        >
          View All on YouTube
        </a>
      </div>
    </div>
  </section>
);

export default VideosSection;
