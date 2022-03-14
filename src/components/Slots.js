import Slot from "./Slot";
import { icons } from "../iconRender/icons";

function Slots({ slotNum, slotArr }) {
  let arr = [];
  let slots;

  for (let i = 0; i < slotNum; i++) {
    arr.push("");
  }
  if (slotArr.length < slotNum) {
    const arr1 = arr.splice(slotArr.length, arr.length + 1);
    const arr2 = slotArr.concat(arr1);

    slots = arr2.map((s, i) => <Slot key={i} />);
    console.log("arr1", arr1, "arr2", arr2);
  } else if ((slotArr.length = arr.length)) {
    slots = slotArr.map((s, i) => <Slot key={i} />);
  } else if (slotArr.length > arr.length) {
    const arr1 = slotArr.splice(0, arr.length);
  }

  return (
    <div>
      <div>{slots}</div>
    </div>
  );
}

export default Slots;
