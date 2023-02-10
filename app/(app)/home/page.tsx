"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../../lib/Firebase";
import { auth } from "../../../lib/Firebase";

function Home() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    async function getUser() {
      const currentUser = auth.currentUser;
      if (currentUser) {
        console.log(currentUser.uid)
        const docRef = doc(db, 'users', currentUser.uid);
        const docSnap = await getDoc(docRef);
        if( docSnap.exists()){
          setUser(docSnap.data())
          console.log('foi')
          console.log(docSnap.data())
        }
      }
    }
    getUser();
  }, []);

  return (
    <div>
      {user ? <div>{user.user_name}</div> : ""}
      <Link href="/profile">meu perfil</Link>
      <Link href="/dashboard">meus projetos</Link>
    </div>
  );
}

export default Home;
