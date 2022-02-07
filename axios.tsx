import axios from "axios";

const API = "https://test.hochu-bilet.com/api/agent";

export const axiosInstance = axios.create({
  baseURL: API,
  // headers: {
    // 'Content-Type': 'multipart/form-data',
    // 'Accept': '*/*',
    // 'Content-Length': '20'
    // 'Content-Length':  150
    // 'Content-Type': 'application/json',
    // 'Access-Control-Allow-Origin': '*',
  // },
});