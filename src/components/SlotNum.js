import React from "react";
import { icons } from "../iconRender/icons";

class SlotNum extends React.Component {
  constructor(props) {
    super(props);
    this.state = { num: 2, warning: "", arr: [] };
  }
  onAddButtonClick = () => {
    const state = this.state;
    let newArr = [];
    for (var i = 0; i < state.num; i++) {
      newArr.push(i);
    }

    this.setState({ arr: newArr }, () => {
      console.log(state.arr);
    });
    if (state.num >= 10) {
      this.setState({ warning: "you reach the max slots", num: 10 });
    } else if (state.num < 10) {
      this.setState({ num: state.num + 1 });
      this.setState({ warning: "" });
    }
    return;
  };
  onLessButtonClick = () => {
    const state = this.state;
    if (state.num <= 2) {
      this.setState({ warning: "you need at least two slots to play", num: 2 });
    } else if (state.num >= 2) {
      this.setState({ num: state.num - 1 });
      this.setState({ warning: "" });
    }
    return;
  };

  onPlay = () => {
    console.log(this.props);
  };

  render() {
    let arr = this.state.arr;

    const slot = arr.map((slot, index) => {
      const ranNum = Math.floor(Math.random() * 3);
      const img = <img src={icons[ranNum].img} value={icons[ranNum].id} />;
      {
        return <div key={index}>{img}</div>;
      }
    });

    return (
      <div>
        {slot}
        slot number {this.state.num}
        <button onClick={this.onAddButtonClick}>more slots</button>
        {this.state.num >= 10 && <h3>{this.state.warning}</h3>}
        <button onClick={this.onLessButtonClick}>less slots</button>
        {this.state.num <= 2 && <h3>{this.state.warning}</h3>}
        <button onClick={this.onPlay}>Play</button>
      </div>
    );
  }
}

export default SlotNum;
