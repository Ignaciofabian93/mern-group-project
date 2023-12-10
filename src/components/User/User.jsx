import React from "react";
import clsx from "clsx";

export default function User() {
  return (
    <div className="flex gap-2">
      <div>
        <img
          src="/src/assets/img/user.jpg"
          alt=""
          className={clsx("bg-slate-400", "w-10 h-10", "rounded-full", "cursor-pointer")}
        />
      </div>
      <div>
        <p className={clsx("font-semibold")}>nombre</p>
        <p className={clsx("text-gray-500")}>correo@gmail.com</p>
      </div>
    </div>
  );
}
