import { PropsWithChildren } from "react";

const Container = ({ children }: PropsWithChildren) => {
  return (
    <div className="max-w-2xl mx-auto flex items-center h-full w-full">
      {children}
    </div>
  );
};

export default Container;
