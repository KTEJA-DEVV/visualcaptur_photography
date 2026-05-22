import { Phone, Instagram, Youtube, MessageCircle } from "lucide-react";

const actions = [
  {
    label: "Call",
    href: "tel:+918096143780",
    icon: Phone,
    color: "bg-ink text-cream hover:bg-ink-soft",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/918096143780",
    icon: MessageCircle,
    color: "bg-whatsapp text-white hover:opacity-90",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/visualcapturephotography",
    icon: Instagram,
    color: "bg-instagram text-white hover:opacity-90",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@visualcapturephotography625",
    icon: Youtube,
    color: "bg-youtube text-white hover:opacity-90",
  },
];

const FloatingActions = () => (
  <>
    {/* Desktop: vertical right rail */}
    <div className="hidden md:flex fixed right-5 top-1/2 -translate-y-1/2 z-40 flex-col gap-3">
      {actions.map(({ label, href, icon: Icon, color }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          aria-label={label}
          className={`group relative h-12 w-12 rounded-full grid place-items-center shadow-lift transition-transform hover:scale-110 ${color}`}
        >
          <Icon size={20} />
          <span className="pointer-events-none absolute right-full mr-3 px-2 py-1 rounded-md bg-ink text-cream text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            {label}
          </span>
        </a>
      ))}
    </div>

    {/* Mobile: bottom dock */}
    <div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 bg-ink/95 backdrop-blur-md rounded-full px-2 py-2 shadow-lift border border-ink-soft/40">
      {actions.map(({ label, href, icon: Icon, color }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          aria-label={label}
          className={`h-11 w-11 rounded-full grid place-items-center transition-transform active:scale-95 ${color}`}
        >
          <Icon size={18} />
        </a>
      ))}
    </div>
  </>
);

export default FloatingActions;
