import { React, useEffect, useState } from "react";
import './Challenges.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import ActivityCard from "../../components/activityCard/ActivityCard";
import db from './../../firebase'
import {query, where, collection, getDocs } from 'firebase/firestore'

async function randomChallenges() {
	let result = []
	for(let i=0; i<3; i++) {
		const index = Math.floor(Math.random() * 4)
		const q = query(collection(db, "Challenges", "Level"+(i+1), "Activites"), where("id", "==", index));
		const querySnapshot = await getDocs(q);
		querySnapshot.forEach((doc) => {
			let data = doc.data()
			result.push({
				challenge: data.question,
				description: data.description,
				points: i+1
			})
		});
	}
	return result;
}


export function Challenges() {
	const [currChallenges, setCurrChallenges] = useState([]);

	useEffect(newChallenges, [])

	// let listChallenges;
	async function newChallenges() {
		setCurrChallenges(await randomChallenges())
		// listChallenges = <div></div>
	}

	console.log(currChallenges)
	const listChallenges = currChallenges.map(challenge =>
		<ActivityCard key={challenge.challenge} pr={challenge.challenge} d={challenge.description} po={challenge.points} type={"Challenges"} />
	);

  return (
    <div className="challengesBackground">
			<h1 className="title">ZotTrials</h1>
			<Link to="/">
				<button type="button" className="btn btn-lg home-btn">Home</button>
			</Link>
			{listChallenges}
			{/* <button className="btn refresh-btn">hi</button> */}
			<center><button type="button" className="btn refresh-btn mb-5" onClick={() => newChallenges()}>Generate New Trials</button></center>
    </div>
  );
}
