import { AiOutlinePlus } from "react-icons/ai";

const style = {
  backgroundColor: "gray",
  height: "50px",
  width: "50px",
  boxShadow: "5px 5px 15px 5px #000000",
  margin: "5px",
  padding: "40px",
};

function Slot({ src }) {
  return <AiOutlinePlus style={style} />;
}

export default Slot;
