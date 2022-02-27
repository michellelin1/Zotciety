import { React, useState, useEffect } from "react";
import ActivityCard from "../../components/activityCard/ActivityCard"
import './Prompts.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

import db from './../../firebase'
import {query, where, collection, getDocs } from 'firebase/firestore'

async function randomPrompts() {
	let result = []
	for(let i=0; i<3; i++) {
		const index = Math.floor(Math.random() * 4)
		const q = query(collection(db, "Prompts", "Level"+(i+1), "Activities"), where("id", "==", index));
		const querySnapshot = await getDocs(q);
		querySnapshot.forEach((doc) => {
			let data = doc.data()
			result.push({
				prompt: data.question,
				description: data.description,
				points: i+1
			})
		});
	}
	return result;
}


export function Prompts() {

	const [currPrompts, setCurrPrompts] = useState([]); 

	useEffect(newPrompts, []);

	async function newPrompts() {
		setCurrPrompts(await randomPrompts());
	}

	const listPrompts = currPrompts.map(prompt =>
		<ActivityCard key={prompt.prompt} pr={prompt.prompt} d={prompt.description} po={prompt.points} type={"Prompts"}/>
	);

  return (
    <div class="promptBackground">
			<h1 className="title">ZotPrompts</h1>
			<Link to="/">
				<button type="button" className="btn btn-lg home-btn">Home</button>
			</Link>
			{listPrompts}
			<center><button type="button" className="btn refresh-btn mb-5" onClick={() => newPrompts()}>Generate New Prompts</button></center>
    </div>
    );
}
