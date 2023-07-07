import { db, auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import NonVerifiedMemberPage from "../components/NonVerifiedMemberPage";
import PleaseSignIn from "../components/PleaseSignIn";
import AdminPage from "../components/AdminPage";
import BoardMemberPage from "../components/BoardMemberPage";
import VerifiedMemberPage from "../components/VerifiedMemberPage";

export default function Dashboard() {
  const [user, loading] = useAuthState(auth);
  const [member, setMember] = useState("");
  const [role, setRole] = useState();

  useEffect(() => {
    async function getUser() {
      const docRef = doc(db, "Users", user.uid);
      const result = await getDoc(docRef);
      setMember(result.data());
      setRole(result.data().userTypeNumber);
    }

    getUser();
  }, [user]);

  if (loading) return <h1>Please wait...</h1>;

  if (role == 4) {
    return <AdminPage user={member} />;
  } else if (role == 3) {
    return <BoardMemberPage user={member} />;
  } else if (role == 2) {
    return <VerifiedMemberPage user={member} />;
  } else if (role == 1) {
    return <NonVerifiedMemberPage user={member} />;
  } else {
    return <PleaseSignIn />;
  }
}
