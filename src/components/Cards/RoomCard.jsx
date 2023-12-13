import React from "react";

const RoomCard = ({ room, activeUsers, imgSrc }) => {
  // const usersInRoom = activeUsers ? activeUsers.count[room] : 0;
  console.log("act: ", activeUsers);

  return (
    <div className="w-full h-[50px] flex items-center justify-start px-4 bg-slate-300 my-2 rounded-md">
      <div className="bg-black w-[40px] h-[40px] rounded-[50%] overflow-hidden">
        <img src={imgSrc} alt={room} />
      </div>
      <div className="w-[calc(100%_-_40px)] flex items-center justify-between px-4">
        <p>{room}</p>
        <div>
          {/* <p>{usersInRoom}</p> */}
          <div
            style={{
              width: "10px",
              height: "10px",
              // backgroundColor: usersInRoom > 0 ? "green" : "red",
              borderRadius: "50%",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
