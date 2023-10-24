import { useState } from "react";

const Question = ({question, options, onAnswer}) => {
  const [selectedOption, setSelectedOption] = useState("");
  const handleNextQuestion = () => {
    if (selectedOption === "그렇다.") {
      onAnswer(question.YES);
    } else {
      onAnswer(question.No);
    }
  };
  const handleOtionChange = (e) => {
    setSelectedOption(e.target.value);
  };
  return (
    <>
      <div>
        <h2>{question.question}</h2>
        <form action="">
          {options.map((option) => (
            <div key={option}>
              <label htmlFor="">
                <input
                  type="radio"
                  name="option"
                  value={option}
                  onChange={handleOtionChange}
                />
                {option}
              </label>
            </div>
          ))}
        </form>
        <br />
        <br />
        <button onClick={handleNextQuestion}>Next</button>
      </div>
    </>
  );
};

export default Question;
