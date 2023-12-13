import { useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { url } from "../api/config";
import { createRoom } from "../api/fetchRoom";
import { Authcontext } from "../context/authContext";
import useRoom from "./useRoom";

const useMessage = () => {
  const { user } = useContext(Authcontext);
  const { rooms } = useRoom();
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");
  const [currentRoom, setCurrentRoom] = useState("");
  const [username, setUsername] = useState("");

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
        console.log("MESSAGE: ", message);
        setMessages((prevMessages) => [...prevMessages, message]);
      });

      socket.on("userJoined", ({ username }) => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { username: "Server", text: `${username} joined the room.` },
        ]);
        console.log("USERNAME: ", username);
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

  const joinRoom = async () => {
    if (socket && user && currentRoom) {
      const checkRoom = rooms.rooms.some((room) => room.name === currentRoom);
      if (checkRoom) {
        socket.emit("joinRoom", currentRoom, user.name);
      } else {
        const response = await createRoom(currentRoom, user.uid);
        if (response.room._id) {
          socket.emit("joinRoom", currentRoom, user.name);
        } else {
          console.log("Error al crear el room");
        }
      }
    }
  };

  const sendMessage = () => {
    if (socket && messageInput && currentRoom) {
      socket.emit("sendMessage", currentRoom, messageInput);
      setMessageInput("");
    }
  };

  const handleCurrenRoom = (e) => {
    setCurrentRoom(e.target.value);
  };

  const handleMessageInput = (e) => {
    setMessageInput(e.target.value);
  };

  return {
    user,
    messages,
    sendMessage,
    joinRoom,
    handleCurrenRoom,
    messageInput,
    handleMessageInput,
    username,
  };
};

export default useMessage;
