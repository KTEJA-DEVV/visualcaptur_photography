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
import brideRiceShower from "@/assets/weddings/bride-rice-shower.jpg";
import bridePalmPortrait from "@/assets/weddings/bride-palm-portrait.jpg";
import palmCoupleRest from "@/assets/weddings/palm-couple-rest.jpg";
import doorwayCoupleLook from "@/assets/weddings/doorway-couple-look.jpg";

const images = [
  { src: rsCover, alt: "Rajesh & Sindhu wedding story" },
  { src: brideRiceShower, alt: "Bride in a rice shower ritual" },
  { src: redVeil, alt: "Flowing red veil moment" },
  { src: orangeSaree, alt: "Traditional bride and groom portrait" },
  { src: bridePalmPortrait, alt: "Bride portrait with palm leaves" },
  { src: goldenStage, alt: "Golden mandap ceremony" },
  { src: mandap, alt: "Couple at the temple mandap" },
  { src: palmCoupleRest, alt: "Couple portrait by palm leaves" },
  { src: doubleExp, alt: "Double exposure love story" },
  { src: rajVidya, alt: "Rajashekar with Vidya" },
  { src: doorwayCoupleLook, alt: "Bride and groom by wooden doorway" },
  { src: vc21, alt: "The Bride" },
  { src: rs1, alt: "Hitched forever" },
  { src: rs2, alt: "Love meets tradition" },
  { src: vc20, alt: "Bride magazine" },
];

const Weddings = () => <GalleryPage title="Weddings" subtitle="Love Stories" images={images} />;
export default Weddings;
