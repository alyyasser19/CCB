import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  justify-between pl-12 pt-5">
      <div className="flex flex-col items-start">
        <HeroSection />
      </div>
    </main>
  );
}
