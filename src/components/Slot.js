import { AiOutlinePlus } from "react-icons/ai";

function Slot({ src }) {
  const style = {
    backgroundColor: "gray",
    backgroundImage: `url(${src})`,
    backgroundSize: "contain",
    height: "50px",
    width: "45px",
    boxShadow: "5px 5px 15px 5px #000000",
    margin: "5px",
    padding: "40px",
  };
  console.log("src", src);
  return <div style={style} />;
}

export default Slot;
