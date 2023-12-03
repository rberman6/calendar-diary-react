"use client";
import { useState } from "react";
import isMyDateValid from "is-my-date-valid";

export default function Months({ month, setSelectedMonth }) {
  // console.log(typeof month);
  const namedMonth = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  function handleClickPrevious() {
    let i = namedMonth.indexOf(month);
    if (i < namedMonth.length) {
      i--;
    }
    setSelectedMonth(namedMonth[i]);
  }

  function handleClickForward() {
    let i = namedMonth.indexOf(month);
    if (i < namedMonth.length - 1) {
      i++;
    }
    setSelectedMonth(namedMonth[i]);
  }

  return (
    <main id="flex-container">
      <div id="month-container">
        <button onClick={handleClickPrevious} className="calendar-btn">
          Previous
        </button>
        <h2>{month}</h2>
        <button onClick={handleClickForward} className="calendar-btn">
          Forward
        </button>
      </div>
    </main>
  );
}
