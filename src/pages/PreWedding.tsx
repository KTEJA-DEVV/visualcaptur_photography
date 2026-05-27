import GalleryPage from "@/components/GalleryPage";
import staircase from "@/assets/prewedding/staircase-couple.jpg";
import sunset from "@/assets/prewedding/sunset-silhouette.jpg";
import redBridge from "@/assets/prewedding/red-dress-bridge.jpg";
import temple from "@/assets/prewedding/temple-flamingo.jpg";
import yellow from "@/assets/prewedding/yellow-balcony.jpg";
import lake from "@/assets/prewedding/lake-lift.jpg";
import cherry from "@/assets/prewedding/cherry-tree-doorway.jpg";
import yellowTree from "@/assets/prewedding/yellow-tree-mist.jpg";
import disco from "@/assets/prewedding/disco-dip.jpg";
import royalArch from "@/assets/prewedding/royal-arch.jpg";
import moonPink from "@/assets/prewedding/moon-pink-flow.jpg";
import horseSunset from "@/assets/prewedding/horse-sunset.jpg";
import fieldPicnic from "@/assets/prewedding/field-picnic.jpg";
import horseRed from "@/assets/prewedding/horse-redsaree.jpg";
import bohoArch from "@/assets/prewedding/boho-arch.jpg";

const images = [
  { src: cherry, alt: "Cherry blossom doorway" },
  { src: moonPink, alt: "Moon backdrop pink flow" },
  { src: yellowTree, alt: "Yellow tree mist embrace" },
  { src: disco, alt: "Disco dance dip" },
  { src: royalArch, alt: "Royal arch portrait" },
  { src: horseSunset, alt: "Horse silhouette sunset" },
  { src: horseRed, alt: "Couple with horse red saree" },
  { src: bohoArch, alt: "Boho field arch" },
  { src: fieldPicnic, alt: "Field picnic moment" },
  { src: staircase, alt: "Couple on grand staircase" },
  { src: sunset, alt: "Sunset silhouette couple" },
  { src: redBridge, alt: "Red dress bridge shoot" },
  { src: temple, alt: "Temple flamingo pre-wedding" },
  { src: yellow, alt: "Yellow dress balcony" },
  { src: lake, alt: "Lake lift moment" },
];

const PreWedding = () => <GalleryPage title="Pre Wedding" subtitle="Love in Frames" images={images} />;
export default PreWedding;
