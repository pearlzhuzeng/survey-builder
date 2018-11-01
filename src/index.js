import React, { useState } from "react";
import ReactDOM from "react-dom";
import SurveyTitle from "./SurveyTitle";
import SurveyQuestion from "./SurveyQuestion";
import { useInputValue } from "./hooks";

import "./styles.css";

function SurveyBuilder() {
  const [title, handleChangeTitle] = useInputValue("Cross the bridge");
  const [questions, setQuestions] = useState([]);

  function setQuestion(question, index) {
    setQuestions([
      ...questions.slice(0, index),
      question,
      ...questions.slice(index + 1)
    ]);
  }

  function addQuestion() {
    setQuestions([
      ...questions,
      {
        text: "New Question",
        type: "Options: Pick One",
        options: ["A", "B", "C"]
      }
    ]);
  }

  return (
    <div className="small-container">
      <SurveyTitle title={title} handleChangeTitle={handleChangeTitle} />
      <button onClick={addQuestion}>Add Question</button>
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

const rootElement = document.getElementById("root");
ReactDOM.render(<SurveyBuilder />, rootElement);
