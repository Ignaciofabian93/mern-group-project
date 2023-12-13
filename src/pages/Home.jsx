import React from "react";
import MainLayout from "../Layouts/MainLayout";
import useMessage from "../hooks/useMessage";
import InputMessage from "../components/InpuntMessage/InputMessage";
import UserConnected from "../components/User/UserConnected";
import RoomCard from "../components/Cards/RoomCard";

const rooms = [
  " ",
  "JavaScript",
  "TypeScript",
  "ReactJs",
  "NextJs",
  "NodeJs",
  "MongoDB",
];

const Home = () => {
  const {
    handleCurrentRoom,
    messages,
    sendMessage,
    handleMessageInput,
    messageInput,
    currentRoom,
    userList,
  } = useMessage();

  return (
    <MainLayout>
      <section className="w-full h-full flex">
        <aside className="w-1/4 h-full bg-slate-600">
          <div className="w-full h-[100px] flex justify-center items-center pt-4">
            <UserConnected />
          </div>
          <div className="w-full h-[calc(100%_-_100px)] flex flex-col items-center justify-center">
            <div className="flex items-center justify-around">
              <p>Selecione un grupo:</p>
              <select
                name="room"
                onChange={handleCurrentRoom}
                value={currentRoom}
              >
                {rooms.map((room) => (
                  <option key={room} value={room}>
                    {room}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-full h-fit px-4">
              {rooms.map((room) =>
                room !== " " ? (
                  <RoomCard key={room} room={room} activeUsers={userList} />
                ) : null
              )}
            </div>
          </div>
        </aside>
        <div className="w-3/4 h-full bg-slate-400">
          <div className="w-full h-full flex flex-col justify-between py-6">
            <div
              className="h-[calc(100%_-_100px)]"
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                margin: "10px",
                overflowY: "auto",
              }}
            >
              {messages.map((msg, index) => (
                <div key={index}>
                  <strong>{msg.username}:</strong> {msg.text}
                </div>
              ))}
            </div>
            <div className="w-full h-[100px] flex justify-center items-center">
              <InputMessage
                onChange={handleMessageInput}
                onClick={sendMessage}
                value={messageInput}
              />
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Home;
