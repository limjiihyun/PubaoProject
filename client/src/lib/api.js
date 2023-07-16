import axios from "axios";
import { SERVER } from "./constant";
// const apis = axios.create({
//   baseURL: "http://localhost:8000",
// });
// apis.interceptors.request.use((config) => {
//   const token = localStorage.getItem("login");
//   if (token) {
//     config.headers["Authorization"] = `Bearer ${token}`;
//   }
//   return config;
// });
export default async function apis() {
  console.log("first");
  const token = localStorage.getItem("login");
  const result = await axios({
    method: "GET",
    url: `${SERVER}/user/me`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return result.data;
}
//export default apis;