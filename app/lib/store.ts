import { create } from "zustand";
import report from "./data/report.json";
import { ReportData } from "./types";

type State = {
  data: ReportData;
  selectedRegion: string;
  selectedYear: string;
  verificationMode: boolean;
  setRegion: (region: string) => void;
  setYear: (year: string) => void;
  toggleVerification: () => void;
};

export const useStore = create<State>((set) => ({
  data: report as ReportData,
  selectedRegion: "south_west",
  selectedYear: "2022",
  verificationMode: false,
  setRegion: (region) => set({ selectedRegion: region }),
  setYear: (year) => set({ selectedYear: year }),
  toggleVerification: () =>
    set((state) => ({ verificationMode: !state.verificationMode })),
}));
