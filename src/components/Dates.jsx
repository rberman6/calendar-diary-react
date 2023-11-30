import { datesArr } from "./datesArray.js";
import { useState } from "react";

export default function Dates({ day, setSelectedDay, month, year }) {
  const [dates, setDates] = useState(datesArr);

  //  console.log(dates);
  // console.log(day);
  // console.log(month);
  // console.log(year);

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

  // creates a new date object with selected year & month. Added 1 because months is zero indexed for months. Setting it to zero gives you the last day of the selected month
  const date = new Date(year, namedMonth.indexOf(month) + 1, 0);
  // extracts the day of the month from date object
  const daysInMonth = date.getDate();
  console.log(date);
  console.log(daysInMonth);

  // filter the date objects. Only include date property that is less than or equal to calculated daysInMonth
  const filteredDates = dates.filter((dateObj) => dateObj.date <= daysInMonth);
  console.log(filteredDates);
  console.log(daysInMonth);

  function handleClickDate(clickedDay) {
    // console.log("clicked");
    // update selectedDayState
    setSelectedDay(clickedDay);
    // console.log(clickedDay);
  }

  // console.log(day);

  return (
    <ul id="main-date-container">
      {filteredDates.map((day) => {
        return (
          <li
            onClick={() => handleClickDate(day.date)}
            className="date-container"
            key={day.id}
          >
            {day.date}
            <div className="mail"></div>
          </li>
        );
      })}
    </ul>
  );
}
