import React, { useContext } from "react";
import MainLayout from "../Layouts/MainLayout";
import Textfield from "../components/Textfield/Textfield";
import { Button } from "../components/Buttons/Button";
import useMessage from "../hooks/useMessage";
import { ThemeContext } from "../context/themeContext";

const Home = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { newMessage, handleMessage, sendMessage } = useMessage();
  return (
    <MainLayout>
      <div>jashasjhsajsahsa</div>
      <Textfield value={newMessage} onChange={handleMessage} />
      <Button text="Button" onClick={sendMessage} />
    </MainLayout>
  );
};

export default Home;
