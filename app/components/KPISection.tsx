"use client"

import { useStore } from "@/lib/store"


const  KPISection = () => {
  const { data, toggleVerification } = useStore()

  const jobs = data.metrics.total_jobs.value

  return (
    <div className="grid grid-cols-3 gap-6 mt-10">
      <div
        onClick={toggleVerification}
        className="bg-gray-800 p-2.5 md:p-6 rounded-xl cursor-pointer hover:bg-gray-700 transition"
      >
        <p className="text-gray-400 text-xs md:text-base">Total Jobs</p>
        <h2 className="text-2xl md:text-3xl font-bold mt-1 md:mt-2">{jobs.toLocaleString()}</h2>
      </div>
    </div>
  )
}

export default KPISection