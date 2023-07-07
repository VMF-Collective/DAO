import React from "react";
import { db } from "../utils/firebase";
import { doc, updateDoc } from "firebase/firestore";

export default function UserListing({ data, level }) {
  console.log(data);

  const users = data.filter((user) => user.data().userTypeNumber < level);

  const roles = [
    { userTypeName: "Admin", userTypeNumber: 4 },
    { userTypeName: "Board Member", userTypeNumber: 3 },
    { userTypeName: "Verified Member", userTypeNumber: 2 },
    { userTypeName: "Non-Verified Member", userTypeNumber: 1 },
  ];

  const availableRoles = roles.filter((roles) => roles.userTypeNumber < level);

  async function handleChange(e) {
    const selectedValue = e.target.value;

    const selectedOptState = roles.filter(
      (d) => d.userTypeNumber == selectedValue
    )[0];

    const { userTypeName, userTypeNumber } = selectedOptState;

    const docRef = doc(db, "Users", e.target.id);
    await updateDoc(docRef, {
      userTypeName,
      userTypeNumber,
    });
  }

  return (
    <div>
      {data.map((user) => {
        const userId = user.id;
        const typeNumber = user.data().userTypeNumber;
        return (
          <div
            style={{
              display: "flex",
              backgroundColor: "gray",
              maxWidth: "600px",
              margin: "2em auto",
            }}
          >
            <p style={{ flex: 1 }}>
              {user.data().firstName} {user.data().lastName}
            </p>

            {typeNumber >= level ? (
              <select
                style={{ flex: 1 }}
                placeholder={user.data().userTypeName}
                value={user.data().userTypeName}
                disabled
              >
                <option style={{ textAlign: "center" }}>
                  {user.data().userTypeName}
                </option>
              </select>
            ) : (
              //   <select
              //     style={{ flex: 1 }}
              //     id={userId}
              //     onChange={handleChange}
              //     defaultValue={user.data().userTypeName}
              //     disabled
              //   >
              //     {availableRoles.map((role) => {
              //       return (
              //         <option value={role.userTypeNumber}>
              //           {user.data().userTypeName}
              //         </option>
              //       );
              //     })}
              //   </select>
              <select
                style={{ flex: 1 }}
                id={userId}
                onChange={handleChange}
                defaultValue={typeNumber}
              >
                {availableRoles.map((role) => {
                  return (
                    <option
                      style={{ textAlign: "center" }}
                      value={role.userTypeNumber}
                    >
                      {role.userTypeName}
                    </option>
                  );
                })}
              </select>
            )}
          </div>
        );
      })}
    </div>
  );
}
