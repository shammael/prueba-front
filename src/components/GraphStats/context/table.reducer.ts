/* eslint-disable no-case-declarations */
import { MetricsResponse } from "../Components/Cell";

type State = {
  metrics: MetricsResponse[];
};

type ActionType = { type: "TABLE | Set Metrics"; payload: MetricsResponse };

const tableReducer = (state: State, action: ActionType): State => {
  switch (action.type) {
    case "TABLE | Set Metrics":
      const index = state.metrics.findIndex(
        (item) => item.id === action.payload.id
      );

      if (index === -1) {
        return {
          ...state,
          metrics: [...state.metrics, action.payload],
        };
      }

      const updatedMetrics = [...state.metrics]; // Create a copy of the metrics array
      updatedMetrics[index] = action.payload;

      return {
        ...state,
        metrics: updatedMetrics,
      };

    default:
      return state;
  }
};

export default tableReducer;
