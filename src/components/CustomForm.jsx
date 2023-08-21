import { useState } from "react";
import { SiAddthis } from "../icons";
import { v4 as uuidv4 } from "uuid";
import Input from "./Input";

export default function CustomForm({ addTodo }) {
  /* this useState is for handling the form todo input text state */
  const [todo, setTodo] = useState("");

  const changeTodoHandler = (e) => {
    setTodo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({
      name: todo,
      checked: false,
      id: uuidv4(),
      createdAt: Date.now(),
    });
    setTodo("");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex items-center w-full rounded-md overflow-hidden border-2 border-opacity-70 border-zinc-700 py-3 px-3 gap-2"
      >
        <Input
          className={"flex-1"}
          value={todo}
          onChange={changeTodoHandler}
          placeholder={"Enter your todo"}
        />

        <button className="" type="submit">
          <SiAddthis className="text-2xl transition-all hover:text-gray-300" />
        </button>
      </form>
      {todo.length >= 60 ? (
        <h2 className="text-left w-full text-xs font-semibold mt-1.5 ml-2 text-red-500 uppercase">
          *Only 60 characters allowed
        </h2>
      ) : (
        ""
      )}
    </>
  );
}
