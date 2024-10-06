import axios from "axios";

const instance = axios.create({
  baseURL: "https://contact-storage-app.onrender.com",
});

export default instance;
