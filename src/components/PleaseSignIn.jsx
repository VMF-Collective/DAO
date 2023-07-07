import { useNavigate, Link } from "react-router-dom";

export default function PleaseSignIn() {
  return (
    <div className="bg-user-home text-center">
      <h1>
        Please <Link to="/Login">Sign In</Link> or <Link to="/Join">Join</Link>{" "}
        to access the dashboard
      </h1>
    </div>
  );
}
