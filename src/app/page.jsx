"use client";

import Months from "@/components/Months.jsx";
import Years from "@/components/Years.jsx";
import { useState } from "react";

export default function App() {
  let year = new Date().getFullYear();
  let month = new Date().toLocaleString("en-US", { month: "long" });
  const [selectedYear, setSelectedYear] = useState(year);
  const [selectedMonth, setSelectedMonth] = useState(month);

  return (
    <main id="flex-container">
      <h1>Calendar Dairy</h1>
      <Months setSelectedMonth={setSelectedMonth} month={selectedMonth} />
      <Years year={selectedYear} />
    </main>
  );
}
