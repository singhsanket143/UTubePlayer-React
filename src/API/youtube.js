import Axios from "axios";
const KEY = "AIzaSyA18dJVoimz8-jdQcqhvUs0ZseVnW8-qx4";

export default Axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
