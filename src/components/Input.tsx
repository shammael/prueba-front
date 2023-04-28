import { useRef } from "react";

interface Props {
  onChange: (value: number) => void;
  value: number;
  error?: string;
}

const Input = ({ onChange, value, error }: Props) => {
  const touched = useRef(false);
  return (
    <div>
      <input
        type="text"
        defaultValue={0}
        step="any"
        placeholder="Amount"
        value={value}
        className={`rounded-md p-2 bg-slate-900/50 text-white outline-none text-end w-full ${
          error && "outline-red-800"
        }`}
        onChange={(e) => {
          if (!touched.current) {
            touched.current = true;
          }
          if (e.target.value === "") {
            return onChange(0);
          }
          const value = e.target.value.replace(/\D/g, "");
          onChange(parseFloat(value));
        }}
        pattern="[0-9]+"
      />
      {error && <p className="text-red-600 ">{error}</p>}
    </div>
  );
};

export default Input;
