"use client";

import AboutUs from "@/components/AboutUs";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Loader from "@/components/Loader";
import Pills3D from "@/components/Pills3D";
import ServicesSection from "@/components/ServicesSection";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  return (
    <main className="min-h-screen">
      <div className="flex items-center flex-col justify-between lg:p-6 p-3 pt-5 relative gap-16">
          <HeroSection />
          <AboutUs />
          <ServicesSection />
          <ContactForm />
      </div>
    </main>
  );
}
