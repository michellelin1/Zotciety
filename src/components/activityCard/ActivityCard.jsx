import React, { useState, useEffect } from "react";
import "./ActivityCard.css";
import db from "./../../firebase";
import { query, where, doc, collection, updateDoc, getDocs, increment, orderBy } from "firebase/firestore";

export default function ActivityCard({ pr, d, po, type }) {
  const [prompt, setPrompt] = useState(pr);
  const [description, setDescription] = useState(d);

  useEffect(() => {
    setPrompt(pr);
    setDescription(d);
  }, [pr, d]);

  async function randomActivity() {
    let result;
    const index = Math.floor(Math.random() * 4);
    let a = "Activities";
    if (type === "Challenges") {
      a = "Activites";
    }
    // console.log(type);
    const q = query(
      collection(db, type, "Level" + po, a),
      where("id", "==", index)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      let data = doc.data();
      // console.log(data);
      result = {
        challenge: data.question,
        description: data.description,
        points: po,
      };
    });
    // console.log(result);
    return result;
  }

  function CompletedButton() {
    async function click() {
      let activity = await randomActivity();
      setPrompt(activity.challenge);
      setDescription(activity.description);

      let result;
      let curr_id;
      const q = query(collection(db, "UserData"), orderBy("timestamp"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        result = doc.data();
        curr_id = doc.id;
      });
      // console.log(curr_id);
      const temp = doc(db, "UserData", curr_id);
      await updateDoc(temp, {
        points: increment(po),
      });
    }

    return (
      <button class="clickBtn" onClick={click}>
        {"Completed"}
      </button>
    );
  }

  return (
    <div class="card container">
      <div class="row">
        <div class="first col-2">
          <h1>
            <strong>{prompt}</strong>
          </h1>
          <p>{description}</p>
        </div>
        <div class="second col">
          <p>{po} pt.</p>
        </div>
        <div class="button">
          <CompletedButton />
        </div>
      </div>
    </div>
  );
}
