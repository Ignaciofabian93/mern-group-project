import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { url } from "../api/config";
import useUser from "./useUser";

const useMessage = () => {
  const { user } = useUser();
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");
  const [username, setUsername] = useState("");
  const [currentRoom, setCurrentRoom] = useState("");
  const [userList, setUserList] = useState([]);
  const [file, setFile] = useState(null);

  useEffect(() => {
    const newSocket = io(url);
    setSocket(newSocket);

    // return () => {
    //   socket.disconnect();
    // };
  }, []);

  useEffect(() => {
    if (user) {
      setUsername(user.name);
    }
  }, [user]);

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

      socket.on("activeUsers", (users) => {
        if (users) {
          setUserList(users);
        } else {
          setUserList([]);
        }
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
    if (socket && username && currentRoom) {
      socket.emit("joinRoom", currentRoom, username);
    }
  };

  const sendMessage = () => {
    console.log("file: ", file);
    if (socket && (messageInput || file) && currentRoom && username) {
      if (file) {
        socket.emit("sendImage", currentRoom, file, username);
        setFile(null);
      } else {
        socket.emit("sendMessage", currentRoom, messageInput, username);
      }
      setMessageInput("");
    }
  };

  const leaveRoom = () => {
    if (socket) {
      socket.emit("userLeft", currentRoom, username);
    }
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleFile = (file) => {
    setFile(file); // Guardar el archivo en el estado local
  };

  const handleCurrentRoom = (e) => {
    leaveRoom();
    setCurrentRoom(e.target.value);
    setMessages([]);
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
    handleCurrentRoom,
    messageInput,
    handleMessageInput,
    currentRoom,
    userList,
    handleFile,
  };
};

export default useMessage;
