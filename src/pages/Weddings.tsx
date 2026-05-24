import GalleryPage from "@/components/GalleryPage";
import vc20 from "@/assets/weddings/vc20.jpg";
import vc21 from "@/assets/weddings/vc21.jpg";
import rs1 from "@/assets/weddings/rajesh-sindhu-1.jpg";
import rs2 from "@/assets/weddings/rajesh-sindhu-2.jpg";
import rsCover from "@/assets/weddings/rajesh-sindhu-cover.jpg";
import rajVidya from "@/assets/weddings/rajashekar-vidya.jpg";
import mandap from "@/assets/weddings/mandap-couple.jpg";
import goldenStage from "@/assets/weddings/golden-stage.jpg";
import redVeil from "@/assets/weddings/red-veil.jpg";
import doubleExp from "@/assets/weddings/double-exposure.jpg";
import orangeSaree from "@/assets/weddings/orange-saree.jpg";

const images = [
  { src: rsCover, alt: "Rajesh & Sindhu wedding story" },
  { src: redVeil, alt: "Flowing red veil moment" },
  { src: orangeSaree, alt: "Traditional bride and groom portrait" },
  { src: goldenStage, alt: "Golden mandap ceremony" },
  { src: mandap, alt: "Couple at the temple mandap" },
  { src: doubleExp, alt: "Double exposure love story" },
  { src: rajVidya, alt: "Rajashekar with Vidya" },
  { src: vc21, alt: "The Bride" },
  { src: rs1, alt: "Hitched forever" },
  { src: rs2, alt: "Love meets tradition" },
  { src: vc20, alt: "Bride magazine" },
];

const Weddings = () => <GalleryPage title="Weddings" subtitle="Love Stories" images={images} />;
export default Weddings;
