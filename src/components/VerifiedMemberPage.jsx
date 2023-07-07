import { db, auth } from "../utils/firebase";
import { useNavigate, Link } from "react-router-dom";

export default function VerifiedMemberPage({ user }) {
  const { userTypeName, firstName, community } = user;

  const navigate = useNavigate();
  return (
    <div className="bg-user-home text-center">
      <h1>{userTypeName} Page</h1>
      <p>Welcome {firstName}!</p>
      <p>Community: {community}</p>
      <button
        onClick={() => {
          auth.signOut();
          navigate("/");
        }}
      >
        Sign Out
      </button>
    </div>
  );
}
