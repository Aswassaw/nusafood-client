import axios from "axios";
import { API_SERVER_URL, TIMEOUT } from "../config/Config";

// axios global settings
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["Accept"] = "application/json";

export const AxiosInstance = axios.create({
  baseURL: API_SERVER_URL,
  timeout: TIMEOUT,
});
