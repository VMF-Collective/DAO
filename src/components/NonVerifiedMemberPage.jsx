import { db, auth } from "../utils/firebase";
import { useNavigate, Link } from "react-router-dom";

export default function NonVerifiedMemberPage({ user }) {
  const navigate = useNavigate();

  const { firstName, lastName, userTypeName, community } = user;

  const name = firstName + " " + lastName;

  return (
    <div className="bg-user-home text-center">
      <h1>Dashboard</h1>
      <p>First Name: {name}</p>
      <p>Community: {community}</p>
      <p>Role: {userTypeName}</p>
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
