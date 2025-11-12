import { useState } from "react";
import TodoActions from "../actions/TodoActions";

function AddTodo() {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim() !== "") {
      TodoActions.addTodo(text);
      setText("");
    }
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Write a todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="btn btn-primary" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
}

export default AddTodo;
