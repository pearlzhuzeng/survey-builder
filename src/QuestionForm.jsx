import React, { useState } from "react";

export default function QuestionForm({ question, setQuestion, index }) {
  function handleChangeText(e) {
    setQuestion({ ...question, text: e.target.value }, index);
  }

  function handleChangeType(e) {
    setQuestion({ ...question, type: e.target.value }, index);
  }

  function setOptions(options) {
    setQuestion({ ...question, options }, index);
  }

  function setOption(option, i) {
    setOptions([
      ...question.options.slice(0, i),
      option,
      ...question.options.slice(i + 1)
    ]);
  }

  function addOption() {
    setOptions([...question.options, ""]);
  }

  return (
    <div>
      <label>Question Text:</label>
      <input type="text" value={question.text} onChange={handleChangeText} />

      <label for="question-type">Question Type:</label>
      <select
        id="question-type"
        value={question.type}
        onChange={handleChangeType}
      >
        <option value="">--Please choose an option--</option>
        <option value="Options: Pick One">Options: Pick One</option>
        <option value="Options: Pick Any Number">
          Options: Pick Any Number
        </option>
        <option value="Short Answer">Short Answer</option>
      </select>

      {question.options ? (
        <fieldset>
          {question.options.map((option, i) => (
            <input
              type="text"
              placeholder="Enter option"
              name={option}
              value={option}
              onChange={e => setOption(e.target.value, i)}
            />
          ))}
        </fieldset>
      ) : (
        <textarea />
      )}
      <button onClick={addOption}>Add Option</button>
    </div>
  );
}
