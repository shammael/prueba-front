import SearchIcon from "@/icons/Search.icon";

interface Props {
  onChange: (value: string) => void;
}

const Input = ({ onChange }: Props) => {
  return (
    <div className="relative bg-slate-700/50 px-2 py-1 gap-2 items-center rounded-md flex">
      <SearchIcon className="fill-blue-600" />
      <input
        placeholder="Asset"
        className="bg-transparent outline-none text-sm font-normal max-w-[100px]"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default Input;
