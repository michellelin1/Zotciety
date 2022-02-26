import React from 'react';
import './Home.css';


export function Home() {
  return (
    <div>
			<h1 className = "TitleFont titleposition" >Zotciety</h1>
      <div className = "Container">
        <div className = "row position">
          <div className = "col">
            <button className = "buttons ButtonFont">ZotPrompts</button>
          </div>
          <div className = "col">
            <button className = "buttons ButtonFont">ZotTrials</button>
          </div>
        </div>
      </div>
    </div>
    );
}

