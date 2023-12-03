"use client";
import { useState } from "react";

export default function Years({ year, setSelectedYear }) {
  function handleClickIncrement() {
    setSelectedYear(year + 1);
  }

  function handleClickDecrement() {
    setSelectedYear(year - 1);
  }

  return (
    <main>
      <div id="year-container">
        <button onClick={handleClickDecrement} className="calendar-btn">
          Previous
        </button>
        <h2>{year}</h2>
        <button onClick={handleClickIncrement} className="calendar-btn">
          Forward
        </button>
      </div>
    </main>
  );
}
