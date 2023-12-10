import React from "react";
import Room from "../Room/Room";

export default function Rooms() {
  return (
    <div className=" border w-20 ">
      <div className="flex flex-col gap-3 p-2 ">
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
      </div>
    </div>
  );
}
