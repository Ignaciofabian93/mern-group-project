import React from "react";

const RoomSelect = ({ src, roomName, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white w-11/12 h-[56px] flex items-center justify-left px-6 rounded-md my-2"
    >
      <div className="w-[50px] h-[50px] rounded-[50%] overflow-hidden">
        <img src={src} alt={roomName} />
      </div>
      <div>
        <p>{roomName}</p>
      </div>
    </div>
  );
};

export default RoomSelect;
