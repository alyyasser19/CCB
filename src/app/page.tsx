"use client";
import AboutUs from "@/components/AboutUs";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-6 pt-5">
      <div className="flex flex-col items-start gap-8">
        <HeroSection />
        <div className="flex flex-col w-full gap-24">
          <AboutUs />
          <ServicesSection />
        </div>
      </div>
    </main>
  );
}
