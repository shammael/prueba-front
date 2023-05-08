import { CryptoTypes } from "@/types";
import { renderHook } from "@testing-library/react-hooks";
import { describe, it, expect, vi } from "vitest";
import useCalculator from "./useCalculator";

const responseData = {
  startingAmount: 2000,
  anualAmount: 50,
  percentage: 4,
  cryptoPrice: 2845,
  label: CryptoTypes.Bitcoin,
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mockFetch = vi.fn((_url: string, _options: object) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return new Promise((resolve, _reject) => {
    const testResponse = {
      ok: true,
      json() {
        return new Promise((resolve, _reject) => {
          resolve(responseData);
        });
      },
    };

    resolve(testResponse);
  });
});

vi.stubGlobal("fetch", mockFetch);

describe("useCalculatorTest", () => {
  it("should return the correct error value", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useCalculator());
    result.current.getAmount(CryptoTypes.Bitcoin);
    await waitForNextUpdate();
    expect(result.current.error).toBe("Amount should be above 0");
  });

  it("should check if the request have been made corectly", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useCalculator());
    result.current.input.setValue(responseData.startingAmount);
    result.current.getAmount(CryptoTypes.Bitcoin);
    await waitForNextUpdate();
    expect(result.current.result).toEqual(responseData);
  });
});
