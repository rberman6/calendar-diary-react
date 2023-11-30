"use client";
import { useState } from "react";
import isMyDateValid from "is-my-date-valid";

export default function Years({ year }) {
  const [years, setYears] = useState();

  return (
    <main>
      <div id="year-container">
        <button className="calendar-btn">Previous</button>
        <h2>{year}</h2>
        <button className="calendar-btn">Forward</button>
      </div>
    </main>
  );
}
