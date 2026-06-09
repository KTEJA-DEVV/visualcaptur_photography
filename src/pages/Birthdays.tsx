import GalleryPage from "@/components/GalleryPage";
import oxCart from "@/assets/birthdays/ox-cart.jpg";
import moonOne from "@/assets/birthdays/moon-one.jpg";
import wavingBoy from "@/assets/birthdays/waving-boy.jpg";
import pinkPrincess from "@/assets/birthdays/pink-princess.jpg";
import balloonBasket from "@/assets/birthdays/balloon-basket.jpg";
import greenYellowDress from "@/assets/birthdays/green-yellow-dress.jpg";
import littleDoctor from "@/assets/birthdays/little-doctor.jpg";
import templeBaby from "@/assets/birthdays/temple-baby.jpg";
import littleArtist from "@/assets/birthdays/little-artist.jpg";
import balloonArch from "@/assets/birthdays/balloon-arch.jpg";
import cloudStars from "@/assets/birthdays/cloud-stars.jpg";
import saveTheDate from "@/assets/birthdays/save-the-date.jpg";
import littleKing from "@/assets/birthdays/little-king.jpg";
import flowerCart from "@/assets/birthdays/flower-cart.jpg";
import littleRider from "@/assets/birthdays/little-rider.jpg";
import gardenPrincess from "@/assets/birthdays/garden-princess.jpg";

const images = [
  { src: oxCart, alt: "Birthday portrait with wooden cart setup" },
  { src: moonOne, alt: "One year birthday moon setup" },
  { src: wavingBoy, alt: "Smiling child birthday portrait" },
  { src: pinkPrincess, alt: "Little girl in pink birthday dress" },
  { src: balloonBasket, alt: "Baby in hot air balloon birthday setup" },
  { src: greenYellowDress, alt: "Toddler birthday portrait outdoors" },
  { src: littleDoctor, alt: "Doctor theme birthday portrait" },
  { src: templeBaby, alt: "Baby in traditional attire with temple backdrop" },
  { src: littleArtist, alt: "Toddler with paintbrush and ABC easel" },
  { src: balloonArch, alt: "Baby girl seated between blue balloon arches" },
  { src: cloudStars, alt: "Smiling baby in coral dress with clouds and stars" },
  { src: saveTheDate, alt: "Save the date birthday announcement portrait" },
  { src: littleKing, alt: "Little king on a golden throne with lions" },
  { src: flowerCart, alt: "Toddler on bullock cart with floral backdrop" },
  { src: littleRider, alt: "Toddler on blue toy motorbike outdoors" },
  { src: gardenPrincess, alt: "Little girl in red and green traditional dress" },
];

const Birthdays = () => <GalleryPage title="Birthdays" subtitle="Celebrations" images={images} />;
export default Birthdays;
