import React from 'react';
import "./ActivityCard.css"

export default function ActivityCard() {
  let prompt = "Prompt"
  let description = "description"
  let point = "points"

  function CompletedButton() {

    function click() {
      window.alert("hello")
    }

    return (
      <button class="btn" onClick={click}>Completed</button>
    )
  }

  return (
    <div class="card">
        <div class="first">
    			<h1><strong>{prompt}</strong></h1>
          <p>{description}</p>
        </div>
        <div class="second">
          <p>{point}</p>
          <div class="button"><CompletedButton /></div>
        </div>
    </div>
    );
}
