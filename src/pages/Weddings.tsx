import GalleryPage from "@/components/GalleryPage";
import vc20 from "@/assets/weddings/vc20.jpg";
import vc21 from "@/assets/weddings/vc21.jpg";
import rs1 from "@/assets/weddings/rajesh-sindhu-1.jpg";
import rs2 from "@/assets/weddings/rajesh-sindhu-2.jpg";
import rsCover from "@/assets/weddings/rajesh-sindhu-cover.jpg";

const images = [
  { src: rsCover, alt: "Rajesh & Sindhu wedding story" },
  { src: vc21, alt: "The Bride" },
  { src: rs1, alt: "Hitched forever" },
  { src: rs2, alt: "Love meets tradition" },
  { src: vc20, alt: "Bride magazine" },
];

const Weddings = () => <GalleryPage title="Weddings" subtitle="Love Stories" images={images} />;
export default Weddings;
