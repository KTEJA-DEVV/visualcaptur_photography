import { MapPin, Navigation } from "lucide-react";

const MapSection = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container">
      <div className="text-center mb-12">
        <p className="eyebrow mb-3">Visit the Studio</p>
        <h2 className="font-heading text-4xl md:text-5xl text-ink">
          Find us in <span className="italic text-coral">Hastinapuram</span>
        </h2>
      </div>
      <div className="relative rounded-3xl overflow-hidden aspect-[16/9] md:aspect-[16/7] shadow-lift">
        <iframe
          title="Visual Capture Photography Location"
          src="https://www.google.com/maps?q=Visual+Capture+Photography+Hastinapuram+Hyderabad&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
        />
        <div className="absolute bottom-4 left-4 right-4 md:right-auto md:max-w-sm bg-cream/95 backdrop-blur-md rounded-2xl p-4 shadow-lift">
          <div className="flex items-start gap-3">
            <div className="h-10 w-10 rounded-full bg-coral/15 grid place-items-center shrink-0">
              <MapPin size={18} className="text-coral" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-heading text-ink text-base">Visual Capture Studio</p>
              <p className="text-muted-foreground text-xs mt-0.5">
                Shop 7, 8-91/145, Phase 4, Hastinapuram, Hyderabad
              </p>
              <a
                href="https://maps.app.goo.gl/NeXus41GmaxSsix66"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-2 text-xs font-medium text-coral hover:underline"
              >
                <Navigation size={12} /> Get directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default MapSection;
