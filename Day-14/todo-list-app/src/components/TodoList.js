function TodoList({ todos }) {
  return (
    <ul className="list-group">
      {todos.map((todo, index) => (
        <li key={index} className="list-group-item">
          {todo}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
