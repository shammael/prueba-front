import getAllCryptosAdapter from "./getAllCryptosAdapter";
import Crypto from "./interfaces/Crypto";
import io from "socket.io-client";
const socket = io("http://localhost:3000/api/v1/stream");

const getAllCryptoService = () => {
  let arr: Crypto[] = [];

  socket.on("data", (message) => {
    arr = getAllCryptosAdapter(message.data);
  });

  return arr;
};

export default getAllCryptoService;
