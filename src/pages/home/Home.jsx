import React from 'react';
import './Home.css';
import {Link} from "react-router-dom";
import { CreateUser } from '../../components/createUser/createUser';

export function Home() {
  const [modalShow, setModalShow] = React.useState(false);

  function PromptButton() {
    return (
      <Link to="/prompts">
        <button className = "buttons ButtonFont">
          ZotPrompts
        </button>
      </Link>
    );
  }
  function TrialButton() {
    return (
      <Link to="/challenges">
        <button className = "buttons ButtonFont">
          ZotTrials
        </button>
      </Link>
    );
  }
  function LeaderButton() {
    return (
      <Link to="/leaderboard">
        <button className = "buttons ButtonFont">
          ZotBoard
        </button>
      </Link>
    );
  }
  function LogInButton() {
    return (
      <button onClick ={() => setModalShow(true)} className = "buttons ButtonFont">
        Create User
      </button>
    );
  }
  return (
    <div>
			<h1 className = "TitleFont titleposition" >Zotciety</h1>
      <div className = "Container backgroundimage">
        <div className = "row position">
          <div className = "col">
            <PromptButton />
          </div>
          <div className = "col">
            <TrialButton />
          </div>
        </div>
        <div className = "row">
          <div className = "col">
            <LeaderButton />
          </div>
        </div>
        <div className = "row">
          <div className = "col">
            <LogInButton />
          </div>
        </div>
      </div>
      <CreateUser 
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
    );
}
