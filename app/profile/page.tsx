'use client'

import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../lib/Firebase";
import { useRouter } from "next/navigation";

function Profile() {
  const router = useRouter()

  function Logout() {
    signOut(auth)
      .then(() => {
        router.push('/')
      })
      .catch((error) => {
        console.log(error)
      });
  }

  return (
    <div>
      <button onClick={Logout}>Logout</button>
    </div>
  );
}

export default Profile;
