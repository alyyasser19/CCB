"use client";

import HeroSection from "@/components/HeroSection";
import Loader from "@/components/Loader";
import Pills3D from "@/components/Pills3D";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  return (
    <main className="min-h-screen">
      <div className="flex items-center flex-col justify-between p-6 pt-5 relative">
        <Pills3D setLoading={setLoading} />
        {loading ? (
          <div className="h-48">
            <Loader />
          </div>
        ) : (
          <>
            <HeroSection />
          </>
        )}
      </div>
    </main>
  );
}
