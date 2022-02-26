import { React, useState } from "react";
import ActivityCard from "../../components/activityCard/ActivityCard"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

function randomPrompts(prompts){
	let result = []
	for(const p in prompts) {
		const selectPrompt = prompts[p][Math.floor(Math.random()*prompts[p].length)];
		result.push({
			prompt: selectPrompt.prompt,
			description: selectPrompt.description,
			points: p
		});
	}
	// console.log(result)
	return result
}

export function Prompts() {
	const prompts = {
		1: [
			{
				prompt: "Smile at someone",
				description: "Smiling at someone, a person you recognize from class or someone you just met, will help you give off a friendly presence and make you seem more approachable. There is not necessarily a lot of interaction between the two patrons but it can lead to more frequent interactions with the receiver."
			},
			{
				prompt: "Compliment someone",
				description: "This is almost a fool proof way to start a small-talk conversation. And depending on how comfortable you are with the person you are complementing, you can either leave it at that or continue the conversation."
			},
			{
				prompt: "Ask for someone's social media/way of contact and reach out to them",
				description: "This is a low key situation to first foster a friendship because you can associate a face to an online media presence. Reaching out online is also a good transition back to in-person interactions because there is still security in having a screen in between interactions.",
			}
		],
		2: [
			{
				prompt: "Attend an in-person resident hall event",
				description: "These events are a great place to meet your hallmates. There is no planning involved on your part, and you will likely meet extroverted people. And! Quick tip- extroverted people are a great source to meeting new people!"
			},
			{
				prompt: "Attend a club meeting",
				description: "When you attend a club, you are meeting a lot  of people who share a similar interest as you. This is a good conversation starter because you would be talking about something you are passionate about, and that could lead to discovering other common interests."
			},
			{
				prompt: "Attend an in-person resident hall event",
				description: "These events are a great place to meet your hallmates. There is no planning involved on your part, and you will likely meet extroverted people. And! Quick tip- extroverted people are a great source to meeting new people!",
			},
		],
		3: [
			{
				prompt: "Sit next to someone new in lecture",
				description: "some description"
			},
			{
				prompt: "Go off-campus with someone- get boba or watch a movie, etc",
				description: "some description"
			},
			{
				prompt: "Leave your dorm room door open",
				description: "some description",
			}
		]
	}

	const [currPrompts, setCurrPrompts] = useState(randomPrompts(prompts));


	function newPrompts() {
		setCurrPrompts(randomPrompts([prompts]))
	}

	const listPrompts = currPrompts.map(prompt =>
		<div key={prompt.prompt}>
			<p>{prompt.prompt}</p>
			<p>{prompt.description}</p>
			<p>{prompt.points}</p>
		</div>
	);

  return (
    <div>
			<h1 className="title">ZotPrompts</h1>
			<Link to="/">
				<button type="button" className="btn btn-lg home-btn">Home</button>
			</Link>
			{listPrompts}
      <ActivityCard />
			<center><button type="button" className="btn refresh-btn" onClick={() => newPrompts()}>Generate New Trials</button></center>
    </div>
    );
}
