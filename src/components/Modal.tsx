import { PropsWithChildren } from "react";

const Modal = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-black/70 w-screen h-screen z-10 absolute flex justify-center backdrop-blur-sm">
      {children}
    </div>
  );
};

export default Modal;
