"use client";

import { memo, useCallback } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { useStore } from "@/lib/store";

const geoUrl = "/ireland-geo.json";

const IrelandMap = () => {
  const { selectedRegion, setRegion } = useStore();

  const handleSelect = useCallback(
    (region: string) => {
      setRegion(region);
    },
    [setRegion]
  );

  return (
    <section className="mt-16 w-full">
      <h2 className="text-xl font-semibold mb-6">Regional Distribution</h2>

      <div className="w-full h-100 bg-gray-900 rounded-2xl p-4">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{ scale: 3000, center: [-8, 53] }}
          className="w-full h-full"
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const regionName = geo.properties.name;
                const isActive = selectedRegion === regionName;

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => handleSelect(regionName)}
                    onFocus={() => handleSelect(regionName)}
                    tabIndex={0}
                    role="button"
                    aria-label={`Select ${regionName} region`}
                    className="cursor-pointer outline-none"
                    style={{
                      default: {
                        fill: isActive ? "#3B82F6" : "#374151",
                        stroke: "#111827",
                        strokeWidth: 0.5,
                      },
                      hover: {
                        fill: "#2563EB",
                      },
                      pressed: {
                        fill: "#1D4ED8",
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
      </div>
    </section>
  );
};

export default memo(IrelandMap);
