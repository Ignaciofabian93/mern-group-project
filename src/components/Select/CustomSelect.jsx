import React from "react";
// import clsx from "clsx";
import { Select, SelectItem } from "@nextui-org/react";

const CustomSelect = ({ rooms, onChange, value }) => {
  return (
    <div className="w-full h-fit">
      <p className="text-white mb-2 text-sm font-semibold pl-2">
        Seleccione un chat:
      </p>
      <Select onChange={onChange} value={value} aria-label="select-room">
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
//   return (
//     <div className=" flex flex-col items-center">
//       <div className="w-[280px]">
//         <label className="block mb-2 font-light text-white dark:text-white">
//           Selecione un grupo
//         </label>
//         <select
//           name="room"
//           onChange={onChange}
//           value={value}
//           className={clsx(
//             /* ----default theme -----*/
//             "bg-gray-50",
//             "h-[42px]",
//             "border border-gray-300",
//             "text-gray-900 text-sm",
//             "block w-full p-2.5",
//             "rounded-lg",
//             "shadow-md",
//             "transition duration-300",
//             /* ----focus theme -----*/
//             "focus:ring-blue-500",
//             "focus:border-blue-500",
//             /* ----dark theme -----*/
//             "dark:bg-gray-700",
//             "dark:border-gray-600",
//             "dark:placeholder-gray-400",
//             "dark:text-white",
//             "dark:focus:ring-blue-500",
//             "dark:focus:border-blue-500"
//           )}
//         >
//           {rooms.map((room) => (
//             <option key={room} value={room}>
//               {room}
//             </option>
//           ))}
//         </select>
//       </div>
//     </div>
//   );
// };

export default CustomSelect;
