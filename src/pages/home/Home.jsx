import React from 'react';
import './Home.css';
import {Link} from "react-router-dom";


export function Home() {
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
      </div>
    </div>
    );
}

