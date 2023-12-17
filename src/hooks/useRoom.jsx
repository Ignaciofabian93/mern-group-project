import { useEffect, useState } from "react";
import { getRooms } from "../api/fetchRoom";
// import { saveUserInRoom } from "../api/fetchRoom";
import useUser from "./useUser";

const useRoom = () => {
  const { user } = useUser();
  const [rooms, setRooms] = useState([]);
  const [currentRoom, setCurrentRoom] = useState({});
  // const [message, setMessage] = useState("");

  useEffect(() => {
    handleGetRooms();
  }, []);

  console.log(user);

  const handleGetRooms = async () => {
    const rooms = await getRooms();
    setRooms(rooms);
  };

  const handleCurrentRoom = async (e) => {
    const roomId = e.target.value;
    const roomSelected = rooms.rooms.find((room) => room._id === roomId);
    setCurrentRoom(roomSelected);
    // const response = await saveUserInRoom(roomId, user.uid);
    // console.log("REsponse: ", response);
  };

  return { rooms, currentRoom, handleCurrentRoom };
};

export default useRoom;
