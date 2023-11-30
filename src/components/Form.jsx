import { useState } from "react";

export default function Form({ day, month, year }) {
  console.log(day);
  console.log(month);
  console.log(year);

  const [userInput, setUserInput] = useState("");

  function handleOnChange(e) {
    console.log(e.target.value);
    setUserInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submit");
  }

  return (
    <div id="container">
      <form onSubmit={handleSubmit} className="form-container">
        <textarea
          onChange={handleOnChange}
          value={userInput}
          cols="76"
          rows="10"
        ></textarea>
        <button className="form-button">Submit</button>
      </form>
    </div>
  );
}
