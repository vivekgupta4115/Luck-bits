import { io } from "socket.io-client";

const domain = "https://aviatorudaan.com/";
export const socket = io(domain, {
  autoConnect: true, // control when to connect
//   transports: ,
});

