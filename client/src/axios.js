import axios from "axios";

const instance = axios.create({
  baseURL: "https://mern-hangout.herokuapp.com/",
});

export default instance;
