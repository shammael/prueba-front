import getCalculatedAmountService from "@/services/getCalculatedAmout";
import { useState } from "react";
import { Crypto } from "../interfaces/Crypto";

const useCalculator = () => {
  const [state, setState] = useState(0);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<{
    startingAmount: number;
    anualAmount: number;
    percentage: number;
    cryptoPrice: number;
    label: Crypto;
  }>();

  const getAmount = (crypto: Crypto) => {
    setIsLoading(true);
    setError("");
    getCalculatedAmountService({ crypto, amount: state })
      .then((resp) =>
        setResult({
          anualAmount: resp.anualAmount,
          cryptoPrice: resp.cryptoPrice,
          percentage: resp.percentage,
          startingAmount: state,
          label: crypto,
        })
      )
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => setIsLoading(false));
  };

  return {
    error,
    isLoading,
    result,
    getAmount,
    setError,
    input: {
      value: state,
      setValue: setState,
    },
  };
};

export default useCalculator;
