import { Play } from "lucide-react";

const placeholderVideos = [
  { id: 1, title: "Wedding Highlights" },
  { id: 2, title: "Baby Bump Session" },
  { id: 3, title: "Birthday Celebration" },
  { id: 4, title: "Corporate Event" },
  { id: 5, title: "Engagement Shoot" },
];

const VideosSection = () => (
  <section className="py-20 md:py-28 bg-secondary">
    <div className="container">
      <div className="text-center mb-14">
        <p className="text-sm tracking-[0.3em] uppercase text-primary mb-2">Cinematic Stories</p>
        <h2 className="font-heading text-3xl md:text-4xl text-foreground">Featured Videos</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {placeholderVideos.slice(0, 3).map((v) => (
          <div key={v.id} className="group relative aspect-video bg-muted rounded-lg overflow-hidden cursor-pointer">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Play size={24} className="text-primary ml-1" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="text-sm font-heading text-foreground">{v.title}</p>
              <p className="text-xs text-muted-foreground">Replace with your video</p>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 max-w-2xl mx-auto">
        {placeholderVideos.slice(3).map((v) => (
          <div key={v.id} className="group relative aspect-video bg-muted rounded-lg overflow-hidden cursor-pointer">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Play size={24} className="text-primary ml-1" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="text-sm font-heading text-foreground">{v.title}</p>
              <p className="text-xs text-muted-foreground">Replace with your video</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default VideosSection;
