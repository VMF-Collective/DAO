import { useState } from "react";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import {
  addDoc,
  collection,
  query,
  where,
  getDocs,
  doc,
  setDoc,
  Timestamp,
} from "firebase/firestore";

export default function Join() {
  const navigate = useNavigate();

  const [user, loading] = useAuthState(auth); // keep track of auth state

  // Google Log-In
  const googleProvider = new GoogleAuthProvider();
  const GoogleLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result.user);
      await setDoc(doc(db, "Users", result.user.uid), {
        bio: "",
        community: "",
        created: Timestamp.fromDate(new Date()),
        email: result.user.email,
        firstName: result.user.displayName.split(" ")[0],
        lastName: result.user.displayName.split(" ")[1],
        img: result.user.photoURL,
        userType: "",
      });
      // navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  // Facebook Log-In
  const facebookProvider = new FacebookAuthProvider();
  const FacebookLogin = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      console.log(result.user);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const [warning, setWarning] = useState("");
  const [community, setCommunity] = useState();
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPass, setConfPass] = useState("");

  // Registration function
  const Register = async (e) => {
    e.preventDefault();
    try {
      if (community === undefined) {
        setWarning("Select your Community");
      } else if (firstName === "") {
        console.log(firstName);
        setWarning("Enter First Name");
      } else if (email === "") {
        setWarning("Enter Email");
      } else if (password === "") {
        setWarning("Enter password");
      } else if (confPass !== password) {
        setWarning("Match your password");
      } else {
        const q = query(collection(db, "Users"), where("email", "==", email));
        console.log(email);

        const queryProfile = await getDocs(q);

        if (queryProfile.docs[0].exists()) {
          console.log(queryProfile.docs[0].data());
          setWarning("User already exists! Please sign in");
        }
      }
    } catch (error) {
      console.log(error);
      setWarning(null);
      AddUser();
      navigate("/dashboard");
    }
  };

  // function to add user to firestore with info from registration form
  function AddUser() {
    addDoc(collection(db, "Users"), {
      bio: "",
      community,
      created: "",
      email,
      firstName,
      img: "",
      userType: "",
      password,
    });
  }

  return (
    <>
      <section className="bg-user-home user-pages d-flex align-items-center">
        <div className="bg-overlay bg-overlay-white" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-8">
              <div className="text-center">
                <a href="">
                  <img src="images/logo-dark.png" height={25} alt="" />
                </a>
              </div>
              <div className="login-page bg-white shadow-lg rounded p-4 mt-4 position-relative">
                <div className="text-center">
                  <h5 className="mb-4 pb-2">Join a Community</h5>
                </div>
                <form className="login-form">
                  <div className="row">
                    <div className="col-12">
                      <div className="mb-3">
                        <label
                          className="my-1 mr-2"
                          htmlFor="inlineFormCustomSelectPref"
                        >
                          Pick Your Community
                        </label>
                        <select
                          value={community}
                          onChange={(e) => setCommunity(e.target.value)}
                          required
                          className="my-1 mr-sm-2 form-control"
                          id="inlineFormCustomSelectPref"
                        >
                          <option selected>Select your Community</option>
                          <option value="Westend">Westend</option>
                          <option value="Legacy Park">Legacy Park </option>
                          <option value="Not Listed">Not Listed</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <label className="form-label small fw-bold">
                          First name <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="s"
                          required
                          placeholder="First Name :"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
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
                          Password <span className="text-danger">*</span>
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          required
                          placeholder="Password :"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mb-3">
                        <label className="form-label small fw-bold">
                          Confirm Password{" "}
                          <span className="text-danger">*</span>
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          required
                          placeholder="Confirm Password :"
                          value={confPass}
                          onChange={(e) => setConfPass(e.target.value)}
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
                    <div className="warning text-danger text-center my-2">
                      {warning}
                    </div>
                    <div className="col-12">
                      <button
                        className="btn btn-primary w-100"
                        onClick={Register}
                      >
                        Register
                      </button>
                    </div>
                    <div className="col-12 mt-4 text-center">
                      <h6>Or Signup With</h6>
                    </div>
                    <div className="col-12">
                      <div className="row">
                        <div className="col-sm-6 mt-4">
                          <button
                            onClick={FacebookLogin}
                            className="btn w-100 btn-light"
                          >
                            <i className="mdi mdi-facebook text-primary" />{" "}
                            Facebook
                          </button>
                        </div>
                        <div className="col-sm-6 mt-4">
                          <button
                            onClick={GoogleLogin}
                            className="btn w-100 btn-light"
                          >
                            <i className="mdi mdi-google text-danger" /> Google
                          </button>
                        </div>
                      </div>
                    </div>
                    {/*end col*/}
                    <div className="mx-auto">
                      <p className="mb-0 mt-3">
                        <small className="text-dark me-2">
                          Already have an account ?
                        </small>{" "}
                        <a href="login.html" className="text-dark fw-bold">
                          Sign in
                        </a>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
              {/*end login*/}
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
      </section>
    </>
  );
}
