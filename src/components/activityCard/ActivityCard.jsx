import React from 'react';
import "./ActivityCard.css"

export default function ActivityCard() {
  let prompt = "Prompt"
  let description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed fringilla erat, nec commodo metus. Nunc eleifend rhoncus rutrum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer vitae orci at massa interdum convallis. Proin malesuada mauris tellus, non congue massa eleifend iaculis. Vestibulum quis velit augue. Vestibulum odio nulla, finibus non sodales ut, laoreet et tortor. Nam non nibh nec erat placerat porttitor in vitae nisi. Pellentesque et mattis diam, ut consectetur quam. fdfsfafewd, consectetur adipiscing elit. Aliquam sed fringilla erat, nec commodo metus. Nunc eleifend rhoncus rutrum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer vitae orci at massa interdum convallis. Proin malesuada mauris tellus, non congue massa eleifend iaculis. Vestibulum quis velit augue. Vestibulum odio nulla, finibus non sodales ut, laoreet et tortor. Nam non nibh nec erat placerat porttitor in vitae nisi. Pellentesque et mattis diam, ut consectetur quam."
  let point = "points"

  function CompletedButton() {

    function click() {
      window.alert("hello")
    }

    return (
      <button class="clickBtn" onClick={click}>Completed</button>
    )
  }

  return (
    <div class="card container">
      <div class="row">
        <div class="first col">
    			<h1><strong>{prompt}</strong></h1>
          <p>{description}</p>
        </div>
        <div class="second col">
          <p>{point}</p>
          <div class="button"><CompletedButton /></div>
        </div>
        </div>
    </div>
    );
}
