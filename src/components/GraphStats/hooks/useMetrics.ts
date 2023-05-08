import io from "socket.io-client";
import { useContext, useEffect, useState } from "react";
import { MetricsResponse } from "../Components/Cell";
import TableContext from "../context/table.context";

const useMetrics = (symbol: string) => {
  const { metrics: contextMetrics } = useContext(TableContext);

  const metric = contextMetrics.find((met) => met.symbol === symbol);
  const [metrics, setMetrics] = useState<MetricsResponse>(
    metric
      ? metric
      : {
          id: "",
          symbol: "",
          marketcapUSD: 0,
          percentChangeUSD1h: 0,
          percentChangeUSD24h: 0,
          realVolume24h: 0,
          slug: "",
        }
  );

  const [error, setError] = useState<string>("");

  const { setMetrics: setContextMetrics } = useContext(TableContext);

  useEffect(() => {
    const socket = io("http://localhost:3000/api/v1/stream/metric");

    socket.emit("symbol", symbol);

    socket.on("metric", (metric) => {
      setMetrics(metric);
      setContextMetrics(metric);
    });

    socket.on("too-request-error", (error) => {
      setError(error.message);
    });
  }, [setContextMetrics, symbol]);

  return { metrics, error };
};

export default useMetrics;
