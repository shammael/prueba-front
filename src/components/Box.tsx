import { PropsWithChildren } from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const Box = ({ children, className }: PropsWithChildren<Props>) => {
  return (
    <div
      className={`m-auto bg-slate-800 p-4 rounded-md flex gap-4 flex-col ${className}`}
    >
      {children}
    </div>
  );
};

export default Box;
