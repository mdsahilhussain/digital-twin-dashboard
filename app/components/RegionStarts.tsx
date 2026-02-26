"use client";

import { useMemo } from "react";
import { useStore } from "@/lib/store";

const RegionStats = () => {
  const { data, selectedRegion } = useStore();

  const regionData = useMemo(() => {
    return data.regions[selectedRegion];
  }, [data.regions, selectedRegion]);

  if (!regionData) return null;

  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div className="bg-gray-800 p-6 rounded-xl">
        <p className="text-gray-400">Pure-Play Firms</p>
        <h3 className="text-2xl font-bold mt-2">{regionData.pure_play}</h3>
      </div>

      <div className="bg-gray-800 p-6 rounded-xl">
        <p className="text-gray-400">Hybrid Firms</p>
        <h3 className="text-2xl font-bold mt-2">{regionData.hybrid}</h3>
      </div>
    </div>
  );
};

export default RegionStats;
