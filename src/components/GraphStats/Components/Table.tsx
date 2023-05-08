import Input from "./Input";
import "./styles/index.css";
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
import { useContext, useState } from "react";
import HozLine from "@/components/HozLine";
import { CSVLink } from "react-csv";
import exportData from "@/helpers/exportJson";
import Cell from "./Cell";
import TableContext from "../context/table.context";

// import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const AppTable = () => {
  const [search, setSearch] = useState("");
  const { metrics } = useContext(TableContext);

  const tableData = [
    { slug: "bitcoin", symbol: "btc" },
    { slug: "cardano", symbol: "ada" },
    { slug: "ethereum", symbol: "eth" },
  ];
  return (
    <div>
      <header className="flex items-center justify-end">
        <CSVLink
          data={metrics}
          className="text-gray-400 font-semibold hover:text-gray-200 cursor-pointer p-2"
          target="_blank"
          filename="data"
        >
          Export CSV
        </CSVLink>
        <HozLine />
        <button
          className="text-gray-400 font-semibold hover:text-gray-200 cursor-pointer p-2"
          onClick={() => exportData(metrics)}
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
          {tableData
            .filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.slug.toLowerCase().includes(search) ||
                    item.symbol.toLowerCase().includes(search);
            })
            .map((row, index) => (
              <tr
                key={index}
                className={!Number.isInteger(index / 2) ? "bg-slate-700" : ""}
              >
                <Cell index={index + 1} slug={row.slug} symbol={row.symbol} />
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppTable;
