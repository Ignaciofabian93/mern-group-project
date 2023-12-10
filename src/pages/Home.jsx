import React from "react";
import MainLayout from "../Layouts/MainLayout";
// import Textfield from "../components/Textfield/Textfield";
import useMessage from "../hooks/useMessage";
// import { ThemeContext } from "../context/themeContext";
import { Button } from "../components/Buttons/Button";
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
  return (
    <MainLayout>
      <div>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={handleUsername} />
        </div>
        <div>
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
            {/* <button onClick={sendMessage}>Send</button> */}
            <Button onClick={sendMessage} text={"Enviar"}/>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
