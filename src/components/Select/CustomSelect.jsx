import React from "react";
// import clsx from "clsx";
import { Select, SelectItem } from "@nextui-org/react";

const CustomSelect = ({ rooms, onChange, value }) => {
  return (
    <div className="w-full h-fit">
      <p className="text-white mb-2 text-sm font-semibold pl-2">
        Seleccione un chat:
      </p>
      <Select
        onChange={onChange}
        value={value}
        aria-label="select-room"
        className="border-2 border-slate-500 rounded-xl transition-all duration-300 ease-in-out"
        color="primary"
      >
        {rooms &&
          rooms.map((room) => (
            <SelectItem key={room._id} value={room._id}>
              {room.name}
            </SelectItem>
          ))}
      </Select>
    </div>
  );
};

export default CustomSelect;
