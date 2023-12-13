import React from "react";
import MainLayout from "../Layouts/MainLayout";
import useMessage from "../hooks/useMessage";
import InputMessage from "../components/InpuntMessage/InputMessage";
import UserConnected from "../components/User/UserConnected";
import CustomSelect from "../components/Select/CustomSelect";

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
  } = useMessage();

  return (
    <MainLayout>
      <section className="w-full h-full flex">
        <aside className="w-1/4 h-full bg-slate-600">
          <div className="w-full h-[100px] flex justify-center items-center pt-4">
            <UserConnected />
          </div>
          <div className="w-full h-[calc(100%_-_100px)] flex flex-col items-center justify-between py-4">
            <div className="flex items-center justify-around w-full px-4 mt-6">
              <CustomSelect
                rooms={rooms}
                onChange={handleCurrentRoom}
                value={currentRoom}
              />
            </div>
            <div className="w-full px-4 mb-4">
              <div className="w-full h-[50px] flex items-center pl-4 my-2 rounded-md dark:bg-[#1E1F22] text-white">
                <p>Configuración</p>
              </div>
              <div className="w-full h-[50px] flex items-center pl-4 my-2 rounded-md dark:bg-[#1E1F22] text-white">
                <p>Salir</p>
              </div>
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
