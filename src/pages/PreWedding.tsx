import GalleryPage from "@/components/GalleryPage";
import staircase from "@/assets/prewedding/staircase-couple.jpg";
import sunset from "@/assets/prewedding/sunset-silhouette.jpg";
import redBridge from "@/assets/prewedding/red-dress-bridge.jpg";
import temple from "@/assets/prewedding/temple-flamingo.jpg";
import yellow from "@/assets/prewedding/yellow-balcony.jpg";
import lake from "@/assets/prewedding/lake-lift.jpg";

const images = [
  { src: staircase, alt: "Couple on grand staircase" },
  { src: sunset, alt: "Sunset silhouette couple" },
  { src: redBridge, alt: "Red dress bridge shoot" },
  { src: temple, alt: "Temple flamingo pre-wedding" },
  { src: yellow, alt: "Yellow dress balcony" },
  { src: lake, alt: "Lake lift moment" },
];

const PreWedding = () => <GalleryPage title="Pre Wedding" subtitle="Love in Frames" images={images} />;
export default PreWedding;
