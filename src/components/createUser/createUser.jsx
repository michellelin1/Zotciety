import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import db from '../../firebase';

import { collection, getDocs, addDoc, deleteDoc, serverTimestamp} from "firebase/firestore"; 

export function CreateUser(props) {
	const [userName, setUserName] = useState('');

	async function addUser(e){
		e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "UserData"), {
        points: 0,
        timestamp: serverTimestamp(),
				userName: userName
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
		props.onHide()
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
			<form className="form-group" onSubmit={addUser}>
				<Modal.Body>
						<label>Username</label>
						<input className="form-control" value={userName} onInput={(e) => setUserName(e.target.value)} required/>

				</Modal.Body>
				<Modal.Footer>
						<button type="submit" className="btn btn-primary">Submit</button>
					{/* <Button onClick={props.onHide}>Close</Button> */}
				</Modal.Footer>
			</form>
    </Modal>
  );
}
