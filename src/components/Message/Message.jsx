import React from "react";
import { InputMessage } from "../InpuntMessage/InputMessage";

export const Message = ({
  messageInput,
  handleMessageInput,
}) => {
  return (
    <div className="flex flex-col mt-96">
      <div className="mt-96 pb-6">
        <InputMessage
          messageInput={messageInput}
          handleMessageInput={handleMessageInput}
        />
      </div>
    </div>
  );
};
