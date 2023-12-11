import React from "react";
import MainLayout from "../Layouts/MainLayout";
// import Textfield from "../components/Textfield/Textfield";
import useMessage from "../hooks/useMessage";
import User from "../components/User/User";
import Rooms from "../components/Rooms/Rooms";
import useRoom from "../hooks/useRoom";
// import { ThemeContext } from "../context/themeContext";
// import { Button } from "../components/Buttons/Button";
// import { ButtonGoogle } from "../components/Buttons/ButtonGoogle";

const Home = () => {
  // const { theme, toggleTheme } = useContext(ThemeContext);
  const {
    username,
    handleUsername,
    currentRoom,
    handleCurrenRoom,
    joinRoom,
    messageInput,
    messages,
    handleMessageInput,
    sendMessage,
  } = useMessage();
  const { rooms } = useRoom();
  console.log("ROOMS: ", rooms);
  return (
    <MainLayout>
      <div className="p-8">
        <div className="mb-5">
          <User username={username} onChange={handleUsername} />
        </div>
        <div>
          <Rooms />
          <label>Room:</label>
          <input type="text" value={currentRoom} onChange={handleCurrenRoom} />
          <button onClick={joinRoom}>Join Room</button>
        </div>
        <div>
          <div
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              margin: "10px",
              height: "200px",
              overflowY: "auto",
            }}
          >
            {messages.map((msg, index) => (
              <div key={index}>
                <strong>{msg.username}:</strong> {msg.text}
              </div>
            ))}
          </div>
          <div>
            <input
              type="text"
              value={messageInput}
              onChange={handleMessageInput}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
