import { db, auth } from "../utils/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import UserListing from "./UserListing";

export default function BoardMemberPage({ user }) {
  const { userTypeName, firstName } = user;

  const navigate = useNavigate();
  const [queryState, setQueryState] = useState({
    isLoading: true,
    errorMessage: "",
    docSnapshots: null,
  });

  useEffect(() => {
    async function getUsers() {
      try {
        setQueryState({
          isLoading: true,
          errorMessage: "",
          docSnapshots: null,
        });
        const querySnapshot = await getDocs(collection(db, "Users"));
        const docs = querySnapshot.docs;
        setQueryState({
          isLoading: false,
          errorMessage: "",
          docSnapshots: docs,
        });
      } catch (error) {
        setQueryState({
          isLoading: false,
          errorMessage: "Error",
          docSnapshots: null,
        });
        console.log(error);
      }
    }

    getUsers();
  }, []);

  const { isLoading, errorMessage, docSnapshots } = queryState;

  let content;

  if (isLoading) {
    content = "Loading...";
  } else if (errorMessage) {
    content = errorMessage;
  } else {
    content = <UserListing data={docSnapshots} level={3} />;
  }

  return (
    <div className="bg-user-home text-center">
      <h1>Board Member Page</h1>
      <p>Name: {firstName}</p>

      {content}

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
