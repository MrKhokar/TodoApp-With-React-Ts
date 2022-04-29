import React, { useState } from "react";
import AddList from "./components/AddList";
import { Todo } from "./model/todolist.model";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addHandler = (text: string) => {
    setTodos((prevtodos) => [
      ...prevtodos,
      { id: Math.random().toString(), text: text }
    ]);
  };
  const deleteHandler = (todoId: string) => {
    setTodos((prevtodo) => {
      return prevtodo.filter((todo) => todo.id !== todoId);
    });
    console.log(todoId, "-----ID will be del");
  };
  return (
    <div className="App">
      {/* A component that adds todos */}
      <AddList addHandler={addHandler} />
      <TodoList todos={todos} deleteHandler={deleteHandler} />
    </div>
  );
};

export default App;
