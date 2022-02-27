import React from "react";
import { Link } from "react-router-dom";
import './leadershipboard.css';

export function LeaderBoard() {
  const first_place = 'name1'
  const second_place = 'name2'
  const third_place = 'name3'
  return (
    <div>
      <div className = 'mainheader'>
        <img src="https://tinyurl.com/43hx3ez9" className = 'leftimage'/>
        <center>
          <h1 className="title">ZotBoard!</h1>
        </center>
        <img src="https://tinyurl.com/43hx3ez9" className = 'rightimage'/>
      </div>
      <div>
        <Link to="/">
          <button type='button' className = 'homebutton btn btn-lg'>Home</button>
        </Link>
      </div>
      <center>
          <div className= 'board'>
            <div>
              <div className = 'second name'>{second_place}</div>
              <div className = 'second pillar'>
                <img className = 'award' src='https://tinyurl.com/hejds6p3'/>
                <div className = 'second place'>Second Place</div>
              </div>
            </div>
            <div>
              <div className = 'first name'>{first_place}</div>
              <div className = 'first pillar'>
                <img className = 'award' src='https://tinyurl.com/hejds6p3'/>
                <div className = 'first place'>First Place</div>
              </div>
            </div>
            <div>
              <div className = 'third name'>{third_place}</div>
              <div className = 'third pillar'>
                <img className = 'award' src='https://tinyurl.com/hejds6p3'/>
                <div className = 'third place'>Third Place</div>
              </div>
            </div>
          </div>
          <button className="congrats">Congratulations! You have successfully assimilated into Zotciety!</button>
      </center>
    </div>
    );
}