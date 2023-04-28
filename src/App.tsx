import Calculator from "./components/Calculator";
import GraphStats from "./components/GraphStats";
import Modal from "./components/Modal";

const App = () => {
  return (
    <div>
      <Modal>
        <div className="h-full w-full flex justify-around flex-col">
          <Calculator />
          <GraphStats />
        </div>
      </Modal>
    </div>
  );
};

export default App;
