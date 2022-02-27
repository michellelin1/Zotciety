import React from 'react';
import './Home.css';
import {Link} from "react-router-dom";
import db from '../../firebase';
import { collection, getDocs, addDoc, deleteDoc, serverTimestamp} from "firebase/firestore"; 

export function Home() {
  async function addUser(){
    try {
      const docRef = await addDoc(collection(db, "UserData"), {
        points: 0,
        timestamp: serverTimestamp()
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  function PromptButton() {
    return (
      <Link to="/prompts">
        <button className = "buttons ButtonFont">
          ZotPrompts
        </button>
      </Link>
    );
  }
  function TrialButton() {
    return (
      <Link to="/challenges">
        <button className = "buttons ButtonFont">
          ZotTrials
        </button>
      </Link>
    );
  }
  function LeaderButton() {
    return (
      <Link to="/leaderboard">
        <button className = "buttons ButtonFont">
          Zotboard
        </button>
      </Link>
    );
  }
  function LogInButton() {
    return (
      <button onClick = {addUser} className = "buttons ButtonFont">
        Create User
      </button>
    );
  }
  return (
    <div>
			<h1 className = "TitleFont titleposition" >Zotciety</h1>
      <div className = "Container backgroundimage">
        <div className = "row position">
          <div className = "col">
            <PromptButton />
          </div>
          <div className = "col">
            <TrialButton />
          </div>
        </div>
        <div className = "row">
          <div className = "col">
            <LeaderButton />
          </div>
        </div>
        <div className = "row">
          <div className = "col">
            <LogInButton />
          </div>
        </div>
      </div>
    </div>
    );
}
