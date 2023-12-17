import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { url } from "../api/config";
import useUser from "./useUser";
import useRoom from "./useRoom";
import { saveChat, getRoom } from "../api/fetchRoom";

const useSocket = () => {
  const { user } = useUser();
  const { rooms } = useRoom();
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");
  const [currentRoom, setCurrentRoom] = useState("");
  const [file, setFile] = useState(null);
  const [apiResponse, setApiResponse] = useState("");

  useEffect(() => {
    const newSocket = io(url);
    setSocket(newSocket);

    // return () => {
    //   socket.disconnect();
    // };
  }, []);

  const handleSaveChat = async () => {
    const id = rooms.rooms.find((room) => room.name === currentRoom)._id;
    if (id) {
      const response = await saveChat(id, messages);
      setApiResponse(response.message);
    }
  };

  const handleGetChat = async () => {
    const id = rooms.rooms.find((room) => room.name === currentRoom)._id;
    if (id) {
      const response = await getRoom(id);
      console.log("response fetch chat: ", response);
      setMessages(response.room.messages);
    }
  };

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

  console.log("Messages: ", messages);

  const joinRoom = () => {
    if (socket && user.name && currentRoom) {
      socket.emit("joinRoom", currentRoom, user.name);
    }
  };

  const sendMessage = () => {
    if (socket && (messageInput || file) && currentRoom && user.name) {
      if (file !== "" && file !== null) {
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
    handleSaveChat,
    handleGetChat,
    apiResponse,
  };
};

export default useSocket;
