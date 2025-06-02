import { useEffect } from "react";
import { socket } from "../socket/socket";

export const useSocketEvent = (eventName, callback) => {
  useEffect(() => {
    if (!socket.connected) socket.connect();

    socket.on(eventName, callback);

    return () => {
      socket.off(eventName, callback);
    };
  }, [eventName, callback]);
};

// useSocketEvent("luckybet_aviator", (data) => {
//     try {
//       const parsed = JSON.parse(data);
//       setHotAirData(parsed);
//     } catch (err) {
//       console.error("Failed to parse socket data:", err);
//     }
//   });