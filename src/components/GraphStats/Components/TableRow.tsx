import { PropsWithChildren } from "react";

interface Props {
  className?: string;
}

const TableRow = ({ children, className }: PropsWithChildren<Props>) => {
  return <td className={`px-2 py-1 ${className}`}>{children}</td>;
};

export default TableRow;
