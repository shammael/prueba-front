import Loader from "../../Loader";

const Loading = () => {
  return (
    <div className="flex justify-center items-center -ml-[70px]">
      <div className="relative h-16 flex items-center justify-center w-fit">
        <Loader />
      </div>
    </div>
  );
};

export default Loading;
