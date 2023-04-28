import CalculatorResponse from "./interfaces/CalculatorResponse";
import APIResponse from "./interfaces/response";

const calculatorAdapter = (resp: APIResponse): CalculatorResponse => {
  return {
    anualAmount: parseFloat(resp.anualAmount),
    cryptoPrice: parseFloat(resp.cryptoPrice),
    percentage: parseInt(resp.percentage),
  };
};

export default calculatorAdapter;
