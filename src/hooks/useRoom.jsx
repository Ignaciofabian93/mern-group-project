import { useEffect, useState } from "react";
import { getRooms } from "../api/fetchRoom";

const useRoom = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    handleGetRooms();
  }, []);

  const handleGetRooms = async () => {
    const rooms = await getRooms();
    setRooms(rooms);
  };

  return { rooms };
};

export default useRoom;
