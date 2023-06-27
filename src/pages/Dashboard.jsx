import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Dashboard() {
  const [user, loading] = useAuthState(auth);

  if (loading) return <h1>Please wait...</h1>;

  return (
    <>
      <h1>Dashboard</h1>
      {/* <h2>Coming Soon</h2> */}

      {user && (
        <div>
          <p>{user.displayName}</p>
          <button>Sign Out</button>
        </div>
      )}

      {!user && <button onClick={() => auth.signOut()}>Sign In</button>}
    </>
  );
}
