import numberFormatter from "@/helpers/numberFormatter";
import BitcoinIcon from "@/icons/bitcoin.icon";
import CardanoIcon from "@/icons/Cardano.icon";
import EthereumIcon from "@/icons/Ethereum.icon";
import { CryptoTypes } from "@/types";
import Input from "./Input";
import "./styles/index.css";
import TableRow from "./TableRow";
import io from "socket.io-client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { useEffect, useState } from "react";
import Crypto from "@/services/interfaces/Crypto";
import getAllCryptosAdapter from "@/services/getAllCryptosAdapter";
import HozLine from "@/components/HozLine";
import { CSVLink } from "react-csv";
import exportData from "@/helpers/exportJson";
import formatter from "@/helpers/formatter";
import isDecimal from "@/helpers/isDecimal";
// import { Line } from "react-chartjs-2";
const socket = io("http://localhost:3000/api/v1/stream");

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// The Api provided doesn't make easy the realtime connection. I had everthing setup already for the chart and everything

const AppTable = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<Crypto[]>([]);

  useEffect(() => {
    socket.on("data", (message) => {
      setResults(getAllCryptosAdapter(message.data));
    });
  }, []);

  return (
    <div>
      <header className="flex items-center justify-end">
        <CSVLink
          data={results}
          className="text-gray-400 font-semibold hover:text-gray-200 cursor-pointer p-2"
          target="_blank"
          filename="data"
        >
          Export CSV
        </CSVLink>
        <HozLine />
        <button
          className="text-gray-400 font-semibold hover:text-gray-200 cursor-pointer p-2"
          onClick={() => exportData(results)}
        >
          Export JSON
        </button>
      </header>
      <table className="text-white bg-slate-900 rounded-md">
        <thead>
          <tr className="p-4 border-b-2 border-gray-700 h-auto">
            <th className="border-gray-700 border-r-2 px-2">#</th>
            <th className="gap-2 border-gray-700 border-r-2 px-2">
              <div className="flex gap-2 items-center">
                <p>Asset</p> <Input onChange={(value) => setSearch(value)} />
              </div>
            </th>
            <th className="px-2 border-gray-700 border-r-2">Price</th>
            <th className="gap-2 border-gray-700 border-r-2 px-2 text-sm text-end w-[100px]">
              CHANGE VS USD(1H)
            </th>

            <th className="gap-2 border-gray-700 border-r-2 px-2 text-sm text-end w-[100px]">
              CHANGE VS USD(24H)
            </th>
            <th className="gap-2 border-gray-700 border-r-2 px-2 text-sm text-end w-[100px]">
              <p>REPORTED MARKETCAP</p>
            </th>
            <th className="gap-2 border-gray-700 border-r-2 px-2 text-sm text-end w-[100px]">
              <p>REAL VOLUME(24H)</p>
            </th>
            {/* <th className="gap-2 border-gray-700 border-r-2 px-2 text-sm text-end w-[100px]">
              <p>/ DAY TRENDS</p>
            </th> */}
          </tr>
        </thead>

        <tbody>
          {results
            .filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.slug.toLowerCase().includes(search) ||
                    item.symbol.toLowerCase().includes(search);
            })
            .map((row, index) => (
              <tr
                key={row.id}
                className={!Number.isInteger(index / 2) ? "bg-slate-700" : ""}
              >
                <TableRow>{index + 1}</TableRow>
                <TableRow className="gap-2 h-full">
                  <div className="flex gap-2 items-center">
                    {row.slug === CryptoTypes.Bitcoin ? (
                      <BitcoinIcon />
                    ) : row.slug === CryptoTypes.Ethereum ? (
                      <EthereumIcon />
                    ) : row.slug === CryptoTypes.Cardano ? (
                      <CardanoIcon />
                    ) : null}
                    {row.slug[0].toUpperCase() + row.slug.slice(1)} -{" "}
                    {row.symbol.toUpperCase()}
                  </div>
                </TableRow>
                <TableRow className="text-end">
                  {numberFormatter(row.price, "USD")}
                </TableRow>
                <TableRow className="text-end">
                  <p
                    className={`${
                      Math.sign(row.percentChangeUSDLast1h) === -1
                        ? "text-red-600"
                        : Math.sign(row.percentChangeUSDLast1h) === 1
                        ? "text-green-500"
                        : ""
                    } font-semibold`}
                  >
                    {isDecimal(row.percentChangeUSDLast1h)
                      ? row.percentChangeUSDLast1h.toFixed(2)
                      : row.percentChangeUSDLast1h}
                    %
                  </p>
                </TableRow>
                <TableRow className="text-end">
                  <p
                    className={`${
                      Math.sign(row.percentChangeUSDLast24h) === -1
                        ? "text-red-600"
                        : Math.sign(row.percentChangeUSDLast24h) === 1
                        ? "text-green-500"
                        : ""
                    } font-semibold`}
                  >
                    {isDecimal(row.percentChangeUSDLast24h)
                      ? row.percentChangeUSDLast24h.toFixed(2)
                      : row.percentChangeUSDLast24h}
                    %
                  </p>
                </TableRow>
                <TableRow className="text-end">
                  {formatter.format(row.reportedMarketcap)}
                </TableRow>
                <TableRow className="text-end">
                  {formatter.format(row.realVolumeLast24h)}
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
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppTable;
