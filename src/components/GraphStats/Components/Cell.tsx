import formatter from "@/helpers/formatter";
import isDecimal from "@/helpers/isDecimal";
import BitcoinIcon from "@/icons/bitcoin.icon";
import CardanoIcon from "@/icons/Cardano.icon";
import EthereumIcon from "@/icons/Ethereum.icon";
import { CryptoTypes } from "@/types";
import TableRow from "./TableRow";
import Price from "./Price";
import useMetrics from "../hooks/useMetrics";
import { toast } from "react-hot-toast";

interface Props {
  index: number;
  slug: string;
  symbol: string;
}

export interface MetricsResponse {
  id: string;
  symbol: string;
  slug: string;
  realVolume24h: number;
  percentChangeUSD24h: number;
  percentChangeUSD1h: number;
  marketcapUSD: number;
}

const Cell = ({ index, slug, symbol }: Props) => {
  const { metrics, error } = useMetrics(symbol);
  // if (error) {
  //   toast.error(error);
  // }
  return (
    <>
      <TableRow>{index}</TableRow>
      <TableRow className="gap-2 h-full">
        <div className="flex gap-2 items-center">
          {slug === CryptoTypes.Bitcoin ? (
            <BitcoinIcon />
          ) : slug === CryptoTypes.Ethereum ? (
            <EthereumIcon />
          ) : slug === CryptoTypes.Cardano ? (
            <CardanoIcon />
          ) : null}
          {slug[0].toUpperCase() + slug.slice(1)} - {symbol.toUpperCase()}
        </div>
      </TableRow>
      <Price symbol={symbol} />
      <TableRow className="text-end">
        <p
          className={`${
            Math.sign(metrics.percentChangeUSD1h) === -1
              ? "text-red-600"
              : Math.sign(metrics.percentChangeUSD1h) === 1
              ? "text-green-500"
              : ""
          } font-semibold`}
        >
          {isDecimal(metrics.percentChangeUSD1h)
            ? metrics.percentChangeUSD1h.toFixed(2)
            : metrics.percentChangeUSD1h}
          %
        </p>
      </TableRow>
      <TableRow className="text-end">
        <p
          className={`${
            Math.sign(metrics.percentChangeUSD24h) === -1
              ? "text-red-600"
              : Math.sign(metrics.percentChangeUSD24h) === 1
              ? "text-green-500"
              : ""
          } font-semibold`}
        >
          {isDecimal(metrics.percentChangeUSD24h)
            ? metrics.percentChangeUSD24h.toFixed(2)
            : metrics.percentChangeUSD24h}
          %
        </p>
      </TableRow>
      <TableRow className="text-end">
        {formatter.format(metrics.marketcapUSD)}
      </TableRow>
      <TableRow className="text-end">
        {formatter.format(metrics.realVolume24h)}
      </TableRow>
      {/* <TableRow>
                  <div className="h-[70px] relative">
                    <Line
                      style={{
                        width: "100%",
                      }}
                      data={{
                        labels: row.stats.map((lab) => lab[1]),
                        datasets: [
                          {
                            data: row.stats.map((lab) => lab[1]),
                            borderWidth: 2,
                            borderColor: "#0369a1",
                            showLine: true,
                            type: "line",
                            fill: "red",
                            pointStyle: "line",
                            pointBorderWidth: 0,
                            label: "",
                          },
                        ],
                      }}
                      title="bitcoin"
                      options={{
                        scales: {
                          x: {
                            display: false,
                          },
                          y: {
                            display: false,
                          },
                        },
                      }}
                    />
                  </div>
                </TableRow> */}
    </>
  );
};

export default Cell;
