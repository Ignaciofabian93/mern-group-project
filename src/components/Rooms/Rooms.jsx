import React from "react";
import Room from "../Room/Room";
import { ButtonJoinRoom } from "../Buttons/ButtonJoinRoom";

export const Rooms = ({ joinRoom, imgRoom }) => {
  return (
    <div className=" h-full items-center">
      <div className="flex  flex-col gap-3">

        <div className="flex items-center gap-5">
          <div>
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
