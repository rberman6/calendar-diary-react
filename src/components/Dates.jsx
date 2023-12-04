import { datesArr } from "./datesArray.js";
import { useState } from "react";

export default function Dates({ day, setSelectedDay, month, year, emoji }) {
  // dates array imported from datesArr.js, dates state contains 31 calendar days along with id
  const [dates, setDates] = useState(datesArr);

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

  // creates a new date object with selected year & month. Added 1 because months is zero indexed in JS for months. Setting it to zero gives you the last day of the selected month. This will return full date object
  const date = new Date(year, namedMonth.indexOf(month) + 1, 0);
  // console.log(typeof date);
  // extracts the days of the month from date object
  const daysInMonth = date.getDate();
  // filter the date objects. Return date property that is less than or equal to calculated daysInMonth.
  // this will filter correct calender days according to the named month
  const filteredDates = dates.filter((dateObj) => dateObj.date <= daysInMonth);

  function handleClickDate(clickedDay, id, month, year) {
    // update selectedDayState which will now include the full date when square on calendar is clicked
    const clickedSquare = `${year}-${month}-${clickedDay}`;
    setSelectedDay(clickedSquare);
    // map through the dates array to check if the id of the clickedSquare matches the date id in the date object in date state.
    // if there is a match, add a property called clicked with a boolean value, and that will conditionally render the className "clicked-color-change"
    setDates(
      dates.map((date) =>
        date.id === id
          ? { ...date, clicked: true }
          : { ...date, clicked: false }
      )
    );
  }
  // could not access the clickedSquare because its scoped to the handleclick function so store it another variable called markedDate
  const markedDate = `${day}`;

  return (
    <ul id="main-date-container">
      {filteredDates.map((day) => {
        return (
          <li
            onClick={() => handleClickDate(day.date, day.id, month, year)}
            className={day.clicked ? "clicked-color-change" : "date-container"}
            key={day.id}
          >
            {day.date}
            {/* issue with this condition below. Emoji renders after submit is fired but doesnt stay in same square when a different date text entry is submitted */}
            {day.clicked && <div className="emoji">{emoji[markedDate]}</div>}
          </li>
        );
      })}
    </ul>
  );
}
