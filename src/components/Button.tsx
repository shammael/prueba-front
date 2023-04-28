interface Props {
  label: string;
  onClick: () => void;
  icon?: any;
}

const Button = ({ label, onClick, icon: Icon }: Props) => {
  return (
    <button
      onClick={onClick}
      className="text-white bg-slate-700 rounded-md p-2 flex justify-center items-center gap-2 hover:bg-slate-700/75"
    >
      {Icon && <Icon className="h-5 w-5" />}
      {label}
    </button>
  );
};

export default Button;
