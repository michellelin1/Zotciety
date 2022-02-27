import { React, useState } from "react";
import './Challenges.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import ActivityCard from "../../components/activityCard/ActivityCard";

function randomChallenges(challenges){
	let result = []
	for(const c in challenges) {
		const selectChallenge = challenges[c][Math.floor(Math.random()*challenges[c].length)];
		result.push({
			challenge: selectChallenge.challenge,
			description: selectChallenge.description,
			points: c
		});
	}
	// console.log(result)
	return result
}

export function Challenges() {
	const challenges = {
		1: [
			{
				challenge: "Smile at someone",
				description: "Smiling at someone, a person you recognize from class or someone you just met, will help you give off a friendly presence and make you seem more approachable. There is not necessarily a lot of interaction between the two patrons but it can lead to more frequent interactions with the receiver."
			},
			{
				challenge: "Compliment someone",
				description: "This is almost a fool proof way to start a small-talk conversation. And depending on how comfortable you are with the person you are complementing, you can either leave it at that or continue the conversation."
			},
			{
				challenge: "Ask for someone's social media/way of contact and reach out to them",
				description: "This is a low key situation to first foster a friendship because you can associate a face to an online media presence. Reaching out online is also a good transition back to in-person interactions because there is still security in having a screen in between interactions.",
			}
		],
		2: [
			{
				challenge: "Attend an in-person resident hall event",
				description: "These events are a great place to meet your hallmates. There is no planning involved on your part, and you will likely meet extroverted people. And! Quick tip- extroverted people are a great source to meeting new people!"
			},
			{
				challenge: "Attend a club meeting",
				description: "When you attend a club, you are meeting a lot  of people who share a similar interest as you. This is a good conversation starter because you would be talking about something you are passionate about, and that could lead to discovering other common interests."
			},
			{
				challenge: "Attend an in-person resident hall event",
				description: "These events are a great place to meet your hallmates. There is no planning involved on your part, and you will likely meet extroverted people. And! Quick tip- extroverted people are a great source to meeting new people!",
			},
		],
		3: [
			{
				challenge: "Sit next to someone new in lecture",
				description: "some description"
			},
			{
				challenge: "Go off-campus with someone- get boba or watch a movie, etc",
				description: "some description"
			},
			{
				challenge: "Leave your dorm room door open",
				description: "some description",
			}
		]
	}

	const [currChallenges, setCurrChallenges] = useState(randomChallenges(challenges));


	function newChallenges() {
		setCurrChallenges(randomChallenges(challenges))
	}

	const listChallenges = currChallenges.map(challenge =>
		<ActivityCard pr={challenge.challenge} d={challenge.description} po={challenge.points} />
	);

  return (
    <div class="challengesBackground">
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
