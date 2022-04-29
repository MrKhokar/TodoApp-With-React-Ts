import React from "react";
import "./StyleTodoList.css";

interface TodoListProps {
  todos: { id: string; text: string }[];
  deleteHandler: (todoId: string) => void;
}

const TodoList: React.FunctionComponent<TodoListProps> = (props) => {
  return (
    <ul>
      {props.todos.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button
            onClick={() => {
              props.deleteHandler(todo.id);
            }}>
            DELETE
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
