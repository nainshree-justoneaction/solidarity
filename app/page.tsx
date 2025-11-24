import HeroSection from "@/components/HeroSection";
import ProfilesSection from "@/components/ProfileSection/ProfileSection";
import PlanSection from "@/components/PlanSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <HeroSection />
      <ProfilesSection />
      <PlanSection />
      <Footer />
    </div>
  );
}
