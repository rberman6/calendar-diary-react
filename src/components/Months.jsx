"use client";
import { useState } from "react";
import isMyDateValid from "is-my-date-valid";

export default function Months({ month, setSelectedMonth }) {
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
    console.log("clicked");
  }

  function handleClickForward() {
    console.log("clicked");
    let i = namedMonth.indexOf(month);
    console.log("Current month index:", i);
    if (i < namedMonth.length - 1) {
      i++;
      console.log(("New month index:", i));
    }
    setSelectedMonth(namedMonth[i]);
    console.log(namedMonth[i]);
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