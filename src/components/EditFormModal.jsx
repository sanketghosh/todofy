import { useState } from "react";
import Input from "./Input";
import { RiCloseCircleFill } from "../icons";

export default function EditFormModal({ toggleModalOpen }) {
  const [updateTodo, setUpdateTodo] = useState("");

  const changeUpdateTodoHandler = (e) => {
    setUpdateTodo(e.target.value);
  };

  const handleSubmitUpdatedTodo = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="bg-zinc-950 min-h-[11rem] h-[11rem] w-[95%] md:w-[32rem] max-w-lg border-zinc-700 border-2 rounded-md px-3 py-3.5 shadow-black shadow-md flex items-center justify-center relative"
      aria-labelledby="editTodo"
    >
      <form className="w-full flex flex-col gap-4">
        <Input
          placeholder={"Update your todo"}
          className={"border w-full px-3 py-3 rounded-md border-zinc-700"}
          onChange={changeUpdateTodoHandler}
          value={updateTodo}
        />
        <div className="flex items-center w-full justify-between">
          <span>
            {updateTodo.length >= 60 ? (
              <h2 className="text-center w-full text-xs font-semibold mt-1.5 ml-2 text-red-500 uppercase">
                *Only 60 characters allowed
              </h2>
            ) : (
              ""
            )}
          </span>

          <button
            type="submit"
            className="text-[13px] md:text-[15px] px-4 py-2 bg-zinc-200 hover:bg-zinc-300 transition-all text-zinc-900 rounded-md font-medium"
            aria-label={`Confirm edited task to now read ${updateTodo}`}
          >
            submit
          </button>
        </div>
      </form>
      <button
        className="absolute text-2xl -top-2 -right-2"
        onClick={toggleModalOpen}
      >
        <RiCloseCircleFill />
      </button>
    </div>
  );
}
