"use client"

import { useStore } from "@/lib/store"


export default function KPISection() {
  const { data, toggleVerification } = useStore()

  const jobs = data.metrics.total_jobs.value

  return (
    <div className="grid grid-cols-3 gap-6 mt-10">
      <div
        onClick={toggleVerification}
        className="bg-gray-800 p-6 rounded-xl cursor-pointer hover:bg-gray-700 transition"
      >
        <p className="text-gray-400">Total Jobs</p>
        <h2 className="text-3xl font-bold mt-2">{jobs.toLocaleString()}</h2>
      </div>
    </div>
  )
}