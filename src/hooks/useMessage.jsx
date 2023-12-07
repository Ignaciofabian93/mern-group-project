import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { url } from "../api/config";

const socket = io(url, {
  withCredentials: true,
  extraHeaders: {
    "chat-app": "chatApp",
  },
});
console.log("socket: ", socket);

const useMessage = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleMessage = (e) => {
    const { value } = e.target;
    setNewMessage(value);
  };

  useEffect(() => {
    socket.on("message", (data) => {
      console.log("data: ", data);
      setMessages((prev) => [...prev, data]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    console.log("new: ", newMessage);
    socket.emit("message", {
      user: "ignacio",
      content: newMessage,
    });

    setNewMessage("");
  };

  return { messages, newMessage, sendMessage, handleMessage };
};

export default useMessage;
