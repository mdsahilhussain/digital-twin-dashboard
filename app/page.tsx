"use client";
import dynamic from "next/dynamic";

import GrowthSection from "@/components/GrowthSection";
import KPISection from "@/components/KPISection";
import IrelandMap from "@/components/IrelandMap";
import RegionStats from "@/components/RegionStarts";
import { useStore } from "@/lib/store";
import SplitLayout from "@/components/SplitLayout";

const PDFViewer = dynamic(() => import("@/components/PDFViewer"), {
  ssr: false,
});

export default function Home() {
  const { verificationMode } = useStore();

  const dashboardContent = (
    <>
      <KPISection />
      <GrowthSection />
      <IrelandMap />
      <RegionStats />
    </>
  );
  return (
    <main className="min-h-screen bg-gray-950 text-white p-10 max-sm:px-4">
      <h1 className="text-3xl font-bold">Digital Twin Dashboard</h1>

      <SplitLayout
        leftChildren={dashboardContent}
        rightChildren={verificationMode && <PDFViewer />}
      />
    </main>
  );
}
