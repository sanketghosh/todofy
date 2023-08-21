import { useState } from "react";
import { BsTrashFill, RiEditBoxFill, RiCheckboxCircleFill } from "../icons";

export default function TodoCard({
  name,
  checked,
  id,
  deleteTodo,
  toggleCheckBox,
  toggleModalOpen,
}) {
  const [isChecked, setIsChecked] = useState(checked);

  /* just adding this function will update the UI not the internal state */
  const handleCheckbox = () => {
    setIsChecked(!isChecked);
    /* triggering the toggleCheckBox function will change the state too */
    toggleCheckBox(id);
  };

  const handleDeleteTodo = () => {
    deleteTodo(id);
  };

  return (
    <li className="w-full relative border-2 border-opacity-70 border-zinc-700 px-4 py-4 rounded-md shadow-md shadow-black">
      <div className="flex gap-2">
        <p
          className={`text-[13px] md:text-sm ${
            isChecked ? "line-through" : null
          }`}
        >
          {name}
        </p>
      </div>
      <div className="text-xl flex items-center gap-3 absolute right-1 -bottom-3 bg-zinc-950 px-2 py-1.5 rounded-full border-2 border-opacity-70 border-zinc-700">
        <button
          onClick={handleCheckbox}
          className={`${isChecked ? "text-gray-400" : null}`}
        >
          <RiCheckboxCircleFill />
        </button>
        <button aria-label={`Update ${name} task`} onClick={toggleModalOpen}>
          <RiEditBoxFill />
        </button>
        <button aria-label={`Delete ${name} task`} onClick={handleDeleteTodo}>
          <BsTrashFill />
        </button>
      </div>
    </li>
  );
}
