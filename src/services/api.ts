import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    // Authorization: `Bearer ${
    //   typeof window !== "undefined" ? localStorage.getItem("token") : ""
    // }`,
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/x-www-form-urlencoded",
  },
});
