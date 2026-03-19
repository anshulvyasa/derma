import HeroSection from "../components/home/hero-section";
import FacilitySection from "../components/home/facility-section";
import Services from "../components/home/services";
import Qualification from "../components/home/qualification";
import TestimonialCarousel from "@/components/home/TestimonialCarousel";
import DermatologyUI from "@/components/home/ServiceBlock";
export default function Home() {
  return (
    <>
      <HeroSection />
      <FacilitySection />
      <Services />
      <DermatologyUI />
      <Qualification />
      <TestimonialCarousel />
    </>
  );
}