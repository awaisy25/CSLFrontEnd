import React from "react";
import tt from "../assets/Tool-tip.png";
import "../components/styles/ToolTip.scss"
const ToolTip = (props) => {
    return (
        <div className="tool-tip-wrapper">
              <img src={tt} alt="" className="tool-tip"/><span className="tip-info">{props.text}</span>
        </div>
    )
    }
export default ToolTip;