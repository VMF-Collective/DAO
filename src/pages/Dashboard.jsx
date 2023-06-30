import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Dashboard() {
  const [user, loading] = useAuthState(auth);

  if (loading) return <h1>Please wait...</h1>;

  return (
    <>
      {user && (
        <div className="bg-user-home text-center">
          <h1>Dashboard</h1>
          <p>{user.displayName}</p>
          <button onClick={() => auth.signOut()}>Sign Out</button>
        </div>
      )}

      {!user && <button>Sign In</button>}
    </>
  );
}
