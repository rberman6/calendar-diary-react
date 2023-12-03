import { useState } from "react";

export default function Form({ day, emoji, setEmoji }) {
  // textentry will be obj with specific date property & value will be the text
  const [textEntry, setTextEntry] = useState({});
  // disabled will be obj with specifc date property with a boolean value
  const [displayText, setDisplayText] = useState({});

  function handleOnChange(e, day) {
    const dateId = `${day}`;
    setTextEntry({
      ...textEntry,
      [dateId]: e.target.value,
    });
  }

  console.log(textEntry);

  function handleSubmit(e, day) {
    e.preventDefault();
    const dateId = `${day}`;
    setDisplayText({
      ...displayText,
      [dateId]: true,
    });
    // Create an obj that stores the specfic date as property and value would be true
    // when user clicks button, textarea will be disable when displayText[dateId] state is true using conditional rendering
    setEmoji({
      ...emoji,
      [dateId]: "💌",
    });
  }

  console.log(emoji);

  const currentDate = `${day}`;
  console.log(typeof currentDate);

  return (
    <div id="container">
      {displayText[currentDate] ? (
        <div className="text-display">
          <p className="text-style">{textEntry[currentDate]}</p>
        </div>
      ) : (
        <div>
          <h3 className="form-instructions">
            Select a date & add an entry below:
          </h3>
          <form
            onSubmit={(e) => handleSubmit(e, day)}
            className="form-container"
          >
            <textarea
              onChange={(e) => handleOnChange(e, day)}
              value={textEntry[currentDate]}
              cols="76"
              rows="10"
            ></textarea>
            <button className="form-button">Add Entry</button>
          </form>
        </div>
      )}
    </div>
  );
}
