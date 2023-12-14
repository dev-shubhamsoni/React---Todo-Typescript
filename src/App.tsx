import { useState } from "react";
import "./App.css";

function App() {

  type Todo = {
    id: number;
    todo: string;
    completed: boolean;
  };

  const [todo, setTodo] = useState<string>("");
  const [todoArray, setTodoArray] = useState<Todo[]>([]);


  const handleSubmit = (todos: React.FormEvent): void => {
    todos.preventDefault();

    console.log(todo);

    const newTodo: Todo = {
      id: Math.random(),
      todo: todo,
      completed: false,
    };

    setTodoArray((prevTodo) => [...prevTodo, newTodo]);
    setTodo("");

    console.log(todoArray);
  };


  const handleDelete = (id:number) => {
    const updatedTodoArray = todoArray.filter((item) => item.id !== id);
    setTodoArray(updatedTodoArray);
  }

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="text"></label>
          <input
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            id="text"
            type="text"
            placeholder="todo"
          ></input>
          <button disabled={!todo.trim()} type="submit">Submit</button>
        </form>
      </div>

      <div>
        {todoArray.map((item) => {
          return (
            <div className=" flex justify-center items-center gap-2 pt-5" key={item.id}>
              <p>{item.todo}</p>
              <button onClick={() => handleDelete(item.id)}>X</button>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
