'use client'

import React, { useState } from 'react'
import GithubCalendar from 'react-github-calendar'

export default function MyGithubCalendar() {
  const [year, setYear] = useState(new Date().getFullYear())

  const isActive = (btnYear: number) =>
    year === btnYear
      ? 'bg-white text-black border border-black'
      : 'bg-transparent text-white border border-white hover:bg-white hover:text-black transition'

  return (
    <div className="w-full h-full my-20 flex justify-center">
      <div className="flex flex-col items-start">
        <h1 className="text-4xl font-bold mb-4">Github Contribution Graph</h1>
        <div className="flex justify-center items-center w-full gap-4">
          <div className="w-full border-2 rounded-lg p-4">
            <GithubCalendar username="ClarenceLaria" year={year} />
          </div>
          <div className="space-y-4">
            <button
              className={`ml-4 px-6 py-2 rounded-4xl text-sm font-medium cursor-pointer ${isActive(2025)}`}
              onClick={() => setYear(2025)}
            >
              2025
            </button>
            <button
              className={`ml-4 px-6 py-2 rounded-4xl text-sm font-medium cursor-pointer ${isActive(2024)}`}
              onClick={() => setYear(2024)}
            >
              2024
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
