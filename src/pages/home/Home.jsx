import React from 'react';
import './Home.css';


export function Home() {
  function PromptButton() {
    function handleClick() {
      window.open("https://www.google.com");
    }
    return (
      <button className = "buttons ButtonFont" onClick={handleClick}>
        ZotPrompts
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
            <button className = "buttons ButtonFont">ZotTrials</button>
          </div>
        </div>
      </div>
    </div>
    );
}

