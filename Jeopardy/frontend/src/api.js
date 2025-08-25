import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/api", // backend API base
  withCredentials: true, // if needed
});

export default API;
