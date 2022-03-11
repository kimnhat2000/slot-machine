import React from "react";
import { icons } from "../iconRender/icons";

function Slots() {
  const ranNum = Math.floor(Math.random() * 3);
  const img = <img src={icons[ranNum].img} />;
  {
    return <div>{img},</div>;
  }
}

export default Slots;
