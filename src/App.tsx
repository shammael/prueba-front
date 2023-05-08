import { Toaster } from "react-hot-toast";
import Calculator from "./components/Calculator";
import GraphStats from "./components/GraphStats";
import Modal from "./components/Modal";

const App = () => {
  return (
    <div>
      <Modal>
        <div className="h-full w-full flex justify-around flex-col">
          <div>
            <Toaster position="top-right" />
          </div>
          <Calculator />
          <GraphStats />
        </div>
      </Modal>
    </div>
  );
};

export default App;
