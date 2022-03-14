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

    slots = arr2.map((s, i) => (
      <Slot key={i} src={s === "" ? "" : `${icons[s].img}`} />
    ));
  } else if ((slotArr.length = arr.length)) {
    slots = slotArr.map((s, i) => (
      <Slot key={i} src={s === "" ? "" : `${icons[s].img}`} />
    ));
  } else if (slotArr.length > arr.length) {
    const arr1 = slotArr.splice(0, arr.length);
    slots = arr1.map((s, i) => (
      <Slot key={i} src={s === "" ? "" : `${icons[s].img}`} />
    ));
  }
  const style = {
    display: "flex",
  };

  return (
    <div>
      <div style={style}>{slots}</div>
    </div>
  );
}

export default Slots;
