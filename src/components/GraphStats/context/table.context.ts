import { createContext } from "react";
import { MetricsResponse } from "../Components/Cell";

interface Props {
  metrics: MetricsResponse[];
  //Methods
  setMetrics: (payload: MetricsResponse) => void;
}

const TableContext = createContext({} as Props);

export default TableContext;
