import { datesArr } from "./datesArray.js";
import { useState } from "react";

export default function Dates({ day, setSelectedDay }) {
  const [dates, setDates] = useState(datesArr);

  //   console.log(dates);
  console.log(day);

  function handleClickDate() {
    console.log("clicked");
    // when user clicks on calendar date update selectedDate state
  }

  return (
    <ul id="main-date-container">
      {dates.map((day) => {
        return (
          <li onClick={handleClickDate} className="date-container" key={day.id}>
            {day.date}
            <div className="mail"></div>
          </li>
        );
      })}
    </ul>
  );
}
