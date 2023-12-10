import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { url } from "../api/config";

const useMessage = () => {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");
  const [username, setUsername] = useState("");
  const [currentRoom, setCurrentRoom] = useState("");

  useEffect(() => {
    const newSocket = io(url);
    setSocket(newSocket);

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on("message", (message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
      });

      socket.on("userJoined", ({ username }) => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { username: "Server", text: `${username} joined the room.` },
        ]);
      });

      socket.on("userLeft", ({ id, users }) => {
        const leftUser = users.find((user) => user.id === id);
        if (leftUser) {
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              username: "Server",
              text: `${leftUser.username} left the room.`,
            },
          ]);
        }
      });
    }
  }, [socket]);

  const joinRoom = () => {
    if (socket && username && currentRoom) {
      console.log("room info: ", currentRoom, username);
      socket.emit("joinRoom", currentRoom, username);
    }
  };

  const sendMessage = () => {
    if (socket && messageInput && currentRoom) {
      socket.emit("sendMessage", currentRoom, messageInput);
      setMessageInput("");
    }
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleCurrenRoom = (e) => {
    setCurrentRoom(e.target.value);
  };

  const handleMessageInput = (e) => {
    setMessageInput(e.target.value);
  };

  return {
    messages,
    sendMessage,
    joinRoom,
    username,
    handleUsername,
    handleCurrenRoom,
    messageInput,
    handleMessageInput,
  };
};

export default useMessage;
