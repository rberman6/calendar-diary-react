import { useState } from "react";

export default function Form({ day, month, year }) {
  // console.log(day);
  // console.log(month);
  // console.log(year);

  // textentry will be obj with specific date property & value will be the text
  const [textEntry, setTextEntry] = useState({});
  // disabled will be obj with specifc date property with a boolean value
  const [disabled, setDisabled] = useState({});
  const [emoji, setEmoji] = useState(false);

  function handleOnChange(e, year, month, day) {
    const date = `${year}-${month}-${day}`;
    setTextEntry((prevState) => ({
      ...prevState,
      [date]: e.target.value,
    }));
  }

  console.log(textEntry);

  const currentDate = `${year}-${month}-${day}`;

  function handleSubmit(e, year, month, day) {
    e.preventDefault();
    const date = `${year}-${month}-${day}`;
    setDisabled((prevState) => ({
      ...prevState,
      [date]: true,
    }));
    // Create an obj that stores the specfic date as property and value would be true
    // when user clicks button, textarea will be disable when disable[date] state is true using conditional rendering
  }

  console.log(disabled);

  return (
    <div id="container">
      {disabled[currentDate] ? (
        <p>{textEntry[currentDate]}</p>
      ) : (
        <form
          onSubmit={(e) => handleSubmit(e, year, month, day)}
          className="form-container"
        >
          <textarea
            onChange={(e) => handleOnChange(e, year, month, day)}
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
