import calculatorAdapter from "./calculatorAdapter";
import { type CalculatedAmount } from "./interfaces/index";

const getCalculatedAmountService = async (value: CalculatedAmount) => {
  if (value.amount < 1) {
    throw new Error("Amount should be above 0");
  }
  const resp = await fetch(
    `http://localhost:3000/api/v1/calculator?crypto=${value.crypto}&amount=${value.amount}`
  );

  const data = await resp.json();
  if (resp.status === 400) {
    throw new Error(data.message);
  }
  return calculatorAdapter(data);
};

export default getCalculatedAmountService;
