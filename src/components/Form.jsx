import { useState } from "react";

export default function Form({ day, emoji, setEmoji }) {
  // textentry will be obj with specific date property & value will be the text
  const [textEntry, setTextEntry] = useState({});
  // disabled will be obj with specifc date property with a boolean value
  const [displayText, setDisplayText] = useState({});

  function handleOnChange(e, day) {
    const date = `${day}`;
    setTextEntry((prevState) => ({
      ...prevState,
      [date]: e.target.value,
    }));
  }

  console.log(textEntry);

  function handleSubmit(e, day) {
    e.preventDefault();
    const date = `${day}`;
    setDisplayText({
      ...displayText,
      [date]: true,
    });
    // Create an obj that stores the specfic date as property and value would be true
    // when user clicks button, textarea will be disable when disable[date] state is true using conditional rendering
    setEmoji((prevState) => ({
      ...prevState,
      [date]: "💌",
    }));
  }

  console.log(emoji);

  const currentDate = `${day}`;
  console.log(typeof currentDate);

  return (
    <div id="container">
      {displayText[currentDate] ? (
        <p className="text-display">{textEntry[currentDate]}</p>
      ) : (
        <form onSubmit={(e) => handleSubmit(e, day)} className="form-container">
          <textarea
            onChange={(e) => handleOnChange(e, day)}
            value={textEntry[currentDate]}
            cols="76"
            rows="10"
          ></textarea>
          <button className="form-button">Add Entry</button>
        </form>
      )}
    </div>
  );
}
