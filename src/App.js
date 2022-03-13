import React, {Component} from "react"

import {AiOutlinePlus, AiFillCaretUp, AiFillCaretDown} from "react-icons/ai"
import {icons} from "./iconRender/icons"

 

class App extends Component {
  constructor (props){
    super (props)
    this.state={
      cardNum:2,
      ranNum:[],
      message:"",
    }

  }
  clickThisButton=()=>{
    randomCardArray(2,2)
    console.log(randomCardArray())
  }
  render (){
    const style={
      backgroundColor : "gray",
      height: "100px",
      width:"100px",
      boxShadow: "5px 5px 15px 5px #000000",
    }
    return(
      <div>
        <AiOutlinePlus style={style}/>
        <button onClick={()=>clickThisButton()}><AiFillCaretUp/></button>
        <button><AiFillCaretDown/></button>
      </div>
      
    )
  }
}


export default App;

function randomCardArray (cardNum, ranNumRange) {
  let ranNum=[]
  let range = Math.floor(Math.random()*ranNumRange)
  for (let i=0; i<cardNum; i++){
    ranNum.push(range)
  }
  return ranNum;
}
