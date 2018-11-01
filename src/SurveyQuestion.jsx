import React, { useState } from "react";
import QuestionForm from "./QuestionForm";

export default function SurveyQuestion({ question, setQuestion, index }) {
  const [editing, setEditing] = useState(false);

  function toggleEditing() {
    setEditing(!editing);
  }

  return (
    <li>
      <button onClick={toggleEditing}>
        {editing ? "Save Question" : "Edit Question"}
      </button>
      {editing ? (
        <QuestionForm question={question} setQuestion={setQuestion} index={index}/>
      ) : (
        <>
          <p>{question.text}</p>
          {question.options ? (
            question.type === "Options: Pick One" ? (
              question.options.map(option => (
                <label>
                  <input
                    type="radio"
                    id={option}
                    name={option}
                    value={option}
                    diabled="disabled"
                  />
                  {option}
                </label>
              ))
            ) : (
              question.options.map(option => (
                <label>
                  <input
                    type="checkbox"
                    id={option}
                    name={option}
                    value={option}
                    diabled="disabled"
                  />
                  {option}
                </label>
              ))
            )
          ) : (
            <textarea />
          )}
        </>
      )}
    </li>
  );
}
