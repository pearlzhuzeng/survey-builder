import React, { useState } from "react";
import ReactDOM from "react-dom";
import SurveyTitle from "./SurveyTitle";
import SurveyQuestion from "./SurveyQuestion";

import "./styles.css";

function SurveyBuilder() {
  const [title, handleChangeTitle] = useInputValue("Cross the bridge");
  const [questions, setQuestions] = useState([
    {
      text: "What is your favorite color?",
      type: "Options: Pick One",
      options: ["Blue", "Yellow", "Red", "Green"]
    },
    {
      text: "What is your quest?",
      type: "Short Answer",
      options: null
    },
    {
      text: "What is the air-speed velocity of an unladen swallow?",
      type: "Options: Pick Any Number",
      options: ["43", "I don't know that", "African or European?"]
    }
  ]);

  // handleChangeQuestions: (Question[]) => void

  function setQuestion(question, index) {
    setQuestions([
      ...questions.slice(0, index),
      question,
      ...questions.slice(index + 1)
    ]);
  }

  return (
    <div className="small-container">
      <SurveyTitle title={title} handleChangeTitle={handleChangeTitle} />
      <ol>
        {questions.map((question, i) => (
          <SurveyQuestion
            question={question}
            index={i}
            setQuestion={setQuestion}
          />
        ))}
      </ol>
    </div>
  );
}

function useInputValue(initial) {
  const [value, setValue] = useState(initial);
  const handleChangeValue = e => setValue(e.target.value);
  return [value, handleChangeValue];
}

const rootElement = document.getElementById("root");
ReactDOM.render(<SurveyBuilder />, rootElement);
