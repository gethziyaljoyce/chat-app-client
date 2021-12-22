import React from "react";

import "./ChatBar.css";
import exit from "../../Icons/exit.png";
import onlineIcon from "../../Icons/online.png";

const ChatBar = ({room}) => (
    
        <div className="chatBar">
            <div className="leftInnerContainer">
                <img className="onlineIcon" src={onlineIcon} alt="online" />
                <h4>{room}</h4>
            </div>
            <div className="rightInnerContainer">
                <a href="/"><img src={exit} alt="close" /></a>
            </div>
        </div>
    );


export default ChatBar;