import SlotNum from "./components/SlotNum";

function App() {
  onplay = () => {
    let arr = [1, 1, 2, 1];
    console.log(arr.every((val, i, arr) => val === arr[0]));
  };
  return (
    <div>
      <SlotNum />
      <button onClick={onplay}>Roll</button>
    </div>
  );
}

export default App;
