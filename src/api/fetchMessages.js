import { api } from "./config";

export const getMessages = async () => {
  try {
    const response = await api.get("/messages");
    const data = await response.data;
    console.log("data: ", data);
    return data;
  } catch (error) {
    throw new Error(`Error: ${error}`);
  }
};
