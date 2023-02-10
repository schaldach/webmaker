"use client";

import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../../lib/Firebase";
import { useRouter } from "next/navigation";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../lib/Firebase";

function Profile() {
  const [username, setUsername] = useState<string>("");
  const [profilePic, setProfilePic] = useState<string>('')

  const router = useRouter();
  const user = auth.currentUser;

  function changeProfile() {
    if (user) {
      setDoc(
        doc(db, "users", user.uid),
        { user_name: username },
        { merge: true }
      );
    }
  }

  function Logout() {
    signOut(auth)
      .then(() => {
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <button onClick={Logout}>Logout</button>
      <input placeholder="username" value={username} onChange={e => setUsername(e.target.value)}/>
      <button onClick={changeProfile}>alterar perfil</button>
    </div>
  );
}

export default Profile;
