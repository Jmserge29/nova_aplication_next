import axios from "axios";
import { API_URL, ROUTE_USERS } from "../../../config";

export const getsAllUsers = async () => {
  return await axios.get(`https://server-nova.vercel.app/User/getsUserAlls`);
};


export const ServerSignIn = async ({email,password}) => {
  return await axios.post(`https://server-nova.vercel.app/User/sign-in`,{
    email,
    password
  });
};