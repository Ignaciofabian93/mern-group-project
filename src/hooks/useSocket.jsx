import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { url } from "../api/config";
import useUser from "./useUser";
import useRoom from "./useRoom";

const useSocket = () => {
  const { user } = useUser();
  const { rooms } = useRoom();
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");
  const [currentRoom, setCurrentRoom] = useState("");
  const [file, setFile] = useState(null);

  useEffect(() => {
    const newSocket = io(url);
    setSocket(newSocket);

    // return () => {
    //   socket.disconnect();
    // };
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on("message", (message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
      });

      socket.on("userJoined", ({ username }) => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { username: "Servidor", text: `${username} se ha unido` },
        ]);
      });

      socket.on("userLeft", ({ id, users }) => {
        console.log("isauasiusis: ", id, users);
        const leftUser = users.find((user) => user.id === id);
        if (leftUser) {
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              username: "Servidor",
              text: `${leftUser.username} ha abandonado el grupo.`,
            },
          ]);
        }
      });
    }
  }, [socket]);

  useEffect(() => {
    if (currentRoom !== "") {
      joinRoom();
    }
  }, [currentRoom]);

  const joinRoom = () => {
    if (socket && user.name && currentRoom) {
      socket.emit("joinRoom", currentRoom, user.name);
    }
  };

  const sendMessage = () => {
    console.log("file: ", file);
    if (socket && (messageInput || file) && currentRoom && user.name) {
      if (file) {
        socket.emit("sendImage", currentRoom, file, user.name);
        setFile(null);
      } else {
        socket.emit("sendMessage", currentRoom, messageInput, user.name);
      }
      setMessageInput("");
    }
  };

  const leaveRoom = () => {
    if (socket) {
      socket.emit("userLeft", currentRoom, user.name);
    }
  };

  const handleFile = (file) => {
    setFile(file); // Guardar el archivo en el estado local
  };

  const handleCurrentRoom = (e) => {
    const roomSelected = rooms.rooms.find(
      (room) => room._id === e.target.value
    );
    leaveRoom();
    setCurrentRoom(roomSelected.name);
    setMessages([]);
  };

  const handleMessageInput = (e) => {
    setMessageInput(e.target.value);
  };

  return {
    messages,
    sendMessage,
    joinRoom,
    handleCurrentRoom,
    messageInput,
    handleMessageInput,
    currentRoom,
    handleFile,
  };
};

export default useSocket;
