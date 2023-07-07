import "../styles/login.css";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, db } from "../utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  setDoc,
  Timestamp,
} from "firebase/firestore";
import { useState } from "react";

export default function Login() {
  const [warning, setWarning] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // Google Log-In
  const googleProvider = new GoogleAuthProvider();
  const GoogleLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await signInWithPopup(auth, googleProvider);

      const q = query(
        collection(db, "Users"),
        where("email", "==", result.user.email)
      );

      const queryProfile = await getDocs(q);

      if (queryProfile.docs[0].data().email === result.user.email) {
        navigate("/dashboard");
      } else {
        await setDoc(doc(db, "Users", result.user.uid), {
          bio: "",
          community: "",
          created: Timestamp.fromDate(new Date()),
          email: result.user.email,
          firstName: result.user.displayName.split(" ")[0] || "",
          lastName: result.user.displayName.split(" ")[1] || "",
          img: result.user.photoURL,
          userTypeName: "Non-Verified Member",
          userTypeNumber: 1,
        });
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Sign In Function
  const SignIn = async (e) => {
    e.preventDefault();

    const q = query(collection(db, "Users"), where("email", "==", email));
    const queryProfile = await getDocs(q);
    console.log(queryProfile.docs[0]);

    if (queryProfile.docs[0] === undefined) {
      setWarning(
        <p>
          Account not found. Please <Link to="/Join">Sign Up</Link>
        </p>
      );
    } else if (queryProfile.docs[0].data().email === email) {
      if (queryProfile.docs[0].data().password == undefined) {
        setWarning(<p>Log in with Google</p>);
      } else if (password == queryProfile.docs[0].data().password) {
        await signInWithEmailAndPassword(auth, email, password);
        navigate("/dashboard");
      } else {
        console.log(password);
        setWarning(<p>Please enter the correct password</p>);
      }
    }
  };

  return (
    <>
      <div className="container bg-user-home login-body text-bg-light text-center mb-4">
        <main className="form-signin">
          <form>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>
            <div className="warning text-danger text-center my-2">
              {warning}
            </div>
            <button
              className="w-100 btn btn-lg btn-primary"
              type="submit"
              onClick={SignIn}
            >
              Sign in
            </button>
            <div className="col-12 mt-4 text-center">
              <h6>Or Sign In With</h6>
            </div>
            <div className="col-12 text-center">
              <div className="row">
                <div className="col-sm-6 mt-2">
                  <button className="btn w-100 btn-light">
                    <i className="mdi mdi-facebook text-primary" /> Facebook
                  </button>
                </div>
                <div className="col-sm-5 mt-2">
                  <button onClick={GoogleLogin} className="btn w-100 btn-light">
                    <i className="mdi mdi-google text-danger" /> Google
                  </button>
                </div>
              </div>
            </div>
          </form>
        </main>
      </div>
    </>
  );
}
