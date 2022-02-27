import React from 'react';
import "./ActivityCard.css"

export default function ActivityCard({pr, d, po}) {
  let prompt = pr
  let description = d
  let point = po

  function CompletedButton() {

    function click() {
      prompt = "hello"
    }

    return (
      <button class="clickBtn" onClick={click}>Completed</button>
    )
  }

  return (
    <div class="card container">
      <div class="row">
        <div class="first col-2">
    			<h1><strong>{prompt}</strong></h1>
          <p>{description}</p>
        </div>
        <div class="second col">
          <p>{point} pt.</p>
        </div>
          <div class="button"><CompletedButton /></div>
        </div>
    </div>
    );
}
