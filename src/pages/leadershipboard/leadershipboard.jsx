import React from "react";
import './leadershipboard.css';

export function LeaderBoard() {
  return (
    <div>
			<h1 className = 'mainheader'>Leadership Board!</h1>
            <img src="https://tinyurl.com/43hx3ez9" className = 'leftimage'/>
            <img src="https://tinyurl.com/43hx3ez9" className = 'rightimage'/>
            <button type='button' className = 'homebutton btn btn-lg'>Home</button>
            <center>
                <div className= 'board'></div>
            </center>
    </div>
    );
}