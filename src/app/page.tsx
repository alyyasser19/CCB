import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-6 pt-5">
      <div className="flex flex-col items-start">
        <HeroSection />
        <ServicesSection />
      </div>
    </main>
  );
}
