"use client";

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
    console.log(i);
    if (i === 0) {
      return;
    }
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
    <div id="month-div">
      <div id="month-container">
        <button onClick={handleClickPrevious} className="calendar-btn">
          Previous
        </button>
        <h2>{month}</h2>
        <button onClick={handleClickForward} className="calendar-btn">
          Next
        </button>
      </div>
    </div>
  );
}
