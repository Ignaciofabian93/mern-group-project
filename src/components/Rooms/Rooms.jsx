import React from "react";
import Room from "../Room/Room";
import { ButtonJoinRoom } from "../Buttons/ButtonJoinRoom";

export const Rooms = ({ joinRoom, imgRoom }) => {
  return (
    <div className=" items-center flex ">
      <div className="flex  flex-col">
        <div className="flex items-center gap-4  justify-center ">
          <div className="flex items-center">
            <Room imgRoom={imgRoom} />
          </div>

          <div>
            <ButtonJoinRoom joinRoom={joinRoom} />
          </div>
        </div>
      </div>
    </div>
  );
};
