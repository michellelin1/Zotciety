import React, {useState} from 'react';
import "./ActivityCard.css"
import db from './../../firebase';
import {query, where, doc, collection, updateDoc, getDocs, increment, orderBy} from 'firebase/firestore'
 
export default function ActivityCard({pr, d, po, type}) {
 // let prompt = pr
 // let description = d
 // let point = po
 const [prompt, setPrompt] = useState(pr)
 const [description, setDescription] = useState(d)
 // const [point, setPoint] = useState(po)
 // let completed = false
 // let questions = prompts
 // const [completed, setCompleted] = useState(Math.floor(Math.random()*questions[point].length))
 
 async function randomActivity() {
   let result;
   const index = Math.floor(Math.random() * 4)
   let a = "Activities"
   if (type === "Challenges") {
     a = "Activites"
   }
   console.log(type)
   const q = query(collection(db, type, "Level"+(po), a), where("id", "==", index));
   const querySnapshot = await getDocs(q);
   querySnapshot.forEach((doc) => {
     let data = doc.data()
     console.log(data)
     result = {
       challenge: data.question,
       description: data.description,
       points: po
     }
   });
   console.log(result)
 return result;
}
 
 
 function CompletedButton() {
 
   async function click() {
     let activity = await randomActivity()
     setPrompt(activity.challenge)
     setDescription(activity.description)
     // setCompleted(Math.floor(Math.random()*questions[point].length))
     // prompt = questions[point][completed]["prompt"]
     // description = questions[point][completed]["description"]
     let result;
     let curr_id;
     const q = query(collection(db, "UserData"), orderBy("timestamp"));
     const querySnapshot = await getDocs(q);
     querySnapshot.forEach((doc) => {
       result = doc.data()
       curr_id = doc.id
     });
     console.log(curr_id);
     const temp = doc(db, "UserData", curr_id);
     await updateDoc(temp, {
       points: increment(1)
     });
   }
 
   return (
     <button class="clickBtn" onClick={click}>{"Completed"}</button>
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
         <p>{po} pt.</p>
       </div>
         <div class="button"><CompletedButton /></div>
       </div>
   </div>
   );
}
 

