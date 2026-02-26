"use client";

import { useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Area,
} from "recharts";
import { useStore } from "@/lib/store";

const  GrowthSection =() =>{
  const { data, selectedYear, setYear } = useStore();

  const chartData = useMemo(() => {
    return Object.entries(data.projections).map(([year, value]) => ({
      year,
      jobs: value,
    }));
  }, [data.projections]);

  const gap = useMemo(() => {
    const target = data.projections["2030"];
    const current = data.projections[selectedYear];
    return target - current;
  }, [selectedYear, data.projections]);

  return (
    <section className="mt-16 w-full">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h2 className="text-xl font-semibold">
            Employment Growth Projection
          </h2>
          <p className="text-gray-400 text-sm mt-1">
            Gap to 2030 target: {gap.toLocaleString()} jobs
          </p>
        </div>

        <div className="w-full md:w-72">
          <label
            htmlFor="year-slider"
            className="block text-sm text-gray-300 mb-2"
          >
            Select Year: {selectedYear}
          </label>

          <input
            id="year-slider"
            type="range"
            min="2022"
            max="2030"
            step="3"
            value={selectedYear}
            onChange={(e) => setYear(e.target.value)}
            className="w-full accent-blue-500"
            aria-valuemin={2022}
            aria-valuemax={2030}
            aria-valuenow={Number(selectedYear)}
          />
        </div>
      </div>

      <div className="mt-8 h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <XAxis dataKey="year" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{ backgroundColor: "#111827", border: "none" }}
              labelStyle={{ color: "#fff" }}
            />
            <Area
              type="monotone"
              dataKey="jobs"
              stroke="none"
              fill="#1E3A8A"
              fillOpacity={0.2}
            />
            <Line
              type="monotone"
              dataKey="jobs"
              stroke="#3B82F6"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
              isAnimationActive
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}

export default GrowthSection