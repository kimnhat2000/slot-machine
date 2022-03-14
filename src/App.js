import React, { Component } from "react";

import Slots from "./components/Slots";

import { AiOutlinePlus, AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardNum: 2,
      message: "",
      freeze: false,
      slotArr: [],
    };
  }

  addCardNum = () => {
    const { cardNum, freeze } = this.state;
    this.setState({ freeze: !freeze });
    if (freeze && cardNum <= 2) {
      this.setState({ message: "" });
      return;
    } else if (cardNum >= 8) {
      this.setState({
        message: "You can't never win with this many slots",
        freeze: true,
      });
    } else if (cardNum >= 2 || cardNum <= 8) {
      this.setState({
        cardNum: cardNum + 1,
        message: "",
        freeze: false,
      });
    }
  };

  removeCardNum = () => {
    const { cardNum, freeze } = this.state;
    this.setState({ freeze: !freeze });
    if (freeze && cardNum >= 8) {
      this.setState({ message: "" });
      return;
    } else if (cardNum <= 2) {
      this.setState({
        message: "You need at least two slots to play",
        freeze: true,
      });
    } else if (cardNum >= 2 || cardNum <= 8) {
      this.setState({ cardNum: cardNum - 1, message: "", freeze: false });
    }
    console.log("cardnum", cardNum);
  };

  onPlay = () => {
    const { cardNum, slotArr } = this.state;
    let arr = [];
    for (let i = 0; i < cardNum; i++) {
      arr.push(Math.floor(Math.random() * 3));
    }
    this.setState({ slotArr: arr });
    console.log("slotArr", arr);
  };

  render() {
    const style = {
      backgroundColor: "gray",
      height: "100px",
      width: "100px",
      boxShadow: "5px 5px 15px 5px #000000",
    };
    const { message, cardNum, slotArr } = this.state;
    return (
      <div>
        <Slots slotNum={cardNum} slotArr={slotArr} />
        <button onClick={this.addCardNum}>
          Add a slot
          <AiFillCaretUp />
        </button>
        <button onClick={this.removeCardNum}>
          Remove a slot
          <AiFillCaretDown />
        </button>
        <button onClick={this.onPlay}>Play</button>
        {message}
      </div>
    );
  }
}

export default App;
