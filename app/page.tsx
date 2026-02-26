import GrowthSection from "@/components/GrowthSection";
import KPISection from "@/components/KPISection";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white p-10 max-sm:px-4">
      <h1 className="text-3xl font-bold">Digital Twin Dashboard</h1>
      <KPISection />
      <GrowthSection />
    </main>
  );
}
