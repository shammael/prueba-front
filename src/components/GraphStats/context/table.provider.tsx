import { PropsWithChildren, useReducer } from "react";
import { MetricsResponse } from "../Components/Cell";
import TableContext from "./table.context";
import tableReducer from "./table.reducer";

const initialState: { metrics: MetricsResponse[] } = {
  metrics: [],
};

// id: "",
//   symbol: "",
//   marketcapUSD: 0,
//   percentChangeUSD1h: 0,
//   percentChangeUSD24h: 0,
//   realVolume24h: 0,
//   slug: "",

const TableProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(tableReducer, initialState);

  const setMetrics = (payload: MetricsResponse) => {
    dispatch({ type: "TABLE | Set Metrics", payload });
  };

  return (
    <TableContext.Provider value={{ ...state, setMetrics }}>
      {children}
    </TableContext.Provider>
  );
};

export default TableProvider;
