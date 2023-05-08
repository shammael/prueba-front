import { useEffect, useState } from "react";
import io from "socket.io-client";

const usePrice = (symbol: string) => {
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const socket = io("http://localhost:3000/api/v1/stream/bi");

    socket.emit("symbol", symbol);

    socket.on(`${symbol}-metrics`, (e) => {
      setPrice(e.p);
    });

    socket.on("disconnect", () => {
      console.log("ds");
    });

    socket.on("error", (e) => {
      console.log(e);
    });

    return () => {
      socket.off(`${symbol}-metrics`);
    };
  }, [symbol]);

  return { price };
};

export default usePrice;
