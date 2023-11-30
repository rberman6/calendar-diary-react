"use client";

import Months from "@/components/Months.jsx";
import Years from "@/components/Years.jsx";
import { useState } from "react";
import Dates from "@/components/Dates.jsx";

export default function App() {
  let month = new Date().toLocaleString("en-US", { month: "long" });
  let year = new Date().getFullYear();
  let day = new Date().getDate();
  const [selectedYear, setSelectedYear] = useState(year);
  const [selectedMonth, setSelectedMonth] = useState(month);
  const [selectedDay, setSelectedDay] = useState(day);
  // console.log(selectedYear);
  // console.log(day);

  return (
    <main id="flex-container">
      <h1>Calendar Dairy</h1>
      <Months setSelectedMonth={setSelectedMonth} month={selectedMonth} />
      <Years setSelectedYear={setSelectedYear} year={selectedYear} />
      <Dates day={selectedDay} setSelectedDay={setSelectedDay} />
    </main>
  );
}
