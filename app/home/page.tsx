"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { collection, query, Timestamp, where } from 'firebase/firestore'
import { db } from "../../lib/Firebase";
import { auth } from "../../lib/Firebase";

function Home() {
  const [user, setUser] = useState<any>(null)
  const usersRef = collection(db, "users");

    useEffect(() => {
        const currentUser = auth.currentUser
        if(currentUser){
            const q = query(usersRef, where("user_id", "==", currentUser.uid))
            setUser(q)
        }
  }, [])
  
    return (
    <div>
      {user?<div>{user.user_name}</div>:''}
      <Link href="/profile">meu perfil</Link>
    </div>
  );
}

export default Home;
