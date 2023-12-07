import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { url } from "../api/config";

const socket = io(url);

const useMessage = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    socket.on("message", (data) => {
      setMessages((prev) => [...prev, data]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    socket.emit("chat message", {
      user: "",
      content: newMessage,
    });

    setNewMessage("");
  };

  return { messages, newMessage, sendMessage };
};

export default useMessage;
