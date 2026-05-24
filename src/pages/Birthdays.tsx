import GalleryPage from "@/components/GalleryPage";
import oxCart from "@/assets/birthdays/ox-cart.jpg";
import moonOne from "@/assets/birthdays/moon-one.jpg";
import wavingBoy from "@/assets/birthdays/waving-boy.jpg";
import pinkPrincess from "@/assets/birthdays/pink-princess.jpg";
import balloonBasket from "@/assets/birthdays/balloon-basket.jpg";
import greenYellowDress from "@/assets/birthdays/green-yellow-dress.jpg";
import littleDoctor from "@/assets/birthdays/little-doctor.jpg";

const images = [
  { src: oxCart, alt: "Birthday portrait with wooden cart setup" },
  { src: moonOne, alt: "One year birthday moon setup" },
  { src: wavingBoy, alt: "Smiling child birthday portrait" },
  { src: pinkPrincess, alt: "Little girl in pink birthday dress" },
  { src: balloonBasket, alt: "Baby in hot air balloon birthday setup" },
  { src: greenYellowDress, alt: "Toddler birthday portrait outdoors" },
  { src: littleDoctor, alt: "Doctor theme birthday portrait" },
];

const Birthdays = () => <GalleryPage title="Birthdays" subtitle="Celebrations" images={images} />;
export default Birthdays;
