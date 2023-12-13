import React from "react";

const CustomSelect = ({ rooms, onChange, value }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <p className="font-semibold text-md mb-2">Selecione un grupo:</p>
      <select
        name="room"
        onChange={onChange}
        value={value}
        className="w-full rounded-md h-[30px] border-none px-4"
      >
        {rooms.map((room) => (
          <option key={room} value={room}>
            {room}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelect;
