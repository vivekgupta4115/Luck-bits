// services/api.js
// import axios from "axios";

// const api = axios.create({
//   baseURL: import.meta.env.VITE_API_URL,
// });

// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   if (token) config.headers.Authorization = `Bearer ${token}`;
//   return config;
// });

// export default api;
export const baseUrlUsaWinEnv = import.meta.env.baseURL;
export const baseUrlUsaWin = "https://usawin.codingjourney.net";
const configModalUsaWin = `${baseUrlUsaWin}/userapi/`


const apis = {
    login: `${configModalUsaWin}login`,
    profile: `${configModalUsaWin}profile?id=`,
    updateProfile: `${configModalUsaWin}updateprofile`,
    forgotPassword: `${configModalUsaWin}forgotPassword`,
    updatepassword: `${configModalUsaWin}updatepassword`,
    changepassword: `${configModalUsaWin}changepassword`,
    slider: `${configModalUsaWin}slider`,
    country: `${configModalUsaWin}country`,

}
export default apis
