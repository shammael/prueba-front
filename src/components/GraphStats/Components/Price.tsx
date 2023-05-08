/* eslint-disable react-refresh/only-export-components */
import numberFormatter from "@/helpers/numberFormatter";
import { memo } from "react";
import usePrice from "../hooks/usePrice";
import TableRow from "./TableRow";

interface Props {
  symbol: string;
}

const Price = ({ symbol }: Props) => {
  const { price } = usePrice(symbol);

  return (
    <TableRow className="text-end">{numberFormatter(price, "USD")}</TableRow>
  );
};

export default memo(Price);
