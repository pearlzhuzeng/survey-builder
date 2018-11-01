import React, { useState } from "react";

export default function SurveyTitle({ title, handleChangeTitle }) {
  const [editing, setEditing] = useState(false);

  function toggleEditing() {
    setEditing(!editing);
  }

  return (
    <div>
      <h1>
        {editing ? (
          <input type="text" value={title} onChange={handleChangeTitle} />
        ) : (
          title
        )}
      </h1>
      <button onClick={toggleEditing}>
        {editing ? "Save Title" : "Edit Title"}
      </button>
    </div>
  );
}
