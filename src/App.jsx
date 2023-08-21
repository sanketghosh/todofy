import { useState } from "react";
import { CustomForm, EditFormModal, TodoCard } from "./components";

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  /* function to open the modal */
  const toggleModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  };

  /* function to add your todo */
  const addTodo = (todo) => {
    setTodoList((prevState) => [...prevState, todo]);
  };

  /* function handling deleting todo */
  const deleteTodo = (todoId) => {
    setTodoList((prevState) => prevState.filter((todo) => todo.id !== todoId));
  };

  /* function to toggle checkbox */

  const toggleCheckBox = (todoId) => {
    setTodoList((prevState) =>
      /* gonna map through the previous state  */
      prevState.map((t) =>
        /* if the todo id matched with the id I passed it will return the object with updated checked state or will return the todo  */
        t.id === todoId ? { ...t, checked: !t.checked } : t
      )
    );
  };

  return (
    <>
      {isModalOpen ? (
        <div className="absolute w-full h-full bg-[#00000084] z-50 flex items-center justify-center">
          <EditFormModal toggleModalOpen={toggleModalOpen} />
        </div>
      ) : null}
      <main className="max-w-lg mx-auto px-4 min-h-screen selection:text-zinc-800 selection:bg-zinc-100">
        <h1 className="text-center py-14 font-extrabold text-4xl">Todofy</h1>
        <div className="flex items-center flex-col justify-center">
          <CustomForm addTodo={addTodo} />
          <ul className="py-12 flex flex-col gap-6 w-full">
            {todoList
              ?.sort((a, b) => b.createdAt - a.createdAt)
              .map((todo) => (
                <TodoCard
                  name={todo.name}
                  checked={todo.checked}
                  key={todo.id}
                  id={todo.id}
                  deleteTodo={deleteTodo}
                  toggleCheckBox={toggleCheckBox}
                  toggleModalOpen={toggleModalOpen}
                />
              ))}
          </ul>
        </div>
      </main>
    </>
  );
}
