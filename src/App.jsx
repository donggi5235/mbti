import { useState } from "react";
import { options, questionsMBTI } from "./answer";
import Question from "./Question";

const App = () => {
  const [answers, setAnswers] = useState([]);
  const [index, setIndex] = useState(0);

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);

    if (index < questionsMBTI.length) {
      setIndex(index + 1);
    } else {
      const mbtiType = calculateMBTIType(answers);
      alert(`당신의 MBTI의 결과는 ${mbtiType}`);
      window.location.reload();
    }
  };

  const calculateMBTIType = (answers) => {
    const dimensionCounts = {
      E: 0,
      I: 0,
      S: 0,
      N: 0,
      T: 0,
      F: 0,
      J: 0,
      P: 0,
    };
    answers.forEach((char) => {
      dimensionCounts[char]++;
    });
    // Determine the MBTI type
    const mbtiType = [
      dimensionCounts["E"] > dimensionCounts["I"] ? "E" : "I",
      dimensionCounts["S"] > dimensionCounts["N"] ? "S" : "N",
      dimensionCounts["T"] > dimensionCounts["F"] ? "T" : "F",
      dimensionCounts["J"] > dimensionCounts["P"] ? "J" : "P",
    ].join("");
    return mbtiType;
  };

  return (
    <>
      <div>
        {index < questionsMBTI.length ? (
          <Question
            question={questionsMBTI[index]}
            options={options[0].options}
            onAnswer={handleAnswer}
          />
        ) : (
          <button onClick={handleAnswer}>결과보기</button>
        )}
      </div>
    </>
  );
};

export default App;
