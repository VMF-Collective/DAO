import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "../utils/firebase.jsx";

export default function AddCommunity() {
  const comRef = collection(db, "Communities");

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [description, setDescription] = useState();

  const AddCommunity = (e) => {
    e.preventDefault();

    try {
      if (name === undefined) {
        alert("Enter Community Name");
      } else if (email === undefined) {
        alert("Enter Email");
      } else if (description === undefined) {
        alert("Enter Description");
      } else {
        addDoc(comRef, {
          name,
          email,
          description,
          img: "https://picsum.photos/200/300",
        })
          .then((docRef) => console.log(docRef))
          .catch((err) => console.log(err));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="login-form">
      <div className="row">
        <div className="col-12">
          <div className="mb-3">
            <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
              Create a Community
            </label>
          </div>
          <div className="mb-3">
            <label className="form-label small fw-bold">
              Community Name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              name="s"
              required
              placeholder="Community Name:"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="col-12">
          <div className="mb-3">
            <label className="form-label small fw-bold">
              Your Email <span className="text-danger">*</span>
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              required
              placeholder="Your Email :"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="col-12">
          <div className="mb-3">
            <label className="form-label small fw-bold">
              Description <span className="text-danger">*</span>
            </label>
            <textarea
              className="form-control"
              name="description"
              required
              placeholder="Description :"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>

        <div className="col-12">
          <div className="mb-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue
                required
                id="flexCheckDefault"
              />
              <label
                className="form-check-label small fw-bold"
                htmlFor="flexCheckDefault"
              >
                I Accept{" "}
                <a href="#" className="text-primary">
                  Terms And Condition
                </a>
              </label>
            </div>
          </div>
        </div>
        <div className="col-12">
          <button className="btn btn-primary w-100" onClick={AddCommunity}>
            Create Community
          </button>
        </div>
      </div>
    </form>
  );
}
