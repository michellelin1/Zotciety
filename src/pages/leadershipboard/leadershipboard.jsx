import React from "react";
import { Link } from "react-router-dom";
import './leadershipboard.css';
import db from "./../../firebase";
import { query, limit, doc, collection, updateDoc, getDocs, increment, orderBy } from "firebase/firestore";

export function LeaderBoard() {
  async function getTops() {
    let result;
    let curr_id;
    const q = query(collection(db, "UserData"), orderBy("points"), limit(3));
    const querySnapshot = await getDocs(q);
    const top = [];
    querySnapshot.forEach((doc) => {
      top.push(doc.id);
    });
    console.log(top);
    return top
  }
  const top = getTops()
  const first_place = top[0]
  const second_place = top[1]
  const third_place = top[2]
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