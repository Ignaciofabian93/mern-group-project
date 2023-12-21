import axios from "axios";

// export const url = "http://localhost:8080";
export const url = "https://mern-group-project-services-dev-rfnb.1.us-1.fl0.io";

export const api = axios.create({
  baseURL: url,
});
